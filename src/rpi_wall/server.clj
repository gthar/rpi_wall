(ns rpi-wall.server
  (:require
    [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
    [compojure.core           :refer [defroutes GET POST]]
    [compojure.route          :refer [resources not-found]]
    [hiccup.core              :refer [html]]
    [garden.core              :refer [css]]
    [org.httpkit.server       :refer [run-server]]

    [taoensso.sente :refer [make-channel-socket-server!  start-server-chsk-router!]]
    [taoensso.sente.server-adapters.http-kit :refer [get-sch-adapter]]

    [rpi-wall.helpers     :refer [set-interval config]]
    [rpi-wall.style       :refer [style]]
    [rpi-wall.key-handler :refer [key-handler]]

    [rpi-wall.weather.server  :refer [set-weather! weather-state]]

    [rpi-wall.calendar.server :refer [set-cal-info!
                                      busy-days-state
                                      todo-today-state]]
    [rpi-wall.gmail.server    :refer [set-new-emails! new-emails-state]]
    [rpi-wall.todo.server     :refer [read-todo! todo-state]])
  (:gen-class))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(let [chsk-server (make-channel-socket-server! (get-sch-adapter)
                                               {:packer :edn})]
  (def ring-ajax-post (:ajax-post-fn chsk-server))
  (def ring-ajax-get-or-ws-handshake (:ajax-get-or-ws-handshake-fn chsk-server))
  (def ch-chsk (:ch-recv chsk-server))                 ; ChannelSocket's receive channel
  (def chsk-send! (:send-fn chsk-server))              ; ChannelSocket's send API fn
  (def connected-uids (:connected-uids chsk-server)))  ; Watchable, read-only atom

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn landing-pg-handler
  [ring-req]
  (html [:html [:head [:title "RPi wall clock"]
                      [:link {:rel  "stylesheet"
                              :type "text/css"
                              :href "css/weather-icons.css"}]
                      [:style style]]
               [:body [:div#app]
                      [:script {:src "main.js"}]]]))

(defroutes ring-routes
  (GET  "/"      ring-req (landing-pg-handler            ring-req))
  (GET  "/chsk"  ring-req (ring-ajax-get-or-ws-handshake ring-req))
  (POST "/chsk"  ring-req (ring-ajax-post                ring-req))
  (resources "/") ; Static files, notably public/main.js (our cljs target)
  (not-found (html [:h1 "Page not found"])))

(def main-ring-handler
  (wrap-defaults ring-routes site-defaults))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn broadcast
  [id msg]
  (doseq [uid (:any @connected-uids)]
    (chsk-send! uid [id msg])))

(defn make-broadcaster!
  [id reference]
  (add-watch reference id
             (fn [_ _ old x]
               (when-not (= old x)
                 (broadcast id x)))))

(def id-var-pairs
  [[:rpi-wall/weather       weather-state]
   [:rpi-wall/busy-days     busy-days-state]
   [:rpi-wall/todo-today    todo-today-state]
   [:rpi-wall/gmail         new-emails-state]
   [:rpi-wall/todo          todo-state]])

(doseq [[id atom-var] id-var-pairs]
  (make-broadcaster! id atom-var))

(add-watch connected-uids
           :connected-clients
           (fn [_ _ _ _]
             (println "new client connected!")
             (doseq [[id atom-var] id-var-pairs]
               (broadcast id @atom-var))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti event-msg-handler :id)
(defmulti msg-data-handler first)

(defmethod event-msg-handler :chsk/uidport-open [_])
(defmethod msg-data-handler :default [_])

(defmethod event-msg-handler :default
  [{:keys [event]}]
  (msg-data-handler event))

(defmethod msg-data-handler :rpi-wall/keys
  [[_ &  [x]]]
  (key-handler x))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defonce router_ (atom nil))

(defn stop-router!
  []
  (when-let [stop-fn @router_]
    (stop-fn)))

(defn start-router!
  []
  (stop-router!)
  (reset! router_
    (start-server-chsk-router! ch-chsk
                               event-msg-handler)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defonce web-server_ (atom nil))

(defn stop-web-server!
  []
  (when-let [stop-fn @web-server_]
    (stop-fn)))

(defn start-web-server!
  [& [port]]
  (stop-web-server!)
  (let [port (or port 0)
        ring-handler (var main-ring-handler)
        stop-fn (run-server ring-handler {:port port})
        port' (:local-port (meta stop-fn))
        stop-fn' #(stop-fn :timeout 100)]
    (reset! web-server_ stop-fn')
    (format "http://localhost:%s/" port')))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn start-bg-processes!
  []
  (set-interval set-weather!        1000)
  (set-interval set-cal-info!       1000)
  (set-interval read-todo!          500)
  (set-interval set-new-emails!     60))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn -main
  []
  (start-router!)
  (let [uri (start-web-server!)]
    (println uri)
    (spit (:url-file config) uri))
  (start-bg-processes!))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

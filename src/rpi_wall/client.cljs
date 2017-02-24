(ns rpi-wall.client
  (:require [taoensso.sente :refer [make-channel-socket-client!
                                    start-client-chsk-router!]]
            [reagent.core   :refer [render]]
            [rpi-wall.clock :refer [clock]]

            [rpi-wall.fortune.client  :refer [quote-state fortune]]
            [rpi-wall.calendar.client :refer [busy-days-state
                                              month0
                                              month1
                                              month2
                                              todo-today-state
                                              todo-today]]
            [rpi-wall.weather.client  :refer [weather-state weather]]
            [rpi-wall.gmail.client    :refer [new-emails-state gmail]]
            [rpi-wall.todo.client     :refer [todo-home-state
                                              todo-work-state
                                              todo
                                              ;todo-home
                                              ;todo-work
                                              ]]
            [rpi-wall.temp.client     :refer [temp-state temp]]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(let [chsk-server (make-channel-socket-client! "/chsk"
                                               {:type :auto
                                                :packer :edn})]
  (def chsk (:chsk chsk-server))
  (def ch-chsk (:ch-recv chsk-server))
  (def chsk-send! (:send-fn chsk-server))
  (def chsk-state (:state chsk-server)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti event-msg-handler :id)
(defmulti msg-data-handler first)

(defmethod event-msg-handler :default [_])
(defmethod msg-data-handler  :default [_])

(defmethod event-msg-handler :chsk/recv
  [{:keys [?data]}]
  (msg-data-handler ?data))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn make-reciever
  [id variable]
  (defmethod msg-data-handler id
    [[_ & [x]]]
    (reset! variable x)))

(make-reciever :rpi-wall/fortune   quote-state)
(make-reciever :rpi-wall/weather   weather-state)
(make-reciever :rpi-wall/busy-days busy-days-state)
(make-reciever :rpi-wall/gmail     new-emails-state)
(make-reciever :rpi-wall/todo-home todo-home-state)
(make-reciever :rpi-wall/todo-work todo-work-state)
(make-reciever :rpi-wall/temp      temp-state)

(defmethod msg-data-handler :rpi-wall/todo-today
  [[_ & [x]]]
  (reset! todo-today-state x))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defonce router_ (atom nil))

(defn stop-router!
  []
  (when-let [stop-f @router_]
    (stop-f)))

(defn start-router!
  []
  (stop-router!)
  (reset! router_
          (start-client-chsk-router! ch-chsk
                                     event-msg-handler)))

(defn start!
  []
  (start-router!))

(defonce _start-once (start!))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def app
  (let [row1  [:tr [:td [clock]]
                   [:td [temp]]
                   [:td [fortune]]]

        row2  [:tr [:td [month0]]
                   [:td [month1]]
                   [:td [month2]]]

        row3 [:tr [:td [todo]]
                  [:td [todo-today]]
                  [:td [gmail]]]

        row4  [:tr [:td [weather]]]

        t1 [:div.first-row [:table.row          [:tbody row1]]]
        t2 [:div.calendar  [:table.row.calendar [:tbody row2]]]
        t3 [:div.todo-row  [:table.row          [:tbody row3]]]
        t4 [:div.last-row  [:table.row          [:tbody row4]]]]

    [:div [:table#app [:tbody [:tr [:td t1]]
                              [:tr [:td t2]]
                              [:tr [:td t3]]
                              [:tr [:td t4]]]]]))

(js/addEventListener "keypress"
                     #(->> %
                           .-key
                           (conj [:rpi-wall/keys])
                           chsk-send!))

(render app (.getElementById js/document "app"))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

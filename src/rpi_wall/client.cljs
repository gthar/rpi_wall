(ns rpi-wall.client
  (:require [taoensso.sente :refer [make-channel-socket-client!
                                    start-client-chsk-router!]]
            [reagent.core   :refer [render]]

            [rpi-wall.clock :refer [clock]]

            [rpi-wall.calendar.client :refer [busy-days-state
                                              month0
                                              month1
                                              month2]]
            [rpi-wall.weather.client  :refer [weather-state weather]]
            [rpi-wall.mpd.client      :refer [mpd-state cover-art-state mpd]]
            [rpi-wall.gmail.client    :refer [new-emails-state gmail]]))


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

(make-reciever :rpi-wall/weather       weather-state)
(make-reciever :rpi-wall/mpd           mpd-state)
(make-reciever :rpi-wall/mpd-cover-art cover-art-state)
(make-reciever :rpi-wall/busy-days     busy-days-state)
(make-reciever :rpi-wall/gmail         new-emails-state)

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
  (let [row10 [:tr [:td {:row-span 2} [clock]] [:td [mpd]]]
        row12 [:tr [:td [gmail]]]
        row2  [:tr [:td [month0]]
                   [:td [month1]]
                   [:td [month2]]]
        row3  [:tr [:td [weather]]]

        t1 [:div.first.row [:table.row          [:tbody row10 row12]]]
        t2 [:div.calendar  [:table.row.calendar [:tbody row2]]]
        t3 [:div.last-row  [:table.row          [:tbody row3]]]]

    [:div [:table#app [:tbody [:tr [:td t1]]
                              [:tr [:td t2]]
                              [:tr [:td t3]]]]]))

(js/addEventListener "keypress"
                     #(->> %
                           .-key
                           (conj [:rpi-wall/mpd])
                           chsk-send!))

(render app (.getElementById js/document "app"))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

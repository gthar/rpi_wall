(ns rpi-wall.calendar.server
  (:require [rpi-wall.calendar.todo-today :refer [get-day-events]]
            [rpi-wall.calendar.busy-days  :refer [get-busy-days]]
            [rpi-wall.helpers             :refer [fetch-insist config]]))

;(google-apps-clj.credentials/get-auth-map creds ["https://www.googleapis.com/auth/calendar"])

(def calendar-creds
  (:calendar config))

(def busy-days-state
  (atom []))

(def shift "+01")

(defn set-cal-info!
  []
  (let [ms 1000
        callback #(get-busy-days calendar-creds shift)
        ans (fetch-insist callback ms)]
    (reset! busy-days-state ans)))

;(def today-events
  ;(get-day-events calendar-creds shift))

(ns rpi-wall.calendar.server
  (:require [rpi-wall.calendar.busy-days  :refer [get-busy-days]]
            [rpi-wall.calendar.todo-today :refer [get-day-events]]
            [rpi-wall.helpers             :refer [fetch-insist config counter]]))

;(google-apps-clj.credentials/get-auth-map creds ["https://www.googleapis.com/auth/calendar"])

(def calendar-creds
  (:google-calendar config))

(def shift "+01")

(defonce busy-days-state
  (atom []))

(defonce todo-today-state
  (atom {:n 0 :x []}))

(defn fetcher
  [f]
  (let [ms 1000
        callback #(f calendar-creds shift)]
    (fetch-insist callback ms)))

(defn set-cal-info!
  []
  (reset! busy-days-state  (fetcher get-busy-days))
  (reset! todo-today-state (counter (fetcher get-day-events))))

(set-cal-info!)

(ns rpi-wall.calendar.server
  (:require [rpi-wall.calendar.busy-days  :refer [get-busy-days]]
            [rpi-wall.calendar.todo-today :refer [get-day-events]]
            [rpi-wall.helpers             :refer [fetch-insist config]]))

;(google-apps-clj.credentials/get-auth-map creds ["https://www.googleapis.com/auth/calendar"])

(def max-lines (:max-lines config))
(def max-chars (:max-chars config))

(def calendar-creds
  (:google-calendar config))

(def shift "+01")

(defonce busy-days-state
  (atom []))

(defonce todo-today-state
  (atom {:n 0 :x []}))

(defn fetcher
  [f & args]
  (let [ms 1000
        callback #(apply f args)]
    (fetch-insist callback ms)))

(defn set-cal-info!
  []
  (reset! busy-days-state  (fetcher get-busy-days
                                    calendar-creds
                                    shift))
  (reset! todo-today-state (fetcher get-day-events
                                    calendar-creds
                                    shift
                                    max-lines
                                    max-chars)))

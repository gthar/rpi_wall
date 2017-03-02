(ns rpi-wall.calendar.server
  (:require [rpi-wall.calendar.busy-days  :refer [get-busy-days]]
            [rpi-wall.calendar.todo-today :refer [get-day-events]]
            [rpi-wall.helpers             :refer [fetch-insist config counter limiter]]))

;(google-apps-clj.credentials/get-auth-map creds ["https://www.googleapis.com/auth/calendar"])

(def max-lines (:max-lines config))

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

(defn limit
  [x n]
  (if (> (count x) n)
    (concat (take (dec n) x) [{:start nil :end nil :name "..."}])
    x))

(defn set-cal-info!
  []
  (reset! busy-days-state  (fetcher get-busy-days))
  (reset! todo-today-state (->> get-day-events
                                fetcher
                                counter
                                (limiter limit max-lines))))

(set-cal-info!)

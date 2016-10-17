(ns rpi-wall.calendar.busy-days
  (:require [clj-time.core :refer [now
                                   day
                                   month
                                   year
                                   date-time
                                   last-day-of-the-month]]
            [clj-time.format :refer [unparse formatter]]
            [rpi-wall.calendar.helpers :refer [google-time->clj-time
                                               my-list-events]]))

(defn format-for-google
  "YYYY-MM-DDTHH:MM:SS (+ or - hours off GMT like 4:00)"
  [x shift]
  (str (unparse (formatter "YYYY-MM-dd'T'HH:mm:ss") x) shift ":00"))

(defn next-month
  [[current-year current-month]]
  (if (>= current-month 12)
    [(inc current-year) 1]
    [current-year (inc current-month)]))

(defn increase-month
  [date n]
  (nth (iterate next-month date) n))

(defn three-months-range
  []
  (let [current-month (month (now))
        current-year (year (now))
        start (date-time current-year current-month)
        [end-year end-month] (increase-month [current-year current-month] 3)
        end (last-day-of-the-month end-year end-month)]
    [start end]))

(defn get-date
  [x shift]
  (let [google-date (or (get x "dateTime")
                        (get x "date"))
        date-val (google-time->clj-time google-date shift)]
    {:day   (day date-val)
     :month (month date-val)
     :year  (year date-val)}))

(defn get-busy-days
  [creds shift]
  (let [[start end] (three-months-range)
        three-months-events (my-list-events creds
                                            (format-for-google start shift)
                                            (format-for-google end shift))
        date-events (map #(get-date (get % "start") shift)
                         three-months-events)
        sorter #(->> %
                     (sort-by :day)
                     (sort-by :month)
                     (sort-by :year))]
    (sorter date-events)))

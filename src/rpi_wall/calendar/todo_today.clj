(ns rpi-wall.calendar.todo-today
  (:require [clj-time.core             :refer [now minute hour]]
            [clj-time.format           :refer [unparse formatter]]
            [rpi-wall.calendar.helpers :refer [google-time->clj-time
                                               my-list-events]]))

(defn my-list-day-events
  "Given a google-ctx configuration map, a day in the form(YYYY-MM-DD),
   and an offset from the GMT time zone(in the form + or - 04 or 11, etc),
   returns a list of this user's events for the given day"
  [google-ctx day time-zone-offset]
  (let [start-time (str day "T00:00:00" time-zone-offset ":00")
        end-time   (str day "T23:59:59" time-zone-offset ":00")]
    (my-list-events google-ctx start-time end-time)))


(defn get-time
  [date-map shift]
  (when-let [date-time (get date-map "dateTime")]
    (-> date-time
        (google-time->clj-time shift)
        ((fn [x] [(hour x) (minute x)])))))

(defn info-from-event
  [event shift]
  (let [evt (into {} event)]
    {:name  (evt "summary")
     :start (get-time (evt "start") shift)
     :end   (get-time (evt "end")   shift)}))

(defn fetch-today-events
  [creds shift]
  (let [today (unparse (formatter "yyyy-MM-dd") (now))]
    (my-list-day-events creds today shift)))

(defn event-sorter
  [evts]
  (->> evts
       (sort-by :end)
       (sort-by :start)))

(defn parse-events
  [events shift]
  (map #(info-from-event % shift) events))

(defn get-day-events
  [creds shift]
  (-> creds
      (fetch-today-events shift)
      (parse-events shift)
      event-sorter))

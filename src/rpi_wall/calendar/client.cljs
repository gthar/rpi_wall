(ns rpi-wall.calendar.client
  (:require [reagent.core     :refer [render atom]]
            [clojure.string   :refer [join]]
            [cljs-time.core   :refer [day month year date-time day-of-week plus months]]
            [cljs-time.local  :refer [local-now]]
            [cljs-time.coerce :refer [to-long]]))

(def date-state (atom (local-now)))
(def busy-days-state (atom []))

(defn tick
  []
  (reset! date-state (local-now)))

(def month-names
  ["Gener"
   "Febrer"
   "Març"
   "Abril"
   "Maig"
   "Juny"
   "Juliol"
   "Augost"
   "Setembre"
   "Octubre"
   "Novembre"
   "Desembre"])

(def week-days
  ["dl" "dt" "dc" "dj" "dv" "ds" "dg"])

(defn get-first-week-day
  [current-month current-year]
  (day-of-week (date-time current-year current-month 1)))

(defn get-days-in-this-month
  [current-month current-year]
  (let [this-month (date-time current-year current-month 1)
        next-month (date-time current-year (inc current-month) 1)]
    (js/Math.round (/ (- (to-long next-month)
                         (to-long this-month))
                      (* 1000 60 60 24)))))

;(some (partial = {:day 11, :month 10, :year 2016}) busy-days)

(defn col-builder
  [x current-day busy-days]
  (let [day (:day x)
        is-today (= day current-day)
        is-busy (some (partial = x) busy-days)
        tag (cond
              (and is-today is-busy) :td.current-day.busy-day
              is-today               :td.current-day
              is-busy                :td.busy-day
              :else                  :td)]
    [tag day]))

(defn get-empty-days
  [first-week-day days-in-month]
  (- (count week-days)
     (inc (mod (+ (dec first-week-day)
                  (dec days-in-month))
               (count week-days)))))

(defn make-day-vals
  [first-week-day days-in-month]
  (concat (repeat (dec first-week-day) "")
          (range 1 (inc days-in-month))
          (repeat (get-empty-days first-week-day days-in-month) "")))

(defn make-cal-body
  [current-day current-month current-year busy-days]
  (let [days-in-this-month (get-days-in-this-month current-month current-year)
        first-week-day (get-first-week-day current-month current-year)
        day-vals (make-day-vals first-week-day days-in-this-month)
        cols (map (fn [x]
                    (col-builder {:day x
                                  :month current-month
                                  :year current-year}
                                 current-day
                                 busy-days))
                  day-vals)]
    (into [:tbody]
          (map #(into [:tr] %)
               (partition (count week-days) cols)))))

(def days-row
  (into [:tr] (map (partial vector :th.day-names) week-days)))

(defn make-header
  [current-month current-year]
  [:thead [:tr [:th {:col-span 7}
                    (nth month-names (dec current-month))
                    " "
                    current-year]]
          days-row])

(defn make-month
  [d n busy-days]
  (let [date (plus d (months n))

        current-day (if (= n 0)
                      (day date)
                      nil)
        current-month (month date)
        current-year (year date)

        header (make-header current-month current-year)
        body (make-cal-body current-day current-month current-year busy-days)]

    [:div.month [:table#month header body]]))

(defn month0
  []
  (make-month @date-state 0 @busy-days-state))

(defn month1
  []
  (make-month @date-state 1 @busy-days-state))

(defn month2
  []
  (make-month @date-state 2 @busy-days-state))

(.setInterval js/window tick 100000)

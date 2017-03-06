(ns rpi-wall.calendar.client
  (:require [reagent.core                     :refer [atom]]
            [rpi-wall.calendar.build-calendar :refer [make-month]]
            [cljs-time.local                  :refer [local-now]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defonce date-state (atom (local-now)))
(defonce busy-days-state (atom []))

(defn tick
  []
  (reset! date-state (local-now)))

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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defonce todo-today-state (atom []))

(defn zero-padder
  [x n]
  (let [str-val (str x)
        diff (- n (count str-val))]
    (cond
      (zero? diff) str-val
      (neg? diff) (subs str-val 0 n)
      (pos? diff) (str (apply str (repeat diff "0")) str-val))))

(defn time-formatter
  [x]
  (let [{[start-from start-to] :start [end-from end-to] :end} x
        num-vals [start-from start-to end-from end-to]]
    (if (not-any? nil? num-vals)
      (let [[sf st ef et] (map #(zero-padder % 2) num-vals)]
        (str sf ":" st "-" ef ":" et))
      "")))

(defn format-todo-element
  [x]
  [:tr [:td.time (time-formatter x)] [:td.event (:name x)]])

(defn format-todo
  [xs]
  (into [:tbody] (map format-todo-element xs)))

(defn todo-today
  []
  (let [{n :n x :x} @todo-today-state]
    (when-not (zero? n)
      [:div.todo-today
        [:table#todo-today
          [:thead [:tr [:th {:col-span 2} (str "Events today (" n ")")]]]
          (format-todo x)]])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(ns rpi-wall.clock
  (:require [reagent.core     :refer [atom]]
            [cljs-time.local  :refer [local-now]]
            [cljs-time.format :refer [formatter unparse]]))

(def clock-state (atom (local-now)))

(defn tick
  []
  (reset! clock-state (local-now)))

(def format-time
  (partial unparse (formatter "HH  mm")))

(def format-date
  (partial unparse (formatter "dd MM yyyy")))

(defn clock
  []
  [:div.clock
   [:h1 (format-time @clock-state)]
   [:h2 (format-date @clock-state)]])

(.setInterval js/window tick 1000)

(ns rpi-wall.fortune.client
  (:require [reagent.core   :refer [atom]]
            [clojure.string :refer [split replace]]))

(defonce quote-state
  (atom ""))

(defn format-quote
  [x]
  (-> x
      (replace "\t" "\u2003")
      (replace "--" "\u2014")
      (split #"\n")
      (interleave (repeat [:br]))
      butlast
      (->> (into [:p]))))

(defn fortune
  []
   [:div.fortune (format-quote @quote-state)])

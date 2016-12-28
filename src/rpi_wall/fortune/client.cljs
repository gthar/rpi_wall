(ns rpi-wall.fortune.client
  (:require [reagent.core :refer [atom]]))

(defonce quote-state
  (atom ""))

(defn fortune
  []
  [:div.fortune @quote-state])

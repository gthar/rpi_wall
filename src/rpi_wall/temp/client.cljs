(ns rpi-wall.temp.client
  (:require [reagent.core   :refer [atom]]))

(defonce temp-state (atom nil))

(defn temp
  []
  [:div.temp (str @temp-state "ºC")])

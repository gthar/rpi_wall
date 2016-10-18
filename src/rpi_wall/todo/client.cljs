(ns rpi-wall.todo.client
  (:require [reagent.core :refer [render atom]]))

(defonce todo-state (atom []))

(defn todo
  []
  [:div.todo
   [:table#todo
    [:thead [:tr [:th "TODO"]]]
    (into [:tbody]
          (map (fn [x]
                 [:tr [:td x]])
               @todo-state))]])

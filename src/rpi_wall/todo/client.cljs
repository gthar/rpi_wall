(ns rpi-wall.todo.client
  (:require [reagent.core :refer [render atom]]))

(defonce todo-work-state (atom []))
(defonce todo-home-state (atom []))

(defn format-row
  [x]
  [:tr [:td (:text x)]])

(defn into-table
  [label todo]
  [:div.todo
    [:table#todo
     [:thead [:tr [:th label]]]
     (into [:tbody] (map format-row todo))]])

(defn todo-home
  []
  (->> @todo-home-state
       (into-table "todo home")))

(defn todo-work
  []
  (->> @todo-work-state
       (into-table "todo work")))

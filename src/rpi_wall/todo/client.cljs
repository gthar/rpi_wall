(ns rpi-wall.todo.client
  (:require [reagent.core :refer [render atom]]))

(defonce todo-state (atom []))

(defn subset-by
  [field value todo]
  (filter #(->> % field (some #{value})) todo))

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
  (->> @todo-state
       (subset-by :contexts "home")
       (into-table "todo home")))

(defn todo-work
  []
  (->> @todo-state
       (subset-by :contexts "work")
       (into-table "todo work")))

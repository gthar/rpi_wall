(ns rpi-wall.todo.client
  (:require [reagent.core :refer [render atom]]))

(defonce todo-work-state (atom []))
(defonce todo-home-state (atom []))

(defn format-row
  [x]
  [:tr [:td x]])

(defn into-table
  [label todo]
  [:div.todo
    [:table#todo
     [:thead [:tr [:th label]]]
     (into [:tbody] (map format-row todo))]])

(defn todo-home
  []
  (into-table "todo home" @todo-home-state))

(defn todo-work
  []
  (into-table "todo work" @todo-work-state))

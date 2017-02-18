(ns rpi-wall.todo.server
  (:require [rpi-wall.helpers    :refer [config]]
            [rpi-wall.todo.parse :refer [read-todo]]))

(def file (:todo config))

(defonce todo-work-state (atom []))
(defonce todo-home-state (atom []))

(defn subset-by
  [field value todo]
  (filter #(->> % field (some #{value})) todo))

(defn proc-todo
  [todo-info context]
  (->> (subset-by :contexts)
       (map :text)))

(defn read-todo!
  []
  (let [todo-info (remove :finished (read-todo file))
        home-todo (proc-todo todo-info "home")
        work-todo (proc-todo todo-info "work")]
    (reset! todo-work-state work-todo)
    (reset! todo-home-state home-todo)))

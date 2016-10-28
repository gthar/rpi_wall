(ns rpi-wall.todo.server
  (:require [rpi-wall.helpers    :refer [config]]
            [rpi-wall.todo.parse :refer [read-todo]]
            [clojure.string      :refer [split-lines]]))

(def file (:todo config))

(defonce todo-state
  (atom []))

(defn expander
  "Set the length of a list to at least n"
  [n xs]
  (let [tail (-> xs
                 count
                 (->> (- n))
                 (repeat nil))]
    (concat xs tail)))

(defn len-setter
  "Set the lenght of a list to a given number"
  [n xs]
  (->> xs
       (take n)
       (expander n)))

(defn read-todo!
  []
  (let [todo-info (read-todo file)]
    (reset! todo-state todo-info)))

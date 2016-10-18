(ns rpi-wall.todo.server
  (:require [rpi-wall.helpers         :refer [config]]
            [clojure.string           :refer [split]]))

(let [todo-config (:todo config)]
  (def file     (:file     todo-config))
  (def n-events (:n-events todo-config)))

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

(defn read-lines
  "Read the contents of a file and split by lines"
  [file]
  (-> file
      slurp
      (split #"\n")))

(defn read-todo!
  []
  (let [todo-info (->> file
                       read-lines
                       (into []))]
    (reset! todo-state todo-info)))

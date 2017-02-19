(ns rpi-wall.todo.server
  (:require [rpi-wall.helpers    :refer [config limit-chars]]
            [rpi-wall.todo.parse :refer [read-todo]]))

(def file (:todo config))
(def max-lines (:max-lines config))
(def max-chars (:max-chars config))

(defonce todo-work-state (atom []))
(defonce todo-home-state (atom []))

(defn subset-by
  [field value todo]
  (filter #(->> % field (some #{value})) todo))

(defn reporter
  [x]
  (println x)
  x)

(defn limiter
  [n xs]
  (if (> (count xs) n)
    (concat (take (dec n) xs) ["..."])
    xs))

(defn proc-todo
  [todo-info context n m]
  (->> todo-info
       (subset-by :contexts context)
       (map :text)
       (map (partial limit-chars m))
       (limiter n)))

(defn read-todo!
  []
  (let [todo-info (remove :finished (read-todo file))
        home-todo (proc-todo todo-info "home" max-lines max-chars)
        work-todo (proc-todo todo-info "work" max-lines max-chars)]
    (reset! todo-work-state work-todo)
    (reset! todo-home-state home-todo)))

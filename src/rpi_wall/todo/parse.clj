(ns rpi-wall.todo.parse
  (:require [clojure.string :as s :refer [split split-lines trim]]))

(defn get-priority
  [x]
  (let [re #"^\(([A-Z])\) "]
    (if-let [char-val (->> x
                           (re-find re)
                           second
                           first)]
      (-> char-val
          int
          (- (int \A)))
      nil)))

(defn strip-priority
  [x]
  (let [re #"^\([A-Z]\) "]
    (s/replace x re "")))

(defn get-date
  "Format: YYYY-MM-DD"
  [x]
  (let [re #"^\d\d\d\d-\d\d-\d\d "]
    (if-let [match (re-find re x)]
      (let [[y m d] (-> match
                        trim
                        (split #"-")
                        (->> (map #(Integer. %))))]
        {:year  y
         :month m
         :day   d})
      nil)))

(defn strip-date
  [x]
  (let [re #"^\d\d\d\d-\d\d-\d\d "]
    (s/replace x re "")))

(defn get-projects
  [x]
  (->> x
       (re-seq #" \+([^\s]+)")
       (map second)
       (into [])))

(defn strip-projects
  [x]
  (s/replace x #" \+[^\s]+" ""))

(defn get-contexts
  [x]
  (->> x
       (re-seq #" @([^\s]+)")
       (map second)
       (into [])))

(defn strip-contexts
  [x]
  (s/replace x #" @[^\s]+" ""))

(defn parse-entry
  [x0]
  (let [x1       (strip-priority x0)
        x2       (strip-date     x1)
        x3       (strip-contexts x2)
        x4       (strip-projects x3)

        priority (get-priority x0)
        date     (get-date     x1)
        contexts (get-contexts x2)
        projects (get-projects x3)]

    {:priority priority
     :date     date
     :contexts contexts
     :projects projects
     :text     x4}))

(defn read-todo
  [file]
  (->> file
       slurp
       split-lines
       (map parse-entry)
       (into [])))

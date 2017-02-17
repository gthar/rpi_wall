(ns rpi-wall.todo.parse
  (:require [clojure.string :as s :refer [split split-lines trim]]))

(def re {:priority #"^\(([A-Z])\) "
         :date     #"^\d\d\d\d-\d\d-\d\d "
         :finished #"^x "
         :projects #" \+([^\s]+)"
         :contexts #" @([^\s]+)"})

(defn get-priority
  [x]
  (if-let [char-val (->> x
                         (re-find (:priority re))
                         second
                         first)]
    (-> char-val
        int
        (- (int \A)))
    nil))

(defn get-date
  "Format: YYYY-MM-DD"
  [x]
  (if-let [match (re-find (:date re) x)]
    (let [[y m d] (-> match
                      trim
                      (split #"-")
                      (->> (map #(Integer. %))))]
      {:year  y
       :month m
       :day   d})
    nil))

(defn get-finished
  [x]
  (if (re-find (:finished re) x)
    (if-let [date (get-date (s/replace x (:finished re) ""))]
      date
      true)
    false))

(defn get-projects
  [x]
  (->> x
       (re-seq (:projects re))
       (map second)
       (into [])))

(defn get-contexts
  [x]
  (->> x
       (re-seq (:contexts re))
       (map second)
       (into [])))

(defn stripper
  [k]
  (fn [x]
    (s/replace x (k re) "")))

(def strip-priority (stripper :priority))
(def strip-date     (stripper :date))
(def strip-projects (stripper :projects))
(def strip-contexts (stripper :contexts))
(def strip-finished (comp strip-date (stripper :finished)))

(defn parse-entry
  [x0]
  (let [x1 (strip-finished x0)
        x2 (strip-priority x1)
        x3 (strip-date     x2)
        x4 (strip-contexts x3)
        x5 (strip-projects x4)

        finished (get-finished x0)
        priority (get-priority x1)
        date     (get-date     x2)
        contexts (get-contexts x3)
        projects (get-projects x4)]

    {:finished finished
     :priority priority
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

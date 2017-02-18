(ns rpi-wall.temp.server
  (:require [clojure.string   :as s :refer [split-lines trim]]
            [clojure.java.io  :as io]
            [rpi-wall.helpers :refer [config]]))

(def base-dir (:temp-dir config))

(defonce temp-state (atom nil))

(defn read-temp
  [infile]
  (let [lines (map trim (split-lines (slurp infile)))
        l1 (first lines)
        x1 (apply str (take-last 3 l1))
        check (= x1 "YES")]
    (if (not check)
      nil
      (let [l2 (second lines)
            match (first (re-seq #"t=\d+" l2))
            value match
            value (Double. (s/replace match #"t=" "" ))]
        (s/replace  (format "%.2f" (/ value 1000)) #"," ".")))))

(defn get-infile
  [base-dir]
  (let [fs (map #(.getName %) (.listFiles (io/file base-dir)))
        device-folder (first (filter #(.startsWith % "28") fs))]
    (str base-dir "/" device-folder "/w1_slave")))

(defn read-temp!
  []
  (let [infile (get-infile base-dir)
        value (loop [f infile]
                (if-let [x (read-temp f)]
                  x
                  (do (Thread/sleep 0.2)
                      (recur f))))]
    (reset! temp-state value)))

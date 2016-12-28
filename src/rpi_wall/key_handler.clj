(ns rpi-wall.key-handler
  (:require [clojure.java.shell :refer [sh]]
            [clojure.string :refer [split]]
            [rpi-wall.helpers   :refer [config]]))

(defn exec-str
  [x]
  (apply sh (split x #"\s+")))

(defn key-handler
  [x]
  (case x
    "P" (println "this is P!")
    "ArrowUp"   (exec-str (:screen-on-cmd  config))
    "ArrowDown" (exec-str (:screen-off-cmd config))
    (println (str "no current binding for " x))))

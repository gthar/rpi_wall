(ns rpi-wall.fortune.server
  (:require [clojure.java.shell :refer [sh]]))

(defn get-quote
  []
  (let [x (:out (sh "fortune" "-s"))]
    (println x)
    x))

(defonce quote-state
  (atom []))

(defn set-quote!
  []
  (reset! quote-state (get-quote)))

(set-quote!)

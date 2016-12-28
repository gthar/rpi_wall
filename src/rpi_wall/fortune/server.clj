(ns rpi-wall.fortune.server
  (:require [clojure.java.shell :refer [sh]]))

(defn get-quote
  []
  (:out (sh "fortune" "-s")))

(defonce quote-state
  (atom []))

(defn set-quote!
  []
  (reset! quote-state (get-quote)))

(set-quote!)

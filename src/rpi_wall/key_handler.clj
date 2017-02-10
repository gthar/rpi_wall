(ns rpi-wall.key-handler
  (:require [clojure.java.shell :refer [sh]]
            [clojure.string     :refer [split]]
            [rpi-wall.helpers   :refer [config]]))

(def actions
  (:key-handlers config))

(defn exec-str
  [x]
  (future (apply sh (split x #"\s+"))))

(defn key-handler
  [x]
  (if-let [cmd (-> x keyword actions)]
    (exec-str cmd)
    (println (str "no current binding for " x))))

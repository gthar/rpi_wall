(ns rpi-wall.gmail.client
  (:require [reagent.core :refer [render atom]]))

(def new-emails-state (atom nil))

(defn gmail
  []
  (let [x @new-emails-state
        txt (cond
              (nil? x) "No s'ha pogut connectar amb gmail"
              (= x 0)  "No tens emails nous"
              (= x 1)  (str "Tens " x " email nou")
              :else    (str "Tens " x " emails nous"))]
    [:div.gmail txt]))

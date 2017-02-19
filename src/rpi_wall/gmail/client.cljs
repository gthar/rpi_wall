(ns rpi-wall.gmail.client
  (:require [reagent.core :refer [render atom]]))

(def new-emails-state (atom nil))

(defn handle-nil
  [x]
  (if x x ""))

(defn format-email
  [[from subject]]
  [:tr [:td.from    (handle-nil from)]
       [:td.subject (handle-nil subject)]])

(defn format-email-ls
  [x]
  (cond
    (nil? x)          "No s'ha pogut connectar amb gmail"
    (zero? (count x)) "No tens emails nous"
    :else             (into [:tbody] (map format-email x))))

(defn gmail
  []
  [:div.gmail
     [:table#gmail [:thead [:tr [:th {:col-span 2} "gmail"]]]
                   (format-email-ls @new-emails-state)]])

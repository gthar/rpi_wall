(ns rpi-wall.gmail.client
  (:require [reagent.core :refer [render atom]]))

(def new-emails-state (atom nil))

(defn handle-nil
  [x]
  (if x x ""))

(defn format-email
  [[from subject]]
  [:tr [:td.subject (handle-nil from)]])

(defn format-email-ls
  [x]
  (if (nil? x)
    [:tbody [:tr [:td "No s'ha pogut connectar amb gmail"]]]
    (into [:tbody] (map format-email x))))

(defn gmail
  []
  (let [{n :n x :x} @new-emails-state]
    (when-not (zero? n)
      [:div.gmail
         [:table#gmail
           [:thead [:tr [:th (str "gmail (" n ")")]]]
           (format-email-ls x)]])))

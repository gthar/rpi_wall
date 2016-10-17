(ns rpi-wall.mpd.client
  (:require [reagent.core            :refer [atom]]
            [rpi-wall.common-helpers :refer [base64->img]]))

(def mpd-state
  (atom nil))

(def cover-art-state
  (atom {:base64-src nil
         :img-format nil}))

(defn format-song
  [{:keys [title artist album elapsed length]} img]
  (let [img-src (base64->img img)
        img-cell [:td.album-art {:row-span 4} [:img {:src img-src}]]]
    [:table#mpd
     [:tbody
      [:tr [:td.param "song"]    [:td.value title] img-cell]
      [:tr [:td.param "elapsed"] [:td.value (str elapsed "/" length)]]
      [:tr [:td.param "artist"]  [:td.value artist]]
      [:tr [:td.param "album"]   [:td.value album]]]]))

(defn mpd
  []
  (let [s (if-let [x @mpd-state]
            (format-song x @cover-art-state)
            nil)]
    [:div.mpd s]))

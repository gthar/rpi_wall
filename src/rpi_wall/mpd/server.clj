(ns rpi-wall.mpd.server
  (:require [rpi-wall.mpd.album-cover :refer [set-cover-data! cover-base64]]
            [rpi-wall.mpd.controller  :refer [controller!]]
            [clj-mpd.core             :refer [with-mpd-connection]]
            [clj-mpd.player           :refer [status get-elapsed-time]]
            [clj-mpd.utils            :refer [format-seconds]]))

(def mpd-state
  (atom nil))

(defn set-mpd!
  []
  (try
    (with-mpd-connection :default
      (let [{:keys [title artist album length]} (status)
            elapsed-time (get-elapsed-time)]
        (reset! mpd-state
                {:artist  artist
                 :album   album
                 :title   title
                 :elapsed (format-seconds elapsed-time)
                 :length  (format-seconds length)})
        (set-cover-data! album artist)))
    (catch Exception _ (reset! mpd-state nil))))

(def control-mpd! controller!)
(def cover-state cover-base64)

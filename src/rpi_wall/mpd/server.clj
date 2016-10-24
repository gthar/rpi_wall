(ns rpi-wall.mpd.server
  (:require [rpi-wall.mpd.album-cover    :refer [set-cover-data! cover-base64]]
            [rpi-wall.mpd.controller     :refer [controller!]]
            [rpi-wall.mpd.get-connection :refer [set-connection! mpd-connection]]
            [rpi-wall.helpers            :refer [config]]
            [clj-mpd.core                :refer [connect! disconnect!]]
            [clj-mpd.player              :refer [status get-elapsed-time]]
            [clj-mpd.utils               :refer [format-seconds]]))

(def mpd-state
  (atom nil))

(defn set-mpd!
  []
  (if-let [conn @mpd-connection]
    (try
      (connect! conn)
      (let [{:keys [title artist album length]} (status)
            elapsed-time (get-elapsed-time)]
        (reset! mpd-state
                {:artist  artist
                 :album   album
                 :title   title
                 :elapsed (format-seconds elapsed-time)
                 :length  (format-seconds length)})
        (set-cover-data! album artist)
        (disconnect!))
      (catch Exception _))
    (reset! mpd-state nil)))

(def control-mpd! controller!)
(def cover-state cover-base64)
(def set-mpd-connection! set-connection!)

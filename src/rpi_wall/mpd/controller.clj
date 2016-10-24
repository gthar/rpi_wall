(ns rpi-wall.mpd.controller
  (:require [clj-mpd.core                :refer [connect! disconnect!]]
            [clj-mpd.player              :refer [get-state
                                                 pause!
                                                 play!
                                                 play-next!
                                                 play-prev!]]
            [rpi-wall.mpd.get-connection :refer [mpd-connection]]))

(defn pauser!
  []
  (case (get-state)
    "STATUS_PLAYING" (pause!)
    (play!)))

(defn controller!
  [x]
  (when-let [conn @mpd-connection]
    (connect! conn)
    (case x
      " " (pauser!)
      "p" (pauser!)
      ">" (play-next!)
      "<" (play-prev!)
      (println (str "no current binding for " x)))
    (disconnect!)))

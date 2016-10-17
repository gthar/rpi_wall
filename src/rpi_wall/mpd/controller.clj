(ns rpi-wall.mpd.controller
  (:require [clj-mpd.core   :refer [with-mpd-connection]]
            [clj-mpd.player :refer [get-state
                                    pause!
                                    play!
                                    play-next!
                                    play-prev!]]))

(defn pauser!
  []
  (case (get-state)
    "STATUS_PLAYING" (pause!)
    (play!)))

(defn controller!
  [x]
  (with-mpd-connection :default
    (case x
      " " (pauser!)
      "p" (pauser!)
      ">" (play-next!)
      "<" (play-prev!)
      (println (str "no current binding for " x)))))

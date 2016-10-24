(ns rpi-wall.mpd.get-connection
  (:require [rpi-wall.helpers :refer [config]]
            [clj-mpd.core     :refer [mpd connect! disconnect!]]))

(def connections
  (get-in config [:mpd :connections]))

(def mpd-connection
  (atom nil))

(defn check-connection
  [{:keys [hostname port]}]
  (try
    (let [conn (mpd :hostname hostname
                    :port port)]
      (connect! conn)
      (disconnect!)
      conn)
  (catch Exception _ nil)))

(defn get-connection
  [xs]
  (->> xs
       (map check-connection)
       (remove nil?)
       first))

(def mpd-connection
  (atom nil))

(defn set-connection!
  []
  (reset! mpd-connection (get-connection connections)))

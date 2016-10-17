(ns rpi-wall.weather.server
  (:require [clojure.string    :refer [split]]
            [clojure.data.json :refer [read-str]]
            [rpi-wall.helpers  :refer [build-api-url fetch-insist config]]))

(def weather-conf
  (:weather config))

(def weather-state
  (atom (replicate (:cnt weather-conf)
                   {:time nil
                    :temp nil
                    :humidity nil
                    :descr nil
                    :icon nil})))

(defn format-time
  [x]
  (let [time-str (second (split x #" "))
        [h m s] (split time-str #":")
        h-int (Integer/parseInt h)
        [h-num period] (if (> h-int 12)
                         [(- h-int 12) "pm"]
                         [h-int "am"])]
    (format "%d:%s %s" h-num m period)))

(defn format-weather
  [x]
  {:time     (format-time (get x "dt_txt"))
   :temp     (str (get-in x ["main" "temp"]) "ºC")
   :humidity (str (get-in x ["main" "humidity"]) "%")
   :id       (get-in x ["weather" 0 "id"])
   :descr    (get-in x ["weather" 0 "description"])
   :icon     (get-in x ["weather" 0 "icon"])})

(def base-url
  "http://api.openweathermap.org/data/2.5/forecast")

(defn fetch-weather
  [parameters]
  (->> parameters
       (build-api-url base-url)
       slurp
       read-str
       (#(get % "list"))
       (map format-weather)))

(defn set-weather!
  []
  (let [ms 1000
        callback #(fetch-weather weather-conf)
        ans (fetch-insist callback ms)]
    (reset! weather-state ans)))

(ns rpi-wall.weather.client
  (:require [reagent.core               :refer [atom]]
            [rpi-wall.weather.plot-temp :refer [temp-lineplot]]))

(def weather-state (atom nil))

(defn build-table
  [xs]
  (let [row-funs [:time
                  #(vector :i.wi {:class (str "wi-owm-" (:id %))}) 
                  ;:descr
                  #(str (:temp %) " (" (:humidity %) ")")]
        as-td (partial vector :td)
        table-rows (map (partial comp as-td) row-funs)
        build-row #(into [:tr] (map % xs))]
    [:table#weather (into [:tbody] (map build-row table-rows))]))

(defn weather
  []
  (let [t (if-let [x @weather-state]
            [:table [:tbody [:tr [:td (build-table @weather-state) ]]
                            [:tr [:td (temp-lineplot @weather-state)]]]]
            nil)]
    [:div.weather t]))

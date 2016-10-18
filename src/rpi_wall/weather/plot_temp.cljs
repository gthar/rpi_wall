(ns rpi-wall.weather.plot-temp
  (:require [clojure.string :as s]))

(def margin 5)
(def height 25)
(def width 800)

(defn clean-nums
  [x]
  (s/replace x "ºC" ""))

(defn val-scaler
  [xs]
  (let [min-y (apply min xs)
        zeroed (map #(- % min-y) xs)
        max-val (apply max zeroed)
        scaled (map #(/ % max-val) zeroed)]
    scaled))

(defn make-svg-pts
  [data]
  (let [temp-vals (map :temp data)]
    (if (not-any? nil? temp-vals)
      (let [temps (map (comp js/parseFloat clean-nums) temp-vals)
            xs (map #(+ (* width %) margin) (val-scaler (range (count temps))))
            ys (map #(+ (* height (- 1 %)) 10) (val-scaler temps))]
        (s/join " " (map (fn [x y] (str x, "," y)) xs ys)))
      "")))

(defn temp-lineplot
  [data]
  [:svg {:viewBox (str margin
                       " "
                       margin
                       " "
                       (+ width (* margin 2))
                       " "
                       (+ height (* margin 2)))}
    [:polyline {:fill "none"
                :stroke "#000000"
                :stroke-width 1
                :points (make-svg-pts data)}]])

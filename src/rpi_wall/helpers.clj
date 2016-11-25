(ns rpi-wall.helpers
  (:require [rpi-wall.common-helpers]
            [clj-yaml.core :as yaml]
            [clojure.data.codec.base64 :refer [encode]]
            [clojure.string            :refer [split join]]
            [clojure.java.io           :refer [copy input-stream]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn set-interval
  [callback interval]
  (future (while true
            (do (callback)
                (Thread/sleep (* 1000 interval))))))

(defn fetch-insist
  [callback ms]
  (if-let [res (try
                 (callback)
                 (catch Exception _))]
    res
    (do (Thread/sleep ms)
        (recur callback ms))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def config-file
  (str (System/getProperty "user.home") "/rpi_wall/conf.yaml"))

(defn read-config
  []
  (yaml/parse-string (slurp config-file)))

(def config (read-config))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-fname
  [x]
  (-> x
      (split #"/")
      last))

(defn get-extension
  [x]
  (-> x
      get-fname
      (split #"\.")
      last))

(defn get-basename
  [x]
  (-> x
      get-fname
      (split #"\.")
      first))

(defn slurp-bytes
  [x]
  (with-open [out (java.io.ByteArrayOutputStream.)]
    (copy (input-stream x) out)
    (String. (encode (.toByteArray out)))))

(defn img->base64
  [x]
  {:base64-src (slurp-bytes x)
   :img-format (get-extension x)})

(def base64->img rpi-wall.common-helpers/base64->img)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn build-api-url
  [base-url parameters]
  (let [str-builder (fn [[k v]] (format "%s=%s" (name k) v))]
    (->> parameters
         (map str-builder)
         (join "&")
         (str base-url "?"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

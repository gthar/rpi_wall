(ns rpi-wall.mpd.album-cover
  (:require [rpi-wall.style   :refer [album-cover-size]]
            [rpi-wall.helpers :refer [build-api-url
                                      get-extension
                                      get-basename
                                      fetch-insist
                                      config
                                      img->base64]]
            [clojure.string :as s]
            [clojure.java.shell :refer [sh]]
            [clojure.xml        :refer [parse]]
            [clojure.java.io    :refer [input-stream output-stream copy file]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(let [mpd-config (:mpd config)]
  (def cover-dir (:album-covers  mpd-config))
  (def api-key   (:lastfm-apikey mpd-config)))

(def base-url
  "http://ws.audioscrobbler.com/2.0/")

(def no-cover
  (str cover-dir "/no-cover.png"))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defonce cover-path
  (atom nil))

(defonce cover-base64
  (atom {:base64-src nil
         :img-format nil}))

(add-watch cover-path
           :cover-path
           (fn [_ _ old-state new-state]
             (when-not (= old-state new-state)
               (reset! cover-base64
                       (img->base64 new-state)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def non-covers
  #{(get-basename cover-dir) (get-basename no-cover)})

(defn get-available-covers
  []
  (->> cover-dir
       file
       file-seq
       (map str)
       (filter #(not (contains? non-covers (get-basename %))))))

(defonce available-covers
  (atom (get-available-covers)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn format-search-str
  [album artist]
  (s/replace (str album "_" artist "_" album-cover-size) " " ""))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn download!
  [uri file]
  (with-open [in  (input-stream  uri)
              out (output-stream file)]
    (copy in out)))

(defn resize!
  [file size]
  (sh "convert" file "-resize" (str size) file))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti filter-by (fn [x & _] (vector? x)))
(defmethod filter-by false
  [search-key x col]
  (filter-by [search-key] x col))
(defmethod filter-by true
  [search-keys x col]
  (filter #(-> %
               (get-in search-keys)
               (= x))
          col))

(defn get-img-url
  [content]
  (->> content
       :content
       (filter-by :tag :album)
       first
       :content
       (filter-by :tag :image)
       (filter-by [:attrs :size] "mega")
       first
       :content
       first))

(defn fetch-album-cover!
  [album artist api-key]
  (try
    (let [parameters {:method "album.getinfo"
                      :api_key api-key
                      :album   album
                      :artist  artist}
          img-url (->> parameters
                       (build-api-url base-url)
                       parse
                       get-img-url)
          extension (get-extension img-url)
          img-file (format "%s/%s.%s"
                           cover-dir
                           (format-search-str album artist)
                           extension)]
      (download! img-url img-file)
      (resize! img-file album-cover-size)
      (reset! available-covers (get-available-covers))
      img-file)
    (catch Exception _ nil)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-downloaded-cover
  [album artist]
  (let [search-str (format-search-str album artist)]
    (->> @available-covers
         (filter #(= (get-basename %) search-str))
         first)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-cover-path!
  [album artist]
  (if-let [downloaded-path (get-downloaded-cover album artist)]
    downloaded-path
    (if-let [fetched-path (fetch-album-cover! album artist api-key)]
      fetched-path
      no-cover)))

(defn set-cover-data!
  [album artist]
  (reset! cover-path (get-cover-path! album artist)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

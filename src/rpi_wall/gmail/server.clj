(ns rpi-wall.gmail.server
  (:require [clojure-mail.core  :refer [unread-messages]]
            [clojure-mail.gmail :refer [store]]
            [rpi-wall.helpers   :refer [config]]))

(def creds (:gmail config))
(def folder-name "inbox")

(def new-emails-state
  (atom nil))

(defn count-new-messages
  [creds]
  (-> creds
      (map [:email :passwd])
      (#(apply store %))
      (unread-messages folder-name)
      count))

(defn set-new-emails!
  []
  (reset! new-emails-state
          (count-new-messages creds)))

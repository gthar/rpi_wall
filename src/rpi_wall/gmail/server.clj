(ns rpi-wall.gmail.server
  (:require [clojure-mail.core    :refer [unread-messages]]
            [clojure-mail.gmail   :refer [store]]
            [clojure-mail.message :refer [read-message]]
            [rpi-wall.helpers     :refer [config limit-chars]]))

(def creds     (:gmail     config))
(def max-lines (:max-lines config))
(def max-chars (:max-chars config))
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

(defn read-email
  [n mail]
  (let [msg (read-message mail)]
    [(->> msg
          :from
          first
          :name
          (limit-chars n))
     (->> msg
          :subject
          (limit-chars n)) ]))

(defn limiter
  [n x]
  (if (> (count x) n)
    (concat (take (dec n) x) [[nil] ["..."]])
    x))

(defn get-mails
  [creds n m]
  (->> (unread-messages (store (:email creds)
                               (:passwd creds))
                        folder-name)
       (map (partial read-email m))
       (limiter n)
       (into [])))


;(defn set-new-emails!
  ;[]
  ;(reset! new-emails-state
          ;(count-new-messages creds)))

(defn set-new-emails!
  []
  (reset! new-emails-state (get-mails creds max-lines max-chars)))

(ns rpi-wall.calendar.helpers
  (:require [clj-time.coerce :refer [from-long]]
            [google-apps-clj.credentials :as cred])
  (:import (com.google.api.client.util DateTime)
           (com.google.api.services.calendar.model Events)
           (com.google.api.services.calendar Calendar Calendar$Builder)))

(defn google-time->clj-time
  [t shift]
  (let [shift (* 60 1000 (.getTimeZoneShift t))
        since-epoch (.getValue t)]
    (from-long (+ since-epoch shift))))

(defn my-build-calendar-service
  "Given a google-ctx configuration map, builds a Calendar service using
  credentials coming from the OAuth2.0 credential setup inside googlectx"
  [google-ctx]
  (let [calendar-builder (->> google-ctx
                              cred/build-credential
                              (Calendar$Builder. cred/http-transport
                                                 cred/json-factory))]
    (.setApplicationName calendar-builder "my-app")
    (cast Calendar (doto (.build calendar-builder)
                     assert))))

(defn my-list-events
  "Given a google-ctx configuration map, a start time and an end time
   (in YYYY-MM-DDTHH:MM:SS(+ or - hours off GMT like 4:00)),
   returns a list of this user's events for the given time period"
  [google-ctx start-time end-time]
  (let [calendar-service (my-build-calendar-service google-ctx)
        events (doto (.events ^Calendar calendar-service)
                 assert)
        start-time (DateTime. ^String start-time)
        end-time (DateTime. ^String end-time)
        list-events (doto (.list events "primary")
                      assert
                      (.setTimeMin start-time)
                      (.setTimeMax end-time)
                      (.setOrderBy "startTime")
                      (.setSingleEvents true))
        days-events (doto (.execute list-events)
                      assert)]
    (doto (.getItems ^Events days-events)
      assert)))
 

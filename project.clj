(defproject rpi-wall "0.1.0-SNAPSHOT"
  :description "Browser-based kiosk for a raspberry pi wall display"
  :license {:name "BSD 2-Clause License"
            :url "https://opensource.org/licenses/BSD-2-Clause"}

  :global-vars {*assert* true}

  :dependencies [[org.clojure/clojure       "1.8.0"]
                 [org.clojure/clojurescript "1.9.36"]
                 [org.clojure/core.async    "0.2.374"]
                 [org.clojure/data.codec    "0.1.0"]
                 [org.clojure/data.xml      "0.0.8"]
                 [org.clojure/data.json     "0.2.6"]
                 [clj-yaml                  "0.4.0"]

                 [http-kit           "2.2.0-alpha2"]
                 [ring               "1.5.0"]
                 [ring/ring-defaults "0.2.1"]
                 [compojure          "1.5.0"]
                 [com.taoensso/sente  "1.11.0-RC1"]

                 [reagent "0.6.0-alpha2"]
                 [hiccup  "1.0.5"]
                 [garden  "1.3.2"]

                 [com.andrewmcveigh/cljs-time "0.4.0"]
                 [google-apps-clj             "0.5.2"]
                 [io.forward/clojure-mail     "1.0.5"]
                 [clj-time                    "0.12.0"]

 								 [clj-http "2.3.0"]
                 [org.clojure/tools.logging "0.3.1"]]

  :plugins [[lein-cljsbuild      "1.1.3"]]

  :cljsbuild {:builds [{:id           :cljs-client
                        :source-paths ["src"]
                        :compiler     {:output-to "resources/public/main.js"
                                       :optimizations :whitespace #_:advanced}}]}

  :hooks [leiningen.cljsbuild]

  :main rpi-wall.server
  :aot [rpi-wall.server]

  :repl-options {:timeout 1200000}

  :aliases {"start-repl" ["do" "clean," "cljsbuild" "once," "repl" ":headless"]
            "start"      ["do" "clean," "cljsbuild" "once," "run"]})

(ns rpi-wall.style
  (:require [garden.core             :refer [css]]
            [garden.color            :refer [rgb rgba]]
            [garden.stylesheet       :refer [at-font-face]]
            [rpi-wall.helpers        :refer [config img->base64 base64->img]]))

(def bg-str
  (let [data-str (-> config
                     :background-image
                     img->base64
                     base64->img)]
    (str "url(" data-str ")")))

(def album-cover-size 120)

(def style
  (css (at-font-face {:font-family "Inconsolata"
                      :src "url(/font/Inconsolata.otf)"})
       (at-font-face {:font-family "OpenSans"
                      :src "url(/font/OpenSans/OpenSans-Regular.ttf)"})
       (at-font-face {:font-family "OpenSansLight"
                      :src "url(/font/OpenSans/OpenSans-Light.ttf)"})
       (at-font-face {:font-family "OpenSansBold"
                      :src "url(/font/OpenSans/OpenSans-Bold.ttf)"})

       [:body {:background-image bg-str
               :background-size  "cover"
               :text-align       "center"
               :font-family      "OpenSans"}]

       [:div {:display "inline-block"
              :padding "10px"}]

       [:div.clock {:background-color (rgba 50 50 50 0.5)}
          [:h1 {:color (rgb 240 240 240)
                :font-size "600%"
                :margin "0"
                :letter-spacing "15px"
                :font-family "OpenSansLight"}]
          [:h2 {:color (rgb 190 190 190)
                :font-size "300%"
                :margin "0"
                :letter-spacing "5px"}]]

       [:div.gmail      {:background-color (rgba 50 50 50 0.5)
                         :padding-top "10px"}]
       [:div.weather    {:background-color (rgba 50 50 50 0.5)}]
       [:div.todo-today {:background-color (rgba 50 50 50 0.5)}]
       [:div.todo       {:background-color (rgba 50 50 50 0.5)}]
       [:div.temp       {:background-color (rgba 50 50 50 0.5)}]
       [:div.fortune    {:background-color (rgba 50 50 50 0.5)
                         :text-align "left"}]

       [:table {:border          "none"
                :border-collapse "collapse"
                :text-align      "center"}]

       [:table#todo {:padding-top    "10px"
                     :padding-bottom "10px"
                     :padding-left   "10px"
                     :padding-right  "10px"
                     :font-size      "95%"}
         [:th {:border-bottom "1px solid rgb(150, 150, 150)"
               :font-weight   "normal"
               :font-family   "OpenSansLight"}]
         [:td {:text-align "left"}]]

       [:table#todo-today {:padding-top    "10px"
                           :padding-bottom "10px"
                           :padding-left   "10px"
                           :padding-right  "10px"
                           :font-size      "95%"}

        [:th {:border-bottom "1px solid rgb(150, 150, 150)"
              :font-weight "normal"
              :font-family "OpenSansLight"}]

        [:td.time {:font-family   "OpenSansLight"
                   :text-align    "right"
                   :padding-right "10px"}]
        [:td.event {:text-align   "left"
                    :padding-left "10px"}]]

       [:table#gmail {:padding-top    "10px"
                      :padding-bottom "10px"
                      :padding-left   "10px"
                      :padding-right  "10px"
                      :font-size      "95%"}

        [:th {:border-bottom "1px solid rgb(150, 150, 150)"
              :font-weight "normal"
              :font-family "OpenSansLight"}]

        [:td.from {:font-family   "OpenSansLight"
                   :text-align    "right"
                   :padding-right "10px"}]
        [:td.subject {:text-align   "left"
                      :padding-left "10px"}]]

       [:table#weather {:table-layout "fixed"}
          [:i.wi {:color (rgb 220 220 220)
                  :font-size "300%"
                  :padding-top "5px"
                  :padding-bottom "5px"}]
          [:td {:border-left  "1px solid rgb(150, 150, 150)"
                :border-right "1px solid rgb(150, 150, 150)"
                :padding-left  "10px"
                :padding-right "10px"
                :width "400px"
                :font-size     "96%"}
            [:&:first-child {:border-left "none"}]
            [:&:last-child  {:border-right "none"}]]]

       [:table.row {:width "1080px"}
          [:td {:text-align     "center"
                :padding-left   "10px"
                :padding-right  "10px"}]]

       [:table.calendar
          [:td {:vertical-align "top"}]]

       [:div.month {:background-color (rgba 50 50 50 0.5)}]

       [:table#month {:padding-top    "10px"
                      :padding-bottom "10px"
                      :padding-left   "10px"
                      :padding-right  "10px"}
          [:th {:font-weight "normal"}]
          [:th.day-names {:font-family "OpenSansLight"
                          :border-bottom "1px solid rgb(150, 150, 150)"}]
          [:td.current-day {:background-color (rgba 10 10 10 0.5)
                            :color (rgb 230 230 230)}]
          [:td.busy-day {:font-family   "OpenSansBold"
                         :border-left   "1px solid rgb(150, 150, 150)"
                         :border-right  "1px solid rgb(150, 150, 150)"
                         :border-top    "1px solid rgb(150, 150, 150)"
                         :border-bottom "1px solid rgb(150, 150, 150)"}]]))

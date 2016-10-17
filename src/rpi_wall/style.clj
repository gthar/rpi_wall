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
                :letter-spacing "20px"
                :font-family "OpenSansLight"}]
          [:h2 {:color (rgb 190 190 190)
                :font-size "300%"
                :margin "0"
                :letter-spacing "10px"}]]

       [:div.mpd {:background-color (rgba 50 50 50 0.5)}]

       [:div.gmail {:background-color (rgba 50 50 50 0.5)}]

       [:div.weather {:background-color (rgba 50 50 50 0.5)}]

       [:table {:border          "none"
                :border-collapse "collapse"
                :text-align      "center"}]

       [:table#mpd {:padding-top    "10px"
                    :padding-bottom "10px"
                    :padding-left   "10px"
                    :padding-right  "10px"}
        [:td  {:border-left  "1px solid rgb(150, 150, 150)"
               :border-right "1px solid rgb(150, 150, 150)"}
          [:&:first-child {:border-left  "none"}]
          [:&:last-child  {:border-right "none"}]] 

        [:td.param {:font-family   "OpenSansLight"
                    :text-align    "right"
                    :padding-right "10px"}]
        [:td.value {:text-align   "left"
                    :padding-left "10px"}]
        [:td.album-art
         [:img {:height (str album-cover-size "px")}]]]

       [:table#weather {:table-layout "fixed"}
          [:i.wi {:color (rgb 220 220 220)
                  :font-size "300%"
                  :padding-top "5px"
                  :padding-bottom "5px"}]
          [:td {:border-left  "1px solid rgb(150, 150, 150)"
                :border-right "1px solid rgb(150, 150, 150)"
                :padding-left  "10px"
                :padding-right "10px"
                :width "120px"}
            [:&:first-child {:border-left "none"}]
            [:&:last-child  {:border-right "none"}]]]

       [:table.row
          [:td {:padding-left   "10px"
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
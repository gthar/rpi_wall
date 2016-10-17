(ns rpi-wall.common-helpers)

(defn base64->img
  [{:keys [base64-src img-format]}]
  (str "data:image/" img-format ";base64," base64-src))

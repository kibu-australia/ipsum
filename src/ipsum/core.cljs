(ns ipsum.core
  (:require [reagent.core :as r :refer [atom]]))

(enable-console-print!)

(def words-string "kitch biodiesel eco-friendly cliche etsy art ethical fairtrade chillwave cleanse artisan occupy burger taco food-truck vegan vegetarian food truck minimal handmade DIY tumblr blogging tweet instagram typewriter irony post-irony cliche meh scene gluten-free sarcasm beer ale brewery coffee arabica single-origin <3 8-bit vintage second-hand wayfarers banjo neo-folk lo-fi hashtag street art Brooklyn fried vinegar vinyl Portland Brunswick Fitzroy cardigan try-hard small-batch pollo-pescitarian helvetica shabby crass creative grilled trend urban-farming ultra-urban cheap-chic fixed-gear flexitarianauthentic original quinoa super-food grain oatmeal handpicked preloved")

(defn infinite-words []
  (repeatedly
   (fn [] (-> words-string
              (clojure.string/split #" ")
              shuffle
              first))))

(def options (atom {:paragraph-length 10 :num-paragraphs 1}))
(defn text []
  [:div.box
   [:h1 "Lorem Hipsum"]
   [:h5 "Paragraph Length"]
   [:input {:type "range" :value (@options :paragraph-length) :min 10 :max 100
            :style {:width "100%"}
            :on-change #(swap! options assoc
                               :paragraph-length (-> % .-target .-value))}]
   [:h5 "Number of paragraphs"]
   [:input {:type "range" :value (@options :num-paragraphs) :min 1 :max 10
            :style {:width "100%"}
            :on-change #(swap! options assoc
                               :num-paragraphs (-> % .-target .-value))}]
   [:div.text
    (for [i (range 0 (@options :num-paragraphs))]
      [:p (clojure.string/join " " (take (@options :paragraph-length)
                                         (infinite-words)))])]])

(defn setup []
  (r/render-component [text] (.getElementById js/document "main")))

(setup)

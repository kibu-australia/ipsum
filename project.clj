(defproject ipsum "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [reagent "0.4.2"]
                 [org.clojure/clojurescript "0.0-2138"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "ipsum"
              :source-paths ["src"]
              :compiler {
                :preamble ["reagent/react.js"]
                :output-to "ipsum.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})

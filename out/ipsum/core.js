// Compiled by ClojureScript 0.0-2138
goog.provide('ipsum.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
ipsum.core.words_string = "kitch biodiesel eco-friendly cliche etsy art ethical fairtrade chillwave cleanse artisan occupy burger taco food-truck vegan vegetarian food truck minimal handmade DIY tumblr blogging tweet instagram typewriter irony post-irony cliche meh scene gluten-free sarcasm beer ale brewery coffee arabica single-origin <3 8-bit vintage second-hand wayfarers banjo neo-folk lo-fi hashtag street art Brooklyn fried vinegar vinyl Portland Brunswick Fitzroy cardigan try-hard small-batch pollo-pescitarian helvetica shabby crass creative grilled trend urban-farming ultra-urban cheap-chic fixed-gear flexitarianauthentic original quinoa super-food grain oatmeal handpicked preloved";
ipsum.core.infinite_words = (function infinite_words(){return cljs.core.repeatedly.call(null,(function (){return cljs.core.first.call(null,cljs.core.shuffle.call(null,clojure.string.split.call(null,ipsum.core.words_string,/ /)));
}));
});
ipsum.core.options = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paragraph-length","paragraph-length",4276287383),10,new cljs.core.Keyword(null,"num-paragraphs","num-paragraphs",3493710046),1], null));
ipsum.core.text = (function text(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2686463584),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Lorem Hipsum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Paragraph Length"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1017479852),"range",new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.deref.call(null,ipsum.core.options).call(null,new cljs.core.Keyword(null,"paragraph-length","paragraph-length",4276287383)),new cljs.core.Keyword(null,"min","min",1014012356),10,new cljs.core.Keyword(null,"max","max",1014012118),100,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",1127031096),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__4919_SHARP_){return cljs.core.swap_BANG_.call(null,ipsum.core.options,cljs.core.assoc,new cljs.core.Keyword(null,"paragraph-length","paragraph-length",4276287383),p1__4919_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Number of paragraphs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1017479852),"range",new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.deref.call(null,ipsum.core.options).call(null,new cljs.core.Keyword(null,"num-paragraphs","num-paragraphs",3493710046)),new cljs.core.Keyword(null,"min","min",1014012356),1,new cljs.core.Keyword(null,"max","max",1014012118),10,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",1127031096),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__4920_SHARP_){return cljs.core.swap_BANG_.call(null,ipsum.core.options,cljs.core.assoc,new cljs.core.Keyword(null,"num-paragraphs","num-paragraphs",3493710046),p1__4920_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text","div.text",1324163036),(function (){var iter__4119__auto__ = (function iter__4925(s__4926){return (new cljs.core.LazySeq(null,(function (){var s__4926__$1 = s__4926;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4926__$1);if(temp__4092__auto__)
{var s__4926__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4926__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__4926__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__4928 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__4927 = 0;while(true){
if((i__4927 < size__4118__auto__))
{var i = cljs.core._nth.call(null,c__4117__auto__,i__4927);cljs.core.chunk_append.call(null,b__4928,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),clojure.string.join.call(null," ",cljs.core.take.call(null,cljs.core.deref.call(null,ipsum.core.options).call(null,new cljs.core.Keyword(null,"paragraph-length","paragraph-length",4276287383)),ipsum.core.infinite_words.call(null)))], null));
{
var G__4929 = (i__4927 + 1);
i__4927 = G__4929;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4928),iter__4925.call(null,cljs.core.chunk_rest.call(null,s__4926__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4928),null);
}
} else
{var i = cljs.core.first.call(null,s__4926__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),clojure.string.join.call(null," ",cljs.core.take.call(null,cljs.core.deref.call(null,ipsum.core.options).call(null,new cljs.core.Keyword(null,"paragraph-length","paragraph-length",4276287383)),ipsum.core.infinite_words.call(null)))], null),iter__4925.call(null,cljs.core.rest.call(null,s__4926__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__.call(null,cljs.core.range.call(null,0,cljs.core.deref.call(null,ipsum.core.options).call(null,new cljs.core.Keyword(null,"num-paragraphs","num-paragraphs",3493710046))));
})()], null)], null);
});
ipsum.core.setup = (function setup(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ipsum.core.text], null),document.getElementById("main"));
});
ipsum.core.setup.call(null);

//# sourceMappingURL=core.js.map
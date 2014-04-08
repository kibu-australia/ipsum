// Compiled by ClojureScript 0.0-2138
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,0);
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_5897 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5897;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
}),null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.reagent$ratom$ISwap$ = true;
reagent.ratom.RAtom.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.RAtom.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.RAtom.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.RAtom.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.reagent$ratom$IReset$ = true;
reagent.ratom.RAtom.prototype.reagent$ratom$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_(self__.validator.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",1544652043,null),new cljs.core.Symbol(null,"new-value","new-value",972165309,null))))].join('')));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.RAtom.prototype.reagent$ratom$IAtom$ = true;
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__5901__delegate = function (x,p__5898){var map__5900 = p__5898;var map__5900__$1 = ((cljs.core.seq_QMARK_.call(null,map__5900))?cljs.core.apply.call(null,cljs.core.hash_map,map__5900):map__5900);var validator = cljs.core.get.call(null,map__5900__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta = cljs.core.get.call(null,map__5900__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__5901 = function (x,var_args){
var p__5898 = null;if (arguments.length > 1) {
  p__5898 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__5901__delegate.call(this,x,p__5898);};
G__5901.cljs$lang$maxFixedArity = 1;
G__5901.cljs$lang$applyTo = (function (arglist__5902){
var x = cljs.core.first(arglist__5902);
var p__5898 = cljs.core.rest(arglist__5902);
return G__5901__delegate(x,p__5898);
});
G__5901.cljs$core$IFn$_invoke$arity$variadic = G__5901__delegate;
return G__5901;
})()
;
atom = function(x,var_args){
var p__5898 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
reagent.ratom.IDisposable = (function (){var obj5904 = {};return obj5904;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj5906 = {};return obj5906;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3396__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (reagent.ratom.run[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (reagent.ratom.run["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj5908 = {};return obj5908;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3396__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3396__auto__ = k;if(and__3396__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3396__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4029__auto__ = (((k == null))?null:k);return (function (){var or__3408__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,obs,oldval,newval);
return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.reagent$ratom$ISwap$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});
reagent.ratom.Reaction.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});
reagent.ratom.Reaction.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});
reagent.ratom.Reaction.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__3408__auto__ = self__.auto_run;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__4798__auto___5921 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(177),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__4798__auto___5921))].join(''))].join(''));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__3408__auto__ = self__.auto_run;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"auto-run","auto-run",-202959066,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",1304741512,null))))].join('')));
}
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3396__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3396__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3396__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3408__auto__ = self__.auto_run;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__5909_5922 = cljs.core.seq.call(null,derefed);var chunk__5910_5923 = null;var count__5911_5924 = 0;var i__5912_5925 = 0;while(true){
if((i__5912_5925 < count__5911_5924))
{var w_5926 = cljs.core._nth.call(null,chunk__5910_5923,i__5912_5925);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_5926))
{} else
{cljs.core.add_watch.call(null,w_5926,this$__$1,reagent.ratom._handle_change);
}
{
var G__5927 = seq__5909_5922;
var G__5928 = chunk__5910_5923;
var G__5929 = count__5911_5924;
var G__5930 = (i__5912_5925 + 1);
seq__5909_5922 = G__5927;
chunk__5910_5923 = G__5928;
count__5911_5924 = G__5929;
i__5912_5925 = G__5930;
continue;
}
} else
{var temp__4092__auto___5931 = cljs.core.seq.call(null,seq__5909_5922);if(temp__4092__auto___5931)
{var seq__5909_5932__$1 = temp__4092__auto___5931;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5909_5932__$1))
{var c__4150__auto___5933 = cljs.core.chunk_first.call(null,seq__5909_5932__$1);{
var G__5934 = cljs.core.chunk_rest.call(null,seq__5909_5932__$1);
var G__5935 = c__4150__auto___5933;
var G__5936 = cljs.core.count.call(null,c__4150__auto___5933);
var G__5937 = 0;
seq__5909_5922 = G__5934;
chunk__5910_5923 = G__5935;
count__5911_5924 = G__5936;
i__5912_5925 = G__5937;
continue;
}
} else
{var w_5938 = cljs.core.first.call(null,seq__5909_5932__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_5938))
{} else
{cljs.core.add_watch.call(null,w_5938,this$__$1,reagent.ratom._handle_change);
}
{
var G__5939 = cljs.core.next.call(null,seq__5909_5932__$1);
var G__5940 = null;
var G__5941 = 0;
var G__5942 = 0;
seq__5909_5922 = G__5939;
chunk__5910_5923 = G__5940;
count__5911_5924 = G__5941;
i__5912_5925 = G__5942;
continue;
}
}
} else
{}
}
break;
}
var seq__5913_5943 = cljs.core.seq.call(null,self__.watching);var chunk__5914_5944 = null;var count__5915_5945 = 0;var i__5916_5946 = 0;while(true){
if((i__5916_5946 < count__5915_5945))
{var w_5947 = cljs.core._nth.call(null,chunk__5914_5944,i__5916_5946);if(cljs.core.contains_QMARK_.call(null,derefed,w_5947))
{} else
{cljs.core.remove_watch.call(null,w_5947,this$__$1);
}
{
var G__5948 = seq__5913_5943;
var G__5949 = chunk__5914_5944;
var G__5950 = count__5915_5945;
var G__5951 = (i__5916_5946 + 1);
seq__5913_5943 = G__5948;
chunk__5914_5944 = G__5949;
count__5915_5945 = G__5950;
i__5916_5946 = G__5951;
continue;
}
} else
{var temp__4092__auto___5952 = cljs.core.seq.call(null,seq__5913_5943);if(temp__4092__auto___5952)
{var seq__5913_5953__$1 = temp__4092__auto___5952;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5913_5953__$1))
{var c__4150__auto___5954 = cljs.core.chunk_first.call(null,seq__5913_5953__$1);{
var G__5955 = cljs.core.chunk_rest.call(null,seq__5913_5953__$1);
var G__5956 = c__4150__auto___5954;
var G__5957 = cljs.core.count.call(null,c__4150__auto___5954);
var G__5958 = 0;
seq__5913_5943 = G__5955;
chunk__5914_5944 = G__5956;
count__5915_5945 = G__5957;
i__5916_5946 = G__5958;
continue;
}
} else
{var w_5959 = cljs.core.first.call(null,seq__5913_5953__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_5959))
{} else
{cljs.core.remove_watch.call(null,w_5959,this$__$1);
}
{
var G__5960 = cljs.core.next.call(null,seq__5913_5953__$1);
var G__5961 = null;
var G__5962 = 0;
var G__5963 = 0;
seq__5913_5943 = G__5960;
chunk__5914_5944 = G__5961;
count__5915_5945 = G__5962;
i__5916_5946 = G__5963;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__5917_5964 = cljs.core.seq.call(null,self__.watching);var chunk__5918_5965 = null;var count__5919_5966 = 0;var i__5920_5967 = 0;while(true){
if((i__5920_5967 < count__5919_5966))
{var w_5968 = cljs.core._nth.call(null,chunk__5918_5965,i__5920_5967);cljs.core.remove_watch.call(null,w_5968,this$__$1);
{
var G__5969 = seq__5917_5964;
var G__5970 = chunk__5918_5965;
var G__5971 = count__5919_5966;
var G__5972 = (i__5920_5967 + 1);
seq__5917_5964 = G__5969;
chunk__5918_5965 = G__5970;
count__5919_5966 = G__5971;
i__5920_5967 = G__5972;
continue;
}
} else
{var temp__4092__auto___5973 = cljs.core.seq.call(null,seq__5917_5964);if(temp__4092__auto___5973)
{var seq__5917_5974__$1 = temp__4092__auto___5973;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5917_5974__$1))
{var c__4150__auto___5975 = cljs.core.chunk_first.call(null,seq__5917_5974__$1);{
var G__5976 = cljs.core.chunk_rest.call(null,seq__5917_5974__$1);
var G__5977 = c__4150__auto___5975;
var G__5978 = cljs.core.count.call(null,c__4150__auto___5975);
var G__5979 = 0;
seq__5917_5964 = G__5976;
chunk__5918_5965 = G__5977;
count__5919_5966 = G__5978;
i__5920_5967 = G__5979;
continue;
}
} else
{var w_5980 = cljs.core.first.call(null,seq__5917_5974__$1);cljs.core.remove_watch.call(null,w_5980,this$__$1);
{
var G__5981 = cljs.core.next.call(null,seq__5917_5974__$1);
var G__5982 = null;
var G__5983 = 0;
var G__5984 = 0;
seq__5917_5964 = G__5981;
chunk__5918_5965 = G__5982;
count__5919_5966 = G__5983;
i__5920_5967 = G__5984;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);var derefed = reagent.ratom.captured.call(null,this$__$1);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.reagent$ratom$IReset$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;var old_value = self__.state;self__.state = new_value;
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
return new_value;
});
reagent.ratom.Reaction.prototype.reagent$ratom$IAtom$ = true;
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__5985){var map__5987 = p__5985;var map__5987__$1 = ((cljs.core.seq_QMARK_.call(null,map__5987))?cljs.core.apply.call(null,cljs.core.hash_map,map__5987):map__5987);var derefed = cljs.core.get.call(null,map__5987__$1,new cljs.core.Keyword(null,"derefed","derefed",2569894915));var on_dispose = cljs.core.get.call(null,map__5987__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2213067683));var on_set = cljs.core.get.call(null,map__5987__$1,new cljs.core.Keyword(null,"on-set","on-set",4294781670));var auto_run = cljs.core.get.call(null,map__5987__$1,new cljs.core.Keyword(null,"auto-run","auto-run",2451476703));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
reagent.ratom._update_watching.call(null,reaction,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__5985 = null;if (arguments.length > 1) {
  p__5985 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__5985);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__5988){
var f = cljs.core.first(arglist__5988);
var p__5985 = cljs.core.rest(arglist__5988);
return make_reaction__delegate(f,p__5985);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map
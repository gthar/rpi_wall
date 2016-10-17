// Compiled by ClojureScript 1.9.36 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__13108__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13109__i = 0, G__13109__a = new Array(arguments.length -  0);
while (G__13109__i < G__13109__a.length) {G__13109__a[G__13109__i] = arguments[G__13109__i + 0]; ++G__13109__i;}
  args = new cljs.core.IndexedSeq(G__13109__a,0);
} 
return G__13108__delegate.call(this,args);};
G__13108.cljs$lang$maxFixedArity = 0;
G__13108.cljs$lang$applyTo = (function (arglist__13110){
var args = cljs.core.seq(arglist__13110);
return G__13108__delegate(args);
});
G__13108.cljs$core$IFn$_invoke$arity$variadic = G__13108__delegate;
return G__13108;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13111__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13112__i = 0, G__13112__a = new Array(arguments.length -  0);
while (G__13112__i < G__13112__a.length) {G__13112__a[G__13112__i] = arguments[G__13112__i + 0]; ++G__13112__i;}
  args = new cljs.core.IndexedSeq(G__13112__a,0);
} 
return G__13111__delegate.call(this,args);};
G__13111.cljs$lang$maxFixedArity = 0;
G__13111.cljs$lang$applyTo = (function (arglist__13113){
var args = cljs.core.seq(arglist__13113);
return G__13111__delegate(args);
});
G__13111.cljs$core$IFn$_invoke$arity$variadic = G__13111__delegate;
return G__13111;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
// Compiled by ClojureScript 1.9.36 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6773__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_13068 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_13068){
return (function (){
var _STAR_always_update_STAR_13069 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13069;
}});})(_STAR_always_update_STAR_13068))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13068;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args13070 = [];
var len__7848__auto___13073 = arguments.length;
var i__7849__auto___13074 = (0);
while(true){
if((i__7849__auto___13074 < len__7848__auto___13073)){
args13070.push((arguments[i__7849__auto___13074]));

var G__13075 = (i__7849__auto___13074 + (1));
i__7849__auto___13074 = G__13075;
continue;
} else {
}
break;
}

var G__13072 = args13070.length;
switch (G__13072) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13070.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__13081_13085 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__13082_13086 = null;
var count__13083_13087 = (0);
var i__13084_13088 = (0);
while(true){
if((i__13084_13088 < count__13083_13087)){
var v_13089 = cljs.core._nth.call(null,chunk__13082_13086,i__13084_13088);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_13089);

var G__13090 = seq__13081_13085;
var G__13091 = chunk__13082_13086;
var G__13092 = count__13083_13087;
var G__13093 = (i__13084_13088 + (1));
seq__13081_13085 = G__13090;
chunk__13082_13086 = G__13091;
count__13083_13087 = G__13092;
i__13084_13088 = G__13093;
continue;
} else {
var temp__4657__auto___13094 = cljs.core.seq.call(null,seq__13081_13085);
if(temp__4657__auto___13094){
var seq__13081_13095__$1 = temp__4657__auto___13094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13081_13095__$1)){
var c__7584__auto___13096 = cljs.core.chunk_first.call(null,seq__13081_13095__$1);
var G__13097 = cljs.core.chunk_rest.call(null,seq__13081_13095__$1);
var G__13098 = c__7584__auto___13096;
var G__13099 = cljs.core.count.call(null,c__7584__auto___13096);
var G__13100 = (0);
seq__13081_13085 = G__13097;
chunk__13082_13086 = G__13098;
count__13083_13087 = G__13099;
i__13084_13088 = G__13100;
continue;
} else {
var v_13101 = cljs.core.first.call(null,seq__13081_13095__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_13101);

var G__13102 = cljs.core.next.call(null,seq__13081_13095__$1);
var G__13103 = null;
var G__13104 = (0);
var G__13105 = (0);
seq__13081_13085 = G__13102;
chunk__13082_13086 = G__13103;
count__13083_13087 = G__13104;
i__13084_13088 = G__13105;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map
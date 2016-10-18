// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11561){
var map__11586 = p__11561;
var map__11586__$1 = ((((!((map__11586 == null)))?((((map__11586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11586):map__11586);
var m = map__11586__$1;
var n = cljs.core.get.call(null,map__11586__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11586__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11588_11610 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11589_11611 = null;
var count__11590_11612 = (0);
var i__11591_11613 = (0);
while(true){
if((i__11591_11613 < count__11590_11612)){
var f_11614 = cljs.core._nth.call(null,chunk__11589_11611,i__11591_11613);
cljs.core.println.call(null,"  ",f_11614);

var G__11615 = seq__11588_11610;
var G__11616 = chunk__11589_11611;
var G__11617 = count__11590_11612;
var G__11618 = (i__11591_11613 + (1));
seq__11588_11610 = G__11615;
chunk__11589_11611 = G__11616;
count__11590_11612 = G__11617;
i__11591_11613 = G__11618;
continue;
} else {
var temp__4657__auto___11619 = cljs.core.seq.call(null,seq__11588_11610);
if(temp__4657__auto___11619){
var seq__11588_11620__$1 = temp__4657__auto___11619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11588_11620__$1)){
var c__7584__auto___11621 = cljs.core.chunk_first.call(null,seq__11588_11620__$1);
var G__11622 = cljs.core.chunk_rest.call(null,seq__11588_11620__$1);
var G__11623 = c__7584__auto___11621;
var G__11624 = cljs.core.count.call(null,c__7584__auto___11621);
var G__11625 = (0);
seq__11588_11610 = G__11622;
chunk__11589_11611 = G__11623;
count__11590_11612 = G__11624;
i__11591_11613 = G__11625;
continue;
} else {
var f_11626 = cljs.core.first.call(null,seq__11588_11620__$1);
cljs.core.println.call(null,"  ",f_11626);

var G__11627 = cljs.core.next.call(null,seq__11588_11620__$1);
var G__11628 = null;
var G__11629 = (0);
var G__11630 = (0);
seq__11588_11610 = G__11627;
chunk__11589_11611 = G__11628;
count__11590_11612 = G__11629;
i__11591_11613 = G__11630;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11631 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6773__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11631);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11631)))?cljs.core.second.call(null,arglists_11631):arglists_11631));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11592_11632 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11593_11633 = null;
var count__11594_11634 = (0);
var i__11595_11635 = (0);
while(true){
if((i__11595_11635 < count__11594_11634)){
var vec__11596_11636 = cljs.core._nth.call(null,chunk__11593_11633,i__11595_11635);
var name_11637 = cljs.core.nth.call(null,vec__11596_11636,(0),null);
var map__11599_11638 = cljs.core.nth.call(null,vec__11596_11636,(1),null);
var map__11599_11639__$1 = ((((!((map__11599_11638 == null)))?((((map__11599_11638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11599_11638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11599_11638):map__11599_11638);
var doc_11640 = cljs.core.get.call(null,map__11599_11639__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11641 = cljs.core.get.call(null,map__11599_11639__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11637);

cljs.core.println.call(null," ",arglists_11641);

if(cljs.core.truth_(doc_11640)){
cljs.core.println.call(null," ",doc_11640);
} else {
}

var G__11642 = seq__11592_11632;
var G__11643 = chunk__11593_11633;
var G__11644 = count__11594_11634;
var G__11645 = (i__11595_11635 + (1));
seq__11592_11632 = G__11642;
chunk__11593_11633 = G__11643;
count__11594_11634 = G__11644;
i__11595_11635 = G__11645;
continue;
} else {
var temp__4657__auto___11646 = cljs.core.seq.call(null,seq__11592_11632);
if(temp__4657__auto___11646){
var seq__11592_11647__$1 = temp__4657__auto___11646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11592_11647__$1)){
var c__7584__auto___11648 = cljs.core.chunk_first.call(null,seq__11592_11647__$1);
var G__11649 = cljs.core.chunk_rest.call(null,seq__11592_11647__$1);
var G__11650 = c__7584__auto___11648;
var G__11651 = cljs.core.count.call(null,c__7584__auto___11648);
var G__11652 = (0);
seq__11592_11632 = G__11649;
chunk__11593_11633 = G__11650;
count__11594_11634 = G__11651;
i__11595_11635 = G__11652;
continue;
} else {
var vec__11601_11653 = cljs.core.first.call(null,seq__11592_11647__$1);
var name_11654 = cljs.core.nth.call(null,vec__11601_11653,(0),null);
var map__11604_11655 = cljs.core.nth.call(null,vec__11601_11653,(1),null);
var map__11604_11656__$1 = ((((!((map__11604_11655 == null)))?((((map__11604_11655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11604_11655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11604_11655):map__11604_11655);
var doc_11657 = cljs.core.get.call(null,map__11604_11656__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11658 = cljs.core.get.call(null,map__11604_11656__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11654);

cljs.core.println.call(null," ",arglists_11658);

if(cljs.core.truth_(doc_11657)){
cljs.core.println.call(null," ",doc_11657);
} else {
}

var G__11659 = cljs.core.next.call(null,seq__11592_11647__$1);
var G__11660 = null;
var G__11661 = (0);
var G__11662 = (0);
seq__11592_11632 = G__11659;
chunk__11593_11633 = G__11660;
count__11594_11634 = G__11661;
i__11595_11635 = G__11662;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var specs = cljs.spec.fn_specs.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,cljs.core.vals.call(null,specs)))){
cljs.core.print.call(null,"Spec");

return cljs.core.run_BANG_.call(null,((function (specs,map__11586,map__11586__$1,m,n,nm){
return (function (p__11606){
var vec__11607 = p__11606;
var role = cljs.core.nth.call(null,vec__11607,(0),null);
var spec = cljs.core.nth.call(null,vec__11607,(1),null);
if(cljs.core.truth_((function (){var and__6761__auto__ = spec;
if(cljs.core.truth_(and__6761__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__6761__auto__;
}
})())){
return cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,map__11586,map__11586__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
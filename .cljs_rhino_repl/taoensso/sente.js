// Compiled by ClojureScript 1.9.36 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.79);
}
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.call(null,false);
}
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__24112 = x;
var ev_id = cljs.core.nth.call(null,vec__24112,(0),null);
var _ = cljs.core.nth.call(null,vec__24112,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4657__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var _QMARK_err = temp__4657__auto__;
var err_msg = [cljs.core.str((function (){var G__24116 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__24116) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: "),cljs.core.str(x)].join('');
throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__6761__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__6761__auto__){
var and__6761__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__6761__auto____$1){
var map__24128 = x;
var map__24128__$1 = ((((!((map__24128 == null)))?((((map__24128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24128):map__24128);
var ch_recv = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__6761__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__6761__auto____$2){
var and__6761__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__6761__auto____$3){
var and__6761__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__6761__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__6761__auto____$4;
}
} else {
return and__6761__auto____$3;
}
} else {
return and__6761__auto____$2;
}
} else {
return and__6761__auto____$1;
}
} else {
return and__6761__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__6761__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__6761__auto__){
var and__6761__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__6761__auto____$1){
var map__24140 = x;
var map__24140__$1 = ((((!((map__24140 == null)))?((((map__24140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24140):map__24140);
var ch_recv = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__6761__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__6761__auto____$2){
var and__6761__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__6761__auto____$3){
var and__6761__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__6761__auto____$4){
var and__6761__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__6761__auto____$5){
var and__6761__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__6761__auto____$6){
var and__6761__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__6761__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__6761__auto____$7;
}
} else {
return and__6761__auto____$6;
}
} else {
return and__6761__auto____$5;
}
} else {
return and__6761__auto____$4;
}
} else {
return and__6761__auto____$3;
}
} else {
return and__6761__auto____$2;
}
} else {
return and__6761__auto____$1;
}
} else {
return and__6761__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__24142){
var map__24148 = p__24142;
var map__24148__$1 = ((((!((map__24148 == null)))?((((map__24148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24148):map__24148);
var ev_msg = map__24148__$1;
var event = cljs.core.get.call(null,map__24148__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__24148__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__24150 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__24150,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__24150,(1),null);
var valid_event = vec__24150;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4279856727947939544.clj",181,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__24150,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__24148,map__24148__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__24150,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__24148,map__24148__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,1548202388);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,prefixed_pstr,"+");
var pstr = cljs.core.subs.call(null,prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e24160){var t = e24160;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init4279856727947939544.clj",202,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-811485387);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__24157 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__24157,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__24157,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__24157,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__24157,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,-1210362528);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args24161 = [];
var len__7848__auto___24164 = arguments.length;
var i__7849__auto___24165 = (0);
while(true){
if((i__7849__auto___24165 < len__7848__auto___24164)){
args24161.push((arguments[i__7849__auto___24165]));

var G__24166 = (i__7849__auto___24165 + (1));
i__7849__auto___24165 = G__24166;
continue;
} else {
}
break;
}

var G__24163 = args24161.length;
switch (G__24163) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24161.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",218,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,998085164);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",228,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,1731108759);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
})
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = true;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.call(null,x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.call(null,s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__7379__auto__,writer__7380__auto__,opt__7381__auto__){
return cljs.core._write.call(null,writer__7380__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__24168_SHARP_){
if(!((p1__24168_SHARP_ == null))){
if((false) || (p1__24168_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__24168_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__24168_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__24168_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24171){if((e24171 instanceof Error)){
var e = e24171;
return e;
} else {
throw e24171;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__24168#] (satisfies? interfaces/IPacker p1__24168#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn.call(null);


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__7855__auto__ = [];
var len__7848__auto___24479 = arguments.length;
var i__7849__auto___24480 = (0);
while(true){
if((i__7849__auto___24480 < len__7848__auto___24479)){
args__7855__auto__.push((arguments[i__7849__auto___24480]));

var G__24481 = (i__7849__auto___24480 + (1));
i__7849__auto___24480 = G__24481;
continue;
} else {
}
break;
}

var argseq__7856__auto__ = ((((1) < args__7855__auto__.length))?(new cljs.core.IndexedSeq(args__7855__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7856__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__24176){
var vec__24177 = p__24176;
var map__24180 = cljs.core.nth.call(null,vec__24177,(0),null);
var map__24180__$1 = ((((!((map__24180 == null)))?((((map__24180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24180):map__24180);
var recv_buf_or_n = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__6773__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
var or__6773__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__6773__auto____$1)){
return or__6773__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24182){if((e24182 instanceof Error)){
var e = e24182;
return e;
} else {
throw e24182;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24183){if((e24183 instanceof Error)){
var e = e24183;
return e;
} else {
throw e24183;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_24482 = (function (){try{if(((function (vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__24173_SHARP_){
if(!((p1__24173_SHARP_ == null))){
if((false) || (p1__24173_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__24173_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__24173_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__24173_SHARP_);
}
});})(vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24184){if((e24184 instanceof Error)){
var e = e24184;
return e;
} else {
throw e24184;

}
}})();
if((e_24482 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__24173#] (satisfies? interfaces/IServerChanAdapter p1__24173#)) web-server-ch-adapter)",web_server_ch_adapter,e_24482,null);
}

var max_ms_24483 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_24483)){
throw cljs.core.ex_info.call(null,[cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_24483)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_24483], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__6773__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__24484 = null;
var G__24484__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__24186 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__24186,(0),null);
var _udt = cljs.core.nth.call(null,vec__24186,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__24484__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__24484 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__24484__3.call(this,conn_type,uid,client_id);
case 4:
return G__24484__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24484.cljs$core$IFn$_invoke$arity$3 = G__24484__3;
G__24484.cljs$core$IFn$_invoke$arity$4 = G__24484__4;
return G__24484;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24189){if((e24189 instanceof Error)){
var e = e24189;
return e;
} else {
throw e24189;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__24190){
var map__24191 = p__24190;
var map__24191__$1 = ((((!((map__24191 == null)))?((((map__24191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24191):map__24191);
var old_m = map__24191__$1;
var ws = cljs.core.get.call(null,map__24191__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__24191__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__24191__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__24193 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__24193) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24194){if((e24194 instanceof Error)){
var e = e24194;
return e;
} else {
throw e24194;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__24195){
var map__24196 = p__24195;
var map__24196__$1 = ((((!((map__24196 == null)))?((((map__24196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24196):map__24196);
var old_m = map__24196__$1;
var ws = cljs.core.get.call(null,map__24196__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__24196__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__24196__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__24486__delegate = function (user_id,ev,p__24198){
var vec__24199 = p__24198;
var map__24202 = cljs.core.nth.call(null,vec__24199,(0),null);
var map__24202__$1 = ((((!((map__24202 == null)))?((((map__24202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24202):map__24202);
var opts = map__24202__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__24202__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_24487 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __24488 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",399,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_24487,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_24487,ev], null);
});})(uid_24487,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,876164711);
var __24489__$1 = (cljs.core.truth_(uid_24487)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __24490__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_24491 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__24492 = ((function (uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__24204 = cljs.core.get.call(null,m,uid_24487);
var ___$3 = cljs.core.nth.call(null,vec__24204,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__24204,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_24491)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_24487),cljs.core.get.call(null,m,uid_24487));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__24207 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__24207,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__24207,(1),null);
if(cljs.core.vector_QMARK_.call(null,buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_.call(null,ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",ev_uuids,null,null);
}

var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__24207,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__24207,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1133964256);

var G__24210 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__24210) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_24487,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_24487,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init4279856727947939544.clj",446,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_24487], null);
});})(uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-218304712);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__24492.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__24492.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__24211_24494 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_24487], null))));
var chunk__24212_24495 = null;
var count__24213_24496 = (0);
var i__24214_24497 = (0);
while(true){
if((i__24214_24497 < count__24213_24496)){
var vec__24215_24498 = cljs.core._nth.call(null,chunk__24212_24495,i__24214_24497);
var _QMARK_sch_24499 = cljs.core.nth.call(null,vec__24215_24498,(0),null);
var _udt_24500 = cljs.core.nth.call(null,vec__24215_24498,(1),null);
var temp__4657__auto___24501 = _QMARK_sch_24499;
if(cljs.core.truth_(temp__4657__auto___24501)){
var sch_24502 = temp__4657__auto___24501;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_24502);
} else {
}

var G__24503 = seq__24211_24494;
var G__24504 = chunk__24212_24495;
var G__24505 = count__24213_24496;
var G__24506 = (i__24214_24497 + (1));
seq__24211_24494 = G__24503;
chunk__24212_24495 = G__24504;
count__24213_24496 = G__24505;
i__24214_24497 = G__24506;
continue;
} else {
var temp__4657__auto___24507 = cljs.core.seq.call(null,seq__24211_24494);
if(temp__4657__auto___24507){
var seq__24211_24508__$1 = temp__4657__auto___24507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24211_24508__$1)){
var c__7584__auto___24509 = cljs.core.chunk_first.call(null,seq__24211_24508__$1);
var G__24510 = cljs.core.chunk_rest.call(null,seq__24211_24508__$1);
var G__24511 = c__7584__auto___24509;
var G__24512 = cljs.core.count.call(null,c__7584__auto___24509);
var G__24513 = (0);
seq__24211_24494 = G__24510;
chunk__24212_24495 = G__24511;
count__24213_24496 = G__24512;
i__24214_24497 = G__24513;
continue;
} else {
var vec__24218_24514 = cljs.core.first.call(null,seq__24211_24508__$1);
var _QMARK_sch_24515 = cljs.core.nth.call(null,vec__24218_24514,(0),null);
var _udt_24516 = cljs.core.nth.call(null,vec__24218_24514,(1),null);
var temp__4657__auto___24517__$1 = _QMARK_sch_24515;
if(cljs.core.truth_(temp__4657__auto___24517__$1)){
var sch_24518 = temp__4657__auto___24517__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_24518);
} else {
}

var G__24519 = cljs.core.next.call(null,seq__24211_24508__$1);
var G__24520 = null;
var G__24521 = (0);
var G__24522 = (0);
seq__24211_24494 = G__24519;
chunk__24212_24495 = G__24520;
count__24213_24496 = G__24521;
i__24214_24497 = G__24522;
continue;
}
} else {
}
}
break;
}

var seq__24221_24523 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_24487], null))));
var chunk__24222_24524 = null;
var count__24223_24525 = (0);
var i__24224_24526 = (0);
while(true){
if((i__24224_24526 < count__24223_24525)){
var vec__24225_24527 = cljs.core._nth.call(null,chunk__24222_24524,i__24224_24526);
var _QMARK_sch_24528 = cljs.core.nth.call(null,vec__24225_24527,(0),null);
var _udt_24529 = cljs.core.nth.call(null,vec__24225_24527,(1),null);
var temp__4657__auto___24530 = _QMARK_sch_24528;
if(cljs.core.truth_(temp__4657__auto___24530)){
var sch_24531 = temp__4657__auto___24530;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_24531);
} else {
}

var G__24532 = seq__24221_24523;
var G__24533 = chunk__24222_24524;
var G__24534 = count__24223_24525;
var G__24535 = (i__24224_24526 + (1));
seq__24221_24523 = G__24532;
chunk__24222_24524 = G__24533;
count__24223_24525 = G__24534;
i__24224_24526 = G__24535;
continue;
} else {
var temp__4657__auto___24536 = cljs.core.seq.call(null,seq__24221_24523);
if(temp__4657__auto___24536){
var seq__24221_24537__$1 = temp__4657__auto___24536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24221_24537__$1)){
var c__7584__auto___24538 = cljs.core.chunk_first.call(null,seq__24221_24537__$1);
var G__24539 = cljs.core.chunk_rest.call(null,seq__24221_24537__$1);
var G__24540 = c__7584__auto___24538;
var G__24541 = cljs.core.count.call(null,c__7584__auto___24538);
var G__24542 = (0);
seq__24221_24523 = G__24539;
chunk__24222_24524 = G__24540;
count__24223_24525 = G__24541;
i__24224_24526 = G__24542;
continue;
} else {
var vec__24228_24543 = cljs.core.first.call(null,seq__24221_24537__$1);
var _QMARK_sch_24544 = cljs.core.nth.call(null,vec__24228_24543,(0),null);
var _udt_24545 = cljs.core.nth.call(null,vec__24228_24543,(1),null);
var temp__4657__auto___24546__$1 = _QMARK_sch_24544;
if(cljs.core.truth_(temp__4657__auto___24546__$1)){
var sch_24547 = temp__4657__auto___24546__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_24547);
} else {
}

var G__24548 = cljs.core.next.call(null,seq__24221_24537__$1);
var G__24549 = null;
var G__24550 = (0);
var G__24551 = (0);
seq__24221_24523 = G__24548;
chunk__24222_24524 = G__24549;
count__24223_24525 = G__24550;
i__24224_24526 = G__24551;
continue;
}
} else {
}
}
break;
}
} else {
var seq__24231_24552 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__24232_24553 = null;
var count__24233_24554 = (0);
var i__24234_24555 = (0);
while(true){
if((i__24234_24555 < count__24233_24554)){
var conn_type_24556 = cljs.core._nth.call(null,chunk__24232_24553,i__24234_24555);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_24556,uid_24487], null),((function (seq__24231_24552,chunk__24232_24553,count__24233_24554,i__24234_24555,conn_type_24556,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_24491], true)], null);
} else {
var vec__24235 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__24235,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__24235,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_24491)], null);
}
});})(seq__24231_24552,chunk__24232_24553,count__24233_24554,i__24234_24555,conn_type_24556,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__24557 = seq__24231_24552;
var G__24558 = chunk__24232_24553;
var G__24559 = count__24233_24554;
var G__24560 = (i__24234_24555 + (1));
seq__24231_24552 = G__24557;
chunk__24232_24553 = G__24558;
count__24233_24554 = G__24559;
i__24234_24555 = G__24560;
continue;
} else {
var temp__4657__auto___24561 = cljs.core.seq.call(null,seq__24231_24552);
if(temp__4657__auto___24561){
var seq__24231_24562__$1 = temp__4657__auto___24561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24231_24562__$1)){
var c__7584__auto___24563 = cljs.core.chunk_first.call(null,seq__24231_24562__$1);
var G__24564 = cljs.core.chunk_rest.call(null,seq__24231_24562__$1);
var G__24565 = c__7584__auto___24563;
var G__24566 = cljs.core.count.call(null,c__7584__auto___24563);
var G__24567 = (0);
seq__24231_24552 = G__24564;
chunk__24232_24553 = G__24565;
count__24233_24554 = G__24566;
i__24234_24555 = G__24567;
continue;
} else {
var conn_type_24568 = cljs.core.first.call(null,seq__24231_24562__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_24568,uid_24487], null),((function (seq__24231_24552,chunk__24232_24553,count__24233_24554,i__24234_24555,conn_type_24568,seq__24231_24562__$1,temp__4657__auto___24561,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_24491], true)], null);
} else {
var vec__24238 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__24238,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__24238,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_24491)], null);
}
});})(seq__24231_24552,chunk__24232_24553,count__24233_24554,i__24234_24555,conn_type_24568,seq__24231_24562__$1,temp__4657__auto___24561,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__24569 = cljs.core.next.call(null,seq__24231_24562__$1);
var G__24570 = null;
var G__24571 = (0);
var G__24572 = (0);
seq__24231_24552 = G__24569;
chunk__24232_24553 = G__24570;
count__24233_24554 = G__24571;
i__24234_24555 = G__24572;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__24492.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__24492.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_24573 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_24574 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__19201__auto___24575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___24575,ws_timeout_24573,ajax_timeout_24574,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___24575,ws_timeout_24573,ajax_timeout_24574,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_24245){
var state_val_24246 = (state_24245[(1)]);
if((state_val_24246 === (1))){
var state_24245__$1 = state_24245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24245__$1,(2),ws_timeout_24573);
} else {
if((state_val_24246 === (2))){
var inst_24242 = (state_24245[(2)]);
var inst_24243 = flush_buffer_BANG__24492.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_24245__$1 = (function (){var statearr_24247 = state_24245;
(statearr_24247[(7)] = inst_24242);

return statearr_24247;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24245__$1,inst_24243);
} else {
return null;
}
}
});})(c__19201__auto___24575,ws_timeout_24573,ajax_timeout_24574,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__19136__auto__,c__19201__auto___24575,ws_timeout_24573,ajax_timeout_24574,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__19137__auto__ = null;
var taoensso$sente$state_machine__19137__auto____0 = (function (){
var statearr_24251 = [null,null,null,null,null,null,null,null];
(statearr_24251[(0)] = taoensso$sente$state_machine__19137__auto__);

(statearr_24251[(1)] = (1));

return statearr_24251;
});
var taoensso$sente$state_machine__19137__auto____1 = (function (state_24245){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_24245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e24252){if((e24252 instanceof Object)){
var ex__19140__auto__ = e24252;
var statearr_24253_24576 = state_24245;
(statearr_24253_24576[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24577 = state_24245;
state_24245 = G__24577;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
taoensso$sente$state_machine__19137__auto__ = function(state_24245){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__19137__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__19137__auto____1.call(this,state_24245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__19137__auto____0;
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__19137__auto____1;
return taoensso$sente$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___24575,ws_timeout_24573,ajax_timeout_24574,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__19203__auto__ = (function (){var statearr_24254 = f__19202__auto__.call(null);
(statearr_24254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___24575);

return statearr_24254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___24575,ws_timeout_24573,ajax_timeout_24574,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__19201__auto___24578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___24578,ws_timeout_24573,ajax_timeout_24574,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___24578,ws_timeout_24573,ajax_timeout_24574,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_24259){
var state_val_24260 = (state_24259[(1)]);
if((state_val_24260 === (1))){
var state_24259__$1 = state_24259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24259__$1,(2),ajax_timeout_24574);
} else {
if((state_val_24260 === (2))){
var inst_24256 = (state_24259[(2)]);
var inst_24257 = flush_buffer_BANG__24492.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_24259__$1 = (function (){var statearr_24261 = state_24259;
(statearr_24261[(7)] = inst_24256);

return statearr_24261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24259__$1,inst_24257);
} else {
return null;
}
}
});})(c__19201__auto___24578,ws_timeout_24573,ajax_timeout_24574,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__19136__auto__,c__19201__auto___24578,ws_timeout_24573,ajax_timeout_24574,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__19137__auto__ = null;
var taoensso$sente$state_machine__19137__auto____0 = (function (){
var statearr_24265 = [null,null,null,null,null,null,null,null];
(statearr_24265[(0)] = taoensso$sente$state_machine__19137__auto__);

(statearr_24265[(1)] = (1));

return statearr_24265;
});
var taoensso$sente$state_machine__19137__auto____1 = (function (state_24259){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_24259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e24266){if((e24266 instanceof Object)){
var ex__19140__auto__ = e24266;
var statearr_24267_24579 = state_24259;
(statearr_24267_24579[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24580 = state_24259;
state_24259 = G__24580;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
taoensso$sente$state_machine__19137__auto__ = function(state_24259){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__19137__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__19137__auto____1.call(this,state_24259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__19137__auto____0;
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__19137__auto____1;
return taoensso$sente$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___24578,ws_timeout_24573,ajax_timeout_24574,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__19203__auto__ = (function (){var statearr_24268 = f__19202__auto__.call(null);
(statearr_24268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___24578);

return statearr_24268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___24578,ws_timeout_24573,ajax_timeout_24574,uid_24487,__24488,__24489__$1,__24490__$2,ev_uuid_24491,flush_buffer_BANG__24492,vec__24199,map__24202,map__24202__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__24486 = function (user_id,ev,var_args){
var p__24198 = null;
if (arguments.length > 2) {
var G__24581__i = 0, G__24581__a = new Array(arguments.length -  2);
while (G__24581__i < G__24581__a.length) {G__24581__a[G__24581__i] = arguments[G__24581__i + 2]; ++G__24581__i;}
  p__24198 = new cljs.core.IndexedSeq(G__24581__a,0);
} 
return G__24486__delegate.call(this,user_id,ev,p__24198);};
G__24486.cljs$lang$maxFixedArity = 2;
G__24486.cljs$lang$applyTo = (function (arglist__24582){
var user_id = cljs.core.first(arglist__24582);
arglist__24582 = cljs.core.next(arglist__24582);
var ev = cljs.core.first(arglist__24582);
var p__24198 = cljs.core.rest(arglist__24582);
return G__24486__delegate(user_id,ev,p__24198);
});
G__24486.cljs$core$IFn$_invoke$arity$variadic = G__24486__delegate;
return G__24486;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__24269 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__24269,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__24269,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__24269,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",515,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__24269,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__24269,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,717124003);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__24269,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__19201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__24269,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__24269,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_24277){
var state_val_24278 = (state_24277[(1)]);
if((state_val_24278 === (1))){
var inst_24272 = cljs.core.async.timeout.call(null,ms);
var state_24277__$1 = state_24277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24277__$1,(2),inst_24272);
} else {
if((state_val_24278 === (2))){
var inst_24274 = (state_24277[(2)]);
var inst_24275 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_24277__$1 = (function (){var statearr_24279 = state_24277;
(statearr_24279[(7)] = inst_24274);

return statearr_24279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24277__$1,inst_24275);
} else {
return null;
}
}
});})(c__19201__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__24269,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__19136__auto__,c__19201__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__24269,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__19137__auto__ = null;
var taoensso$sente$state_machine__19137__auto____0 = (function (){
var statearr_24283 = [null,null,null,null,null,null,null,null];
(statearr_24283[(0)] = taoensso$sente$state_machine__19137__auto__);

(statearr_24283[(1)] = (1));

return statearr_24283;
});
var taoensso$sente$state_machine__19137__auto____1 = (function (state_24277){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_24277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e24284){if((e24284 instanceof Object)){
var ex__19140__auto__ = e24284;
var statearr_24285_24583 = state_24277;
(statearr_24285_24583[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24584 = state_24277;
state_24277 = G__24584;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
taoensso$sente$state_machine__19137__auto__ = function(state_24277){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__19137__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__19137__auto____1.call(this,state_24277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__19137__auto____0;
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__19137__auto____1;
return taoensso$sente$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__24269,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__19203__auto__ = (function (){var statearr_24286 = f__19202__auto__.call(null);
(statearr_24286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto__);

return statearr_24286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__24269,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__19201__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.call(null,event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",560,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-292647002);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4279856727947939544.clj",571,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1264012524);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",580,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1521291744);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);

var temp__4657__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__19201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_24322){
var state_val_24323 = (state_24322[(1)]);
if((state_val_24323 === (7))){
var inst_24318 = (state_24322[(2)]);
var state_24322__$1 = state_24322;
var statearr_24324_24585 = state_24322__$1;
(statearr_24324_24585[(2)] = inst_24318);

(statearr_24324_24585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24323 === (1))){
var inst_24287 = udt_open;
var state_24322__$1 = (function (){var statearr_24325 = state_24322;
(statearr_24325[(7)] = inst_24287);

return statearr_24325;
})();
var statearr_24326_24586 = state_24322__$1;
(statearr_24326_24586[(2)] = null);

(statearr_24326_24586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24323 === (4))){
var inst_24296 = (state_24322[(8)]);
var inst_24291 = (state_24322[(2)]);
var inst_24292 = cljs.core.deref.call(null,conns_);
var inst_24293 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24294 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_24295 = (new cljs.core.PersistentVector(null,3,(5),inst_24293,inst_24294,null));
var inst_24296__$1 = cljs.core.get_in.call(null,inst_24292,inst_24295);
var state_24322__$1 = (function (){var statearr_24327 = state_24322;
(statearr_24327[(8)] = inst_24296__$1);

(statearr_24327[(9)] = inst_24291);

return statearr_24327;
})();
if(cljs.core.truth_(inst_24296__$1)){
var statearr_24328_24587 = state_24322__$1;
(statearr_24328_24587[(1)] = (5));

} else {
var statearr_24329_24588 = state_24322__$1;
(statearr_24329_24588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24323 === (13))){
var inst_24302 = (state_24322[(10)]);
var inst_24311 = (state_24322[(2)]);
var inst_24287 = inst_24302;
var state_24322__$1 = (function (){var statearr_24330 = state_24322;
(statearr_24330[(11)] = inst_24311);

(statearr_24330[(7)] = inst_24287);

return statearr_24330;
})();
var statearr_24331_24589 = state_24322__$1;
(statearr_24331_24589[(2)] = null);

(statearr_24331_24589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24323 === (6))){
var state_24322__$1 = state_24322;
var statearr_24332_24590 = state_24322__$1;
(statearr_24332_24590[(2)] = null);

(statearr_24332_24590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24323 === (3))){
var inst_24320 = (state_24322[(2)]);
var state_24322__$1 = state_24322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24322__$1,inst_24320);
} else {
if((state_val_24323 === (12))){
var state_24322__$1 = state_24322;
var statearr_24333_24591 = state_24322__$1;
(statearr_24333_24591[(2)] = null);

(statearr_24333_24591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24323 === (2))){
var inst_24289 = cljs.core.async.timeout.call(null,ms);
var state_24322__$1 = state_24322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24322__$1,(4),inst_24289);
} else {
if((state_val_24323 === (11))){
var inst_24307 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_24308 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_24307);
var state_24322__$1 = state_24322;
var statearr_24334_24592 = state_24322__$1;
(statearr_24334_24592[(2)] = inst_24308);

(statearr_24334_24592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24323 === (9))){
var state_24322__$1 = state_24322;
var statearr_24335_24593 = state_24322__$1;
(statearr_24335_24593[(2)] = null);

(statearr_24335_24593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24323 === (5))){
var inst_24296 = (state_24322[(8)]);
var inst_24301 = cljs.core.nth.call(null,inst_24296,(0),null);
var inst_24302 = cljs.core.nth.call(null,inst_24296,(1),null);
var inst_24303 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_24322__$1 = (function (){var statearr_24336 = state_24322;
(statearr_24336[(12)] = inst_24301);

(statearr_24336[(10)] = inst_24302);

return statearr_24336;
})();
if(cljs.core.truth_(inst_24303)){
var statearr_24337_24594 = state_24322__$1;
(statearr_24337_24594[(1)] = (8));

} else {
var statearr_24338_24595 = state_24322__$1;
(statearr_24338_24595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24323 === (10))){
var inst_24315 = (state_24322[(2)]);
var state_24322__$1 = state_24322;
var statearr_24339_24596 = state_24322__$1;
(statearr_24339_24596[(2)] = inst_24315);

(statearr_24339_24596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24323 === (8))){
var inst_24302 = (state_24322[(10)]);
var inst_24287 = (state_24322[(7)]);
var inst_24305 = cljs.core._EQ_.call(null,inst_24302,inst_24287);
var state_24322__$1 = state_24322;
if(inst_24305){
var statearr_24340_24597 = state_24322__$1;
(statearr_24340_24597[(1)] = (11));

} else {
var statearr_24341_24598 = state_24322__$1;
(statearr_24341_24598[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19201__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__19136__auto__,c__19201__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__19137__auto__ = null;
var taoensso$sente$state_machine__19137__auto____0 = (function (){
var statearr_24345 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24345[(0)] = taoensso$sente$state_machine__19137__auto__);

(statearr_24345[(1)] = (1));

return statearr_24345;
});
var taoensso$sente$state_machine__19137__auto____1 = (function (state_24322){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_24322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e24346){if((e24346 instanceof Object)){
var ex__19140__auto__ = e24346;
var statearr_24347_24599 = state_24322;
(statearr_24347_24599[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24600 = state_24322;
state_24322 = G__24600;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
taoensso$sente$state_machine__19137__auto__ = function(state_24322){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__19137__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__19137__auto____1.call(this,state_24322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__19137__auto____0;
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__19137__auto____1;
return taoensso$sente$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__19203__auto__ = (function (){var statearr_24348 = f__19202__auto__.call(null);
(statearr_24348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto__);

return statearr_24348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__19201__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",609,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1968724081);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__6773__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);
} else {
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__19201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_24374){
var state_val_24375 = (state_24374[(1)]);
if((state_val_24375 === (1))){
var inst_24349 = cljs.core.async.timeout.call(null,ms);
var state_24374__$1 = state_24374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24374__$1,(2),inst_24349);
} else {
if((state_val_24375 === (2))){
var inst_24356 = (state_24374[(7)]);
var inst_24351 = (state_24374[(2)]);
var inst_24352 = cljs.core.deref.call(null,conns_);
var inst_24353 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24354 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_24355 = (new cljs.core.PersistentVector(null,3,(5),inst_24353,inst_24354,null));
var inst_24356__$1 = cljs.core.get_in.call(null,inst_24352,inst_24355);
var state_24374__$1 = (function (){var statearr_24376 = state_24374;
(statearr_24376[(7)] = inst_24356__$1);

(statearr_24376[(8)] = inst_24351);

return statearr_24376;
})();
if(cljs.core.truth_(inst_24356__$1)){
var statearr_24377_24601 = state_24374__$1;
(statearr_24377_24601[(1)] = (3));

} else {
var statearr_24378_24602 = state_24374__$1;
(statearr_24378_24602[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24375 === (3))){
var inst_24356 = (state_24374[(7)]);
var inst_24361 = cljs.core.nth.call(null,inst_24356,(0),null);
var inst_24362 = cljs.core.nth.call(null,inst_24356,(1),null);
var inst_24363 = cljs.core._EQ_.call(null,inst_24362,udt_open);
var state_24374__$1 = (function (){var statearr_24379 = state_24374;
(statearr_24379[(9)] = inst_24361);

return statearr_24379;
})();
if(inst_24363){
var statearr_24380_24603 = state_24374__$1;
(statearr_24380_24603[(1)] = (6));

} else {
var statearr_24381_24604 = state_24374__$1;
(statearr_24381_24604[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24375 === (4))){
var state_24374__$1 = state_24374;
var statearr_24382_24605 = state_24374__$1;
(statearr_24382_24605[(2)] = null);

(statearr_24382_24605[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24375 === (5))){
var inst_24372 = (state_24374[(2)]);
var state_24374__$1 = state_24374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24374__$1,inst_24372);
} else {
if((state_val_24375 === (6))){
var inst_24365 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_24366 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_24365);
var state_24374__$1 = state_24374;
var statearr_24383_24606 = state_24374__$1;
(statearr_24383_24606[(2)] = inst_24366);

(statearr_24383_24606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24375 === (7))){
var state_24374__$1 = state_24374;
var statearr_24384_24607 = state_24374__$1;
(statearr_24384_24607[(2)] = null);

(statearr_24384_24607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24375 === (8))){
var inst_24369 = (state_24374[(2)]);
var state_24374__$1 = state_24374;
var statearr_24385_24608 = state_24374__$1;
(statearr_24385_24608[(2)] = inst_24369);

(statearr_24385_24608[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19201__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__19136__auto__,c__19201__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__19137__auto__ = null;
var taoensso$sente$state_machine__19137__auto____0 = (function (){
var statearr_24389 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24389[(0)] = taoensso$sente$state_machine__19137__auto__);

(statearr_24389[(1)] = (1));

return statearr_24389;
});
var taoensso$sente$state_machine__19137__auto____1 = (function (state_24374){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_24374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e24390){if((e24390 instanceof Object)){
var ex__19140__auto__ = e24390;
var statearr_24391_24609 = state_24374;
(statearr_24391_24609[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24610 = state_24374;
state_24374 = G__24610;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
taoensso$sente$state_machine__19137__auto__ = function(state_24374){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__19137__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__19137__auto____1.call(this,state_24374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__19137__auto____0;
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__19137__auto____1;
return taoensso$sente$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__19203__auto__ = (function (){var statearr_24392 = f__19202__auto__.call(null);
(statearr_24392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto__);

return statearr_24392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__19201__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__24393 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__24393,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__24393,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__24393,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",639,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__24393,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__24393,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,790669242);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__24393,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",648,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-84921705);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__19201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_24447){
var state_val_24448 = (state_24447[(1)]);
if((state_val_24448 === (7))){
var state_24447__$1 = state_24447;
var statearr_24449_24611 = state_24447__$1;
(statearr_24449_24611[(2)] = null);

(statearr_24449_24611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (1))){
var inst_24396 = cljs.core.async.timeout.call(null,(5000));
var state_24447__$1 = state_24447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24447__$1,(2),inst_24396);
} else {
if((state_val_24448 === (4))){
var state_24447__$1 = state_24447;
var statearr_24450_24612 = state_24447__$1;
(statearr_24450_24612[(2)] = null);

(statearr_24450_24612[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (13))){
var state_24447__$1 = state_24447;
var statearr_24451_24613 = state_24447__$1;
(statearr_24451_24613[(2)] = null);

(statearr_24451_24613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (6))){
var inst_24407 = (state_24447[(7)]);
var inst_24424 = (state_24447[(8)]);
var inst_24406 = (state_24447[(9)]);
var inst_24408 = (state_24447[(10)]);
var inst_24419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24420 = [conn_type,uid,client_id];
var inst_24421 = (new cljs.core.PersistentVector(null,3,(5),inst_24419,inst_24420,null));
var inst_24423 = (function (){var vec__24399 = inst_24406;
var __QMARK_sch = inst_24407;
var udt_t1 = inst_24408;
return ((function (vec__24399,__QMARK_sch,udt_t1,inst_24407,inst_24424,inst_24406,inst_24408,inst_24419,inst_24420,inst_24421,state_val_24448,c__19201__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__24422){
var vec__24452 = p__24422;
var _sch = cljs.core.nth.call(null,vec__24452,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__24452,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__24399,__QMARK_sch,udt_t1,inst_24407,inst_24424,inst_24406,inst_24408,inst_24419,inst_24420,inst_24421,state_val_24448,c__19201__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_24424__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_24421,inst_24423);
var state_24447__$1 = (function (){var statearr_24455 = state_24447;
(statearr_24455[(8)] = inst_24424__$1);

return statearr_24455;
})();
if(cljs.core.truth_(inst_24424__$1)){
var statearr_24456_24614 = state_24447__$1;
(statearr_24456_24614[(1)] = (9));

} else {
var statearr_24457_24615 = state_24447__$1;
(statearr_24457_24615[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (3))){
var inst_24407 = (state_24447[(7)]);
var inst_24406 = (state_24447[(9)]);
var inst_24408 = (state_24447[(10)]);
var inst_24411 = (function (){var vec__24399 = inst_24406;
var __QMARK_sch = inst_24407;
var udt_t1 = inst_24408;
return ((function (vec__24399,__QMARK_sch,udt_t1,inst_24407,inst_24406,inst_24408,state_val_24448,c__19201__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__24399,__QMARK_sch,udt_t1,inst_24407,inst_24406,inst_24408,state_val_24448,c__19201__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_24412 = (new cljs.core.Delay(inst_24411,null));
var inst_24413 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init4279856727947939544.clj",662,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_24412,null,-555639228);
var state_24447__$1 = state_24447;
var statearr_24458_24616 = state_24447__$1;
(statearr_24458_24616[(2)] = inst_24413);

(statearr_24458_24616[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (12))){
var inst_24433 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24434 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_24435 = (new cljs.core.PersistentVector(null,2,(5),inst_24433,inst_24434,null));
var inst_24436 = receive_event_msg_BANG_.call(null,inst_24435);
var state_24447__$1 = state_24447;
var statearr_24459_24617 = state_24447__$1;
(statearr_24459_24617[(2)] = inst_24436);

(statearr_24459_24617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (2))){
var inst_24406 = (state_24447[(9)]);
var inst_24398 = (state_24447[(2)]);
var inst_24402 = cljs.core.deref.call(null,conns_);
var inst_24403 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24404 = [conn_type,uid,client_id];
var inst_24405 = (new cljs.core.PersistentVector(null,3,(5),inst_24403,inst_24404,null));
var inst_24406__$1 = cljs.core.get_in.call(null,inst_24402,inst_24405);
var inst_24407 = cljs.core.nth.call(null,inst_24406__$1,(0),null);
var inst_24408 = cljs.core.nth.call(null,inst_24406__$1,(1),null);
var inst_24409 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_24447__$1 = (function (){var statearr_24460 = state_24447;
(statearr_24460[(7)] = inst_24407);

(statearr_24460[(11)] = inst_24398);

(statearr_24460[(9)] = inst_24406__$1);

(statearr_24460[(10)] = inst_24408);

return statearr_24460;
})();
if(cljs.core.truth_(inst_24409)){
var statearr_24461_24618 = state_24447__$1;
(statearr_24461_24618[(1)] = (3));

} else {
var statearr_24462_24619 = state_24447__$1;
(statearr_24462_24619[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (11))){
var inst_24442 = (state_24447[(2)]);
var state_24447__$1 = state_24447;
var statearr_24463_24620 = state_24447__$1;
(statearr_24463_24620[(2)] = inst_24442);

(statearr_24463_24620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (9))){
var inst_24407 = (state_24447[(7)]);
var inst_24424 = (state_24447[(8)]);
var inst_24406 = (state_24447[(9)]);
var inst_24408 = (state_24447[(10)]);
var inst_24426 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24427 = [conn_type,uid];
var inst_24428 = (new cljs.core.PersistentVector(null,2,(5),inst_24426,inst_24427,null));
var inst_24429 = (function (){var vec__24399 = inst_24406;
var __QMARK_sch = inst_24407;
var udt_t1 = inst_24408;
var disconnect_QMARK_ = inst_24424;
return ((function (vec__24399,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_24407,inst_24424,inst_24406,inst_24408,inst_24426,inst_24427,inst_24428,state_val_24448,c__19201__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__24399,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_24407,inst_24424,inst_24406,inst_24408,inst_24426,inst_24427,inst_24428,state_val_24448,c__19201__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_24430 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_24428,inst_24429);
var inst_24431 = upd_connected_uid_BANG_.call(null,uid);
var state_24447__$1 = (function (){var statearr_24464 = state_24447;
(statearr_24464[(12)] = inst_24430);

return statearr_24464;
})();
if(cljs.core.truth_(inst_24431)){
var statearr_24465_24621 = state_24447__$1;
(statearr_24465_24621[(1)] = (12));

} else {
var statearr_24466_24622 = state_24447__$1;
(statearr_24466_24622[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (5))){
var inst_24408 = (state_24447[(10)]);
var inst_24416 = (state_24447[(2)]);
var inst_24417 = cljs.core._EQ_.call(null,inst_24408,udt_close);
var state_24447__$1 = (function (){var statearr_24467 = state_24447;
(statearr_24467[(13)] = inst_24416);

return statearr_24467;
})();
if(inst_24417){
var statearr_24468_24623 = state_24447__$1;
(statearr_24468_24623[(1)] = (6));

} else {
var statearr_24469_24624 = state_24447__$1;
(statearr_24469_24624[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (14))){
var inst_24439 = (state_24447[(2)]);
var state_24447__$1 = state_24447;
var statearr_24470_24625 = state_24447__$1;
(statearr_24470_24625[(2)] = inst_24439);

(statearr_24470_24625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (10))){
var state_24447__$1 = state_24447;
var statearr_24471_24626 = state_24447__$1;
(statearr_24471_24626[(2)] = null);

(statearr_24471_24626[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (8))){
var inst_24445 = (state_24447[(2)]);
var state_24447__$1 = state_24447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24447__$1,inst_24445);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19201__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__19136__auto__,c__19201__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__19137__auto__ = null;
var taoensso$sente$state_machine__19137__auto____0 = (function (){
var statearr_24475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24475[(0)] = taoensso$sente$state_machine__19137__auto__);

(statearr_24475[(1)] = (1));

return statearr_24475;
});
var taoensso$sente$state_machine__19137__auto____1 = (function (state_24447){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_24447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e24476){if((e24476 instanceof Object)){
var ex__19140__auto__ = e24476;
var statearr_24477_24627 = state_24447;
(statearr_24477_24627[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24628 = state_24447;
state_24447 = G__24628;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
taoensso$sente$state_machine__19137__auto__ = function(state_24447){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__19137__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__19137__auto____1.call(this,state_24447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__19137__auto____0;
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__19137__auto____1;
return taoensso$sente$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__19203__auto__ = (function (){var statearr_24478 = f__19202__auto__.call(null);
(statearr_24478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto__);

return statearr_24478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__19201__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4279856727947939544.clj",684,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1180631066);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__24177,map__24180,map__24180__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq24174){
var G__24175 = cljs.core.first.call(null,seq24174);
var seq24174__$1 = cljs.core.next.call(null,seq24174);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24175,seq24174__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",690,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1181344686);

var seq__24645 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__24646 = null;
var count__24647 = (0);
var i__24648 = (0);
while(true){
if((i__24648 < count__24647)){
var vec__24649 = cljs.core._nth.call(null,chunk__24646,i__24648);
var client_id = cljs.core.nth.call(null,vec__24649,(0),null);
var vec__24652 = cljs.core.nth.call(null,vec__24649,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__24652,(0),null);
var _udt = cljs.core.nth.call(null,vec__24652,(1),null);
var temp__4657__auto___24661 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___24661)){
var sch_24662 = temp__4657__auto___24661;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_24662,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__24663 = seq__24645;
var G__24664 = chunk__24646;
var G__24665 = count__24647;
var G__24666 = (i__24648 + (1));
seq__24645 = G__24663;
chunk__24646 = G__24664;
count__24647 = G__24665;
i__24648 = G__24666;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24645);
if(temp__4657__auto__){
var seq__24645__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24645__$1)){
var c__7584__auto__ = cljs.core.chunk_first.call(null,seq__24645__$1);
var G__24667 = cljs.core.chunk_rest.call(null,seq__24645__$1);
var G__24668 = c__7584__auto__;
var G__24669 = cljs.core.count.call(null,c__7584__auto__);
var G__24670 = (0);
seq__24645 = G__24667;
chunk__24646 = G__24668;
count__24647 = G__24669;
i__24648 = G__24670;
continue;
} else {
var vec__24655 = cljs.core.first.call(null,seq__24645__$1);
var client_id = cljs.core.nth.call(null,vec__24655,(0),null);
var vec__24658 = cljs.core.nth.call(null,vec__24655,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__24658,(0),null);
var _udt = cljs.core.nth.call(null,vec__24658,(1),null);
var temp__4657__auto___24671__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___24671__$1)){
var sch_24672 = temp__4657__auto___24671__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_24672,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__24673 = cljs.core.next.call(null,seq__24645__$1);
var G__24674 = null;
var G__24675 = (0);
var G__24676 = (0);
seq__24645 = G__24673;
chunk__24646 = G__24674;
count__24647 = G__24675;
i__24648 = G__24676;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",700,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,823976591);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__19201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_24807){
var state_val_24808 = (state_24807[(1)]);
if((state_val_24808 === (7))){
var inst_24762 = (state_24807[(7)]);
var inst_24763 = (state_24807[(8)]);
var inst_24769 = (state_24807[(9)]);
var inst_24779 = (function (){var n = inst_24762;
var client_ids_satisfied = inst_24763;
var _QMARK_pulled = inst_24769;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_24762,inst_24763,inst_24769,state_val_24808,c__19201__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__24778){
var vec__24809 = p__24778;
var _QMARK_sch = cljs.core.nth.call(null,vec__24809,(0),null);
var _udt = cljs.core.nth.call(null,vec__24809,(1),null);
var sent_QMARK_ = (function (){var temp__4657__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto__)){
var sch = temp__4657__auto__;
return taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_sch,cljs.core.not.call(null,new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.call(null,s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_24762,inst_24763,inst_24769,state_val_24808,c__19201__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_24780 = cljs.core.PersistentHashSet.EMPTY;
var inst_24781 = cljs.core.reduce_kv.call(null,inst_24779,inst_24780,inst_24769);
var state_24807__$1 = state_24807;
var statearr_24812_24845 = state_24807__$1;
(statearr_24812_24845[(2)] = inst_24781);

(statearr_24812_24845[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (1))){
var inst_24761 = cljs.core.PersistentHashSet.EMPTY;
var inst_24762 = (0);
var inst_24763 = inst_24761;
var state_24807__$1 = (function (){var statearr_24813 = state_24807;
(statearr_24813[(7)] = inst_24762);

(statearr_24813[(8)] = inst_24763);

return statearr_24813;
})();
var statearr_24814_24846 = state_24807__$1;
(statearr_24814_24846[(2)] = null);

(statearr_24814_24846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (4))){
var state_24807__$1 = state_24807;
var statearr_24815_24847 = state_24807__$1;
(statearr_24815_24847[(2)] = true);

(statearr_24815_24847[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (15))){
var inst_24800 = (state_24807[(2)]);
var state_24807__$1 = state_24807;
var statearr_24816_24848 = state_24807__$1;
(statearr_24816_24848[(2)] = inst_24800);

(statearr_24816_24848[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (13))){
var inst_24786 = (state_24807[(10)]);
var inst_24791 = cljs.core.rand_int.call(null,inst_24786);
var inst_24792 = (inst_24786 + inst_24791);
var inst_24793 = cljs.core.async.timeout.call(null,inst_24792);
var state_24807__$1 = state_24807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24807__$1,(16),inst_24793);
} else {
if((state_val_24808 === (6))){
var inst_24769 = (state_24807[(9)]);
var inst_24776 = (state_24807[(2)]);
var state_24807__$1 = (function (){var statearr_24817 = state_24807;
(statearr_24817[(11)] = inst_24776);

return statearr_24817;
})();
if(cljs.core.truth_(inst_24769)){
var statearr_24818_24849 = state_24807__$1;
(statearr_24818_24849[(1)] = (7));

} else {
var statearr_24819_24850 = state_24807__$1;
(statearr_24819_24850[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (3))){
var inst_24805 = (state_24807[(2)]);
var state_24807__$1 = state_24807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24807__$1,inst_24805);
} else {
if((state_val_24808 === (12))){
var inst_24803 = (state_24807[(2)]);
var state_24807__$1 = state_24807;
var statearr_24820_24851 = state_24807__$1;
(statearr_24820_24851[(2)] = inst_24803);

(statearr_24820_24851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (2))){
var inst_24762 = (state_24807[(7)]);
var inst_24763 = (state_24807[(8)]);
var inst_24769 = (state_24807[(9)]);
var inst_24765 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24766 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_24767 = (new cljs.core.PersistentVector(null,2,(5),inst_24765,inst_24766,null));
var inst_24768 = (function (){var n = inst_24762;
var client_ids_satisfied = inst_24763;
return ((function (n,client_ids_satisfied,inst_24762,inst_24763,inst_24769,inst_24765,inst_24766,inst_24767,state_val_24808,c__19201__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_24762,inst_24763,inst_24769,inst_24765,inst_24766,inst_24767,state_val_24808,c__19201__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__24821 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__24821,(0),null);
var udt = cljs.core.nth.call(null,vec__24821,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_24762,inst_24763,inst_24769,inst_24765,inst_24766,inst_24767,state_val_24808,c__19201__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_24762,inst_24763,inst_24769,inst_24765,inst_24766,inst_24767,state_val_24808,c__19201__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_24769__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_24767,inst_24768);
var inst_24770 = (function (){var n = inst_24762;
var client_ids_satisfied = inst_24763;
var _QMARK_pulled = inst_24769__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_24762,inst_24763,inst_24769,inst_24765,inst_24766,inst_24767,inst_24768,inst_24769__$1,state_val_24808,c__19201__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__6773__auto__ = (x == null);
if(or__6773__auto__){
return or__6773__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_24762,inst_24763,inst_24769,inst_24765,inst_24766,inst_24767,inst_24768,inst_24769__$1,state_val_24808,c__19201__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_24771 = inst_24770.call(null,inst_24769__$1);
var state_24807__$1 = (function (){var statearr_24824 = state_24807;
(statearr_24824[(9)] = inst_24769__$1);

return statearr_24824;
})();
if(cljs.core.truth_(inst_24771)){
var statearr_24825_24852 = state_24807__$1;
(statearr_24825_24852[(1)] = (4));

} else {
var statearr_24826_24853 = state_24807__$1;
(statearr_24826_24853[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (11))){
var state_24807__$1 = state_24807;
var statearr_24827_24854 = state_24807__$1;
(statearr_24827_24854[(2)] = null);

(statearr_24827_24854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (9))){
var inst_24762 = (state_24807[(7)]);
var inst_24763 = (state_24807[(8)]);
var inst_24786 = (state_24807[(10)]);
var inst_24784 = (state_24807[(2)]);
var inst_24785 = cljs.core.into.call(null,inst_24763,inst_24784);
var inst_24786__$1 = cljs.core.get.call(null,ms_backoffs,inst_24762);
var state_24807__$1 = (function (){var statearr_24828 = state_24807;
(statearr_24828[(12)] = inst_24785);

(statearr_24828[(10)] = inst_24786__$1);

return statearr_24828;
})();
if(cljs.core.truth_(inst_24786__$1)){
var statearr_24829_24855 = state_24807__$1;
(statearr_24829_24855[(1)] = (10));

} else {
var statearr_24830_24856 = state_24807__$1;
(statearr_24830_24856[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (5))){
var inst_24769 = (state_24807[(9)]);
var inst_24774 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_24769,null,null);
var state_24807__$1 = state_24807;
var statearr_24831_24857 = state_24807__$1;
(statearr_24831_24857[(2)] = inst_24774);

(statearr_24831_24857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (14))){
var state_24807__$1 = state_24807;
var statearr_24832_24858 = state_24807__$1;
(statearr_24832_24858[(2)] = null);

(statearr_24832_24858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (16))){
var inst_24762 = (state_24807[(7)]);
var inst_24785 = (state_24807[(12)]);
var inst_24795 = (state_24807[(2)]);
var inst_24796 = (inst_24762 + (1));
var inst_24762__$1 = inst_24796;
var inst_24763 = inst_24785;
var state_24807__$1 = (function (){var statearr_24833 = state_24807;
(statearr_24833[(7)] = inst_24762__$1);

(statearr_24833[(8)] = inst_24763);

(statearr_24833[(13)] = inst_24795);

return statearr_24833;
})();
var statearr_24834_24859 = state_24807__$1;
(statearr_24834_24859[(2)] = null);

(statearr_24834_24859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (10))){
var inst_24785 = (state_24807[(12)]);
var inst_24788 = cljs.core.complement.call(null,inst_24785);
var inst_24789 = taoensso.encore.rsome.call(null,inst_24788,client_ids_unsatisfied);
var state_24807__$1 = state_24807;
if(cljs.core.truth_(inst_24789)){
var statearr_24835_24860 = state_24807__$1;
(statearr_24835_24860[(1)] = (13));

} else {
var statearr_24836_24861 = state_24807__$1;
(statearr_24836_24861[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (8))){
var state_24807__$1 = state_24807;
var statearr_24837_24862 = state_24807__$1;
(statearr_24837_24862[(2)] = null);

(statearr_24837_24862[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19201__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__19136__auto__,c__19201__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__19137__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__19137__auto____0 = (function (){
var statearr_24841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24841[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__19137__auto__);

(statearr_24841[(1)] = (1));

return statearr_24841;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__19137__auto____1 = (function (state_24807){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_24807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e24842){if((e24842 instanceof Object)){
var ex__19140__auto__ = e24842;
var statearr_24843_24863 = state_24807;
(statearr_24843_24863[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24864 = state_24807;
state_24807 = G__24864;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__19137__auto__ = function(state_24807){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__19137__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__19137__auto____1.call(this,state_24807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__19137__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__19137__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__19203__auto__ = (function (){var statearr_24844 = f__19202__auto__.call(null);
(statearr_24844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto__);

return statearr_24844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__19201__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__7436__auto__ = (((chsk == null))?null:chsk);
var m__7437__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,chsk);
} else {
var m__7437__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__7436__auto__ = (((chsk == null))?null:chsk);
var m__7437__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,chsk,reason);
} else {
var m__7437__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,chsk,reason);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__7436__auto__ = (((chsk == null))?null:chsk);
var m__7437__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,chsk);
} else {
var m__7437__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__7436__auto__ = (((chsk == null))?null:chsk);
var m__7437__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,chsk,ev,opts);
} else {
var m__7437__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_.call(null,chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_.call(null,chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args24865 = [];
var len__7848__auto___24868 = arguments.length;
var i__7849__auto___24869 = (0);
while(true){
if((i__7849__auto___24869 < len__7848__auto___24868)){
args24865.push((arguments[i__7849__auto___24869]));

var G__24870 = (i__7849__auto___24869 + (1));
i__7849__auto___24869 = G__24870;
continue;
} else {
}
break;
}

var G__24867 = args24865.length;
switch (G__24867) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24865.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",777,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-801667611);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4279856727947939544.clj",782,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,2051799663);

if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nat_int_QMARK_.call(null,_QMARK_timeout_ms))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb requires a timeout; timeout-ms should be a +ive integer: "),cljs.core.str(_QMARK_timeout_ms)].join('')),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))")].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb should be nil, an ifn, or a channel: "),cljs.core.str(cljs.core.type.call(null,_QMARK_cb))].join('')),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4657__auto__))
);
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__24875 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__24875,(0),null);
var new_state = cljs.core.nth.call(null,vec__24875,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_24882 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24880){if((e24880 instanceof Error)){
var e = e24880;
return e;
} else {
throw e24880;

}
}})();
if((e_24882 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(map? state)",state,e_24882,null);
}

var e_24883 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24881){if((e24881 instanceof Error)){
var e = e24881;
return e;
} else {
throw e24881;

}
}})();
if((e_24883 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_24883,null);
}

if(cljs.core.truth_((function (){var or__6773__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
return cljs.core.not_EQ_.call(null,reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var e_24892 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24888){if((e24888 instanceof Error)){
var e = e24888;
return e;
} else {
throw e24888;

}
}})();
if((e_24892 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_24892,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__24889 = ev;
var ev_id = cljs.core.nth.call(null,vec__24889,(0),null);
var _ = cljs.core.nth.call(null,vec__24889,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__24889,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.as_qname.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__24889,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",862,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,1084750280);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",clj,null,null));
var seq__24903 = cljs.core.seq.call(null,buffered_evs);
var chunk__24904 = null;
var count__24905 = (0);
var i__24906 = (0);
while(true){
if((i__24906 < count__24905)){
var ev = cljs.core._nth.call(null,chunk__24904,i__24906);
taoensso.sente.assert_event.call(null,ev);

var vec__24907_24913 = ev;
var id_24914 = cljs.core.nth.call(null,vec__24907_24913,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_24914),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__24915 = seq__24903;
var G__24916 = chunk__24904;
var G__24917 = count__24905;
var G__24918 = (i__24906 + (1));
seq__24903 = G__24915;
chunk__24904 = G__24916;
count__24905 = G__24917;
i__24906 = G__24918;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24903);
if(temp__4657__auto__){
var seq__24903__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24903__$1)){
var c__7584__auto__ = cljs.core.chunk_first.call(null,seq__24903__$1);
var G__24919 = cljs.core.chunk_rest.call(null,seq__24903__$1);
var G__24920 = c__7584__auto__;
var G__24921 = cljs.core.count.call(null,c__7584__auto__);
var G__24922 = (0);
seq__24903 = G__24919;
chunk__24904 = G__24920;
count__24905 = G__24921;
i__24906 = G__24922;
continue;
} else {
var ev = cljs.core.first.call(null,seq__24903__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__24910_24923 = ev;
var id_24924 = cljs.core.nth.call(null,vec__24910_24923,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_24924),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__24925 = cljs.core.next.call(null,seq__24903__$1);
var G__24926 = null;
var G__24927 = (0);
var G__24928 = (0);
seq__24903 = G__24925;
chunk__24904 = G__24926;
count__24905 = G__24927;
i__24906 = G__24928;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__6761__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__6761__auto__){
var vec__24938 = x;
var x1 = cljs.core.nth.call(null,vec__24938,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__6761__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_24962 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24952){if((e24952 instanceof Error)){
var e = e24952;
return e;
} else {
throw e24952;

}
}})();
if((e_24962 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_24962,null);
}

var e_24963 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24953){if((e24953 instanceof Error)){
var e = e24953;
return e;
} else {
throw e24953;

}
}})();
if((e_24963 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(handshake? clj)",clj,e_24963,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",879,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,1121888961);

var vec__24954 = clj;
var _ = cljs.core.nth.call(null,vec__24954,(0),null);
var vec__24957 = cljs.core.nth.call(null,vec__24954,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__24957,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__24957,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__24957,(2),null);
var map__24960 = chsk;
var map__24960__$1 = ((((!((map__24960 == null)))?((((map__24960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24960):map__24960);
var chs = cljs.core.get.call(null,map__24960__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__24960__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4279856727947939544.clj",898,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__24954,_,vec__24957,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__24960,map__24960__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__24954,_,vec__24957,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__24960,map__24960__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,-599311094);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__24954,_,vec__24957,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__24960,map__24960__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__24941_SHARP_){
return cljs.core.merge.call(null,p1__24941_SHARP_,new_state);
});})(vec__24954,_,vec__24957,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__24960,map__24960__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if(cljs.core.truth_((function (){var and__6761__auto__ = taoensso.sente.node_target_QMARK_;
if(cljs.core.truth_(and__6761__auto__)){
return typeof require !== 'undefined';
} else {
return and__6761__auto__;
}
})())){
try{return require("websocket");
}catch (e24964){var e = e24964;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7395__auto__,k__7396__auto__){
var self__ = this;
var this__7395__auto____$1 = this;
return cljs.core._lookup.call(null,this__7395__auto____$1,k__7396__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7397__auto__,k24971,else__7398__auto__){
var self__ = this;
var this__7397__auto____$1 = this;
var G__24973 = (((k24971 instanceof cljs.core.Keyword))?k24971.fqn:null);
switch (G__24973) {
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24971,else__7398__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7409__auto__,writer__7410__auto__,opts__7411__auto__){
var self__ = this;
var this__7409__auto____$1 = this;
var pr_pair__7412__auto__ = ((function (this__7409__auto____$1){
return (function (keyval__7413__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7410__auto__,cljs.core.pr_writer,""," ","",opts__7411__auto__,keyval__7413__auto__);
});})(this__7409__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7410__auto__,pr_pair__7412__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__7411__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24970){
var self__ = this;
var G__24970__$1 = this;
return (new cljs.core.RecordIter((0),G__24970__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7393__auto__){
var self__ = this;
var this__7393__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7389__auto__){
var self__ = this;
var this__7389__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7399__auto__){
var self__ = this;
var this__7399__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7390__auto__){
var self__ = this;
var this__7390__auto____$1 = this;
var h__7208__auto__ = self__.__hash;
if(!((h__7208__auto__ == null))){
return h__7208__auto__;
} else {
var h__7208__auto____$1 = cljs.core.hash_imap.call(null,this__7390__auto____$1);
self__.__hash = h__7208__auto____$1;

return h__7208__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7391__auto__,other__7392__auto__){
var self__ = this;
var this__7391__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6761__auto__ = other__7392__auto__;
if(cljs.core.truth_(and__6761__auto__)){
var and__6761__auto____$1 = (this__7391__auto____$1.constructor === other__7392__auto__.constructor);
if(and__6761__auto____$1){
return cljs.core.equiv_map.call(null,this__7391__auto____$1,other__7392__auto__);
} else {
return and__6761__auto____$1;
}
} else {
return and__6761__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7404__auto__,k__7405__auto__){
var self__ = this;
var this__7404__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__7405__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7404__auto____$1),self__.__meta),k__7405__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7405__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7402__auto__,k__7403__auto__,G__24970){
var self__ = this;
var this__7402__auto____$1 = this;
var pred__24974 = cljs.core.keyword_identical_QMARK_;
var expr__24975 = k__7403__auto__;
if(cljs.core.truth_(pred__24974.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__24975))){
return (new taoensso.sente.ChWebSocket(G__24970,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24974.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__24975))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__24970,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24974.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__24975))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__24970,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24974.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__24975))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__24970,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24974.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__24975))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__24970,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24974.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__24975))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__24970,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24974.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__24975))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__24970,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24974.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__24975))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__24970,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24974.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__24975))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__24970,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24974.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__24975))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__24970,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24974.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__24975))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__24970,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24974.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__24975))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__24970,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24974.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__24975))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__24970,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24974.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__24975))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__24970,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7403__auto__,G__24970),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7407__auto__){
var self__ = this;
var this__7407__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7394__auto__,G__24970){
var self__ = this;
var this__7394__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__24970,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7400__auto__,entry__7401__auto__){
var self__ = this;
var this__7400__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7401__auto__)){
return cljs.core._assoc.call(null,this__7400__auto____$1,cljs.core._nth.call(null,entry__7401__auto__,(0)),cljs.core._nth.call(null,entry__7401__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7400__auto____$1,entry__7401__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__24965_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__24965_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__24977 = opts;
var map__24977__$1 = ((((!((map__24977 == null)))?((((map__24977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24977):map__24977);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__24977__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__24977__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__24977__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___25068 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___25068)){
var cb_uuid_25069 = temp__4657__auto___25068;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_25069], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24979){if((e24979 instanceof Error)){
var e = e24979;
return e;
} else {
throw e24979;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___25070__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___25070__$1)){
var timeout_ms_25071 = temp__4657__auto___25070__$1;
var c__19201__auto___25072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___25072,timeout_ms_25071,temp__4657__auto___25070__$1,cb_uuid_25069,temp__4657__auto___25068,_QMARK_cb_uuid,ppstr,map__24977,map__24977__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___25072,timeout_ms_25071,temp__4657__auto___25070__$1,cb_uuid_25069,temp__4657__auto___25068,_QMARK_cb_uuid,ppstr,map__24977,map__24977__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_24990){
var state_val_24991 = (state_24990[(1)]);
if((state_val_24991 === (1))){
var inst_24980 = cljs.core.async.timeout.call(null,timeout_ms_25071);
var state_24990__$1 = state_24990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24990__$1,(2),inst_24980);
} else {
if((state_val_24991 === (2))){
var inst_24983 = (state_24990[(7)]);
var inst_24982 = (state_24990[(2)]);
var inst_24983__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_24990__$1 = (function (){var statearr_24992 = state_24990;
(statearr_24992[(8)] = inst_24982);

(statearr_24992[(7)] = inst_24983__$1);

return statearr_24992;
})();
if(cljs.core.truth_(inst_24983__$1)){
var statearr_24993_25073 = state_24990__$1;
(statearr_24993_25073[(1)] = (3));

} else {
var statearr_24994_25074 = state_24990__$1;
(statearr_24994_25074[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (3))){
var inst_24983 = (state_24990[(7)]);
var inst_24985 = inst_24983.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_24990__$1 = state_24990;
var statearr_24995_25075 = state_24990__$1;
(statearr_24995_25075[(2)] = inst_24985);

(statearr_24995_25075[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (4))){
var state_24990__$1 = state_24990;
var statearr_24996_25076 = state_24990__$1;
(statearr_24996_25076[(2)] = null);

(statearr_24996_25076[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (5))){
var inst_24988 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24990__$1,inst_24988);
} else {
return null;
}
}
}
}
}
});})(c__19201__auto___25072,timeout_ms_25071,temp__4657__auto___25070__$1,cb_uuid_25069,temp__4657__auto___25068,_QMARK_cb_uuid,ppstr,map__24977,map__24977__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__19136__auto__,c__19201__auto___25072,timeout_ms_25071,temp__4657__auto___25070__$1,cb_uuid_25069,temp__4657__auto___25068,_QMARK_cb_uuid,ppstr,map__24977,map__24977__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__19137__auto__ = null;
var taoensso$sente$state_machine__19137__auto____0 = (function (){
var statearr_25000 = [null,null,null,null,null,null,null,null,null];
(statearr_25000[(0)] = taoensso$sente$state_machine__19137__auto__);

(statearr_25000[(1)] = (1));

return statearr_25000;
});
var taoensso$sente$state_machine__19137__auto____1 = (function (state_24990){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_24990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e25001){if((e25001 instanceof Object)){
var ex__19140__auto__ = e25001;
var statearr_25002_25077 = state_24990;
(statearr_25002_25077[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25078 = state_24990;
state_24990 = G__25078;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
taoensso$sente$state_machine__19137__auto__ = function(state_24990){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__19137__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__19137__auto____1.call(this,state_24990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__19137__auto____0;
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__19137__auto____1;
return taoensso$sente$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___25072,timeout_ms_25071,temp__4657__auto___25070__$1,cb_uuid_25069,temp__4657__auto___25068,_QMARK_cb_uuid,ppstr,map__24977,map__24977__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__19203__auto__ = (function (){var statearr_25003 = f__19202__auto__.call(null);
(statearr_25003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___25072);

return statearr_25003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___25072,timeout_ms_25071,temp__4657__auto___25070__$1,cb_uuid_25069,temp__4657__auto___25068,_QMARK_cb_uuid,ppstr,map__24977,map__24977__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e25004){var e = e25004;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4279856727947939544.clj",980,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__24977,map__24977__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__24977,map__24977__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,328590939);

var temp__4657__auto___25079 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___25079)){
var cb_uuid_25080 = temp__4657__auto___25079;
var cb_fn_STAR__25081 = (function (){var or__6773__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_25080);
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25005){if((e25005 instanceof Error)){
var e__$1 = e25005;
return e__$1;
} else {
throw e25005;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__25081.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__6773__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
var or__6773__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__6773__auto____$1)){
return or__6773__auto____$1;
} else {
return taoensso.encore.oget.call(null,cljs.core.deref.call(null,taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,WebSocket,temp__4657__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4279856727947939544.clj",1005,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,472835268);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__24966_SHARP_){
return cljs.core.assoc.call(null,p1__24966_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e25012){var e = e25012;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4279856727947939544.clj",1019,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1031847439);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__25013 = _QMARK_socket;
(G__25013["onerror"] = ((function (G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4279856727947939544.clj",1029,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e25014){var _ = e25014;
return ws_ev;
}})()], null);
});})(G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-941662692);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__24967_SHARP_){
return cljs.core.assoc.call(null,p1__24967_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
});})(G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__25013["onmessage"] = ((function (G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__25015 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__25015,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__25015,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__6773__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
var or__6773__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__6773__auto____$1)){
return or__6773__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4279856727947939544.clj",1065,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__6773__auto____$1,or__6773__auto__,ppstr,vec__25015,clj,_QMARK_cb_uuid,G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__6773__auto____$1,or__6773__auto__,ppstr,vec__25015,clj,_QMARK_cb_uuid,G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-2071844550);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__25013["onclose"] = ((function (G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init4279856727947939544.clj",1087,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-253136830);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__24968_SHARP_){
return cljs.core.assoc.call(null,p1__24968_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__24969_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__24969_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__25013,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__25013;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var temp__4657__auto___25082__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto___25082__$1)){
var ms_25083 = temp__4657__auto___25082__$1;
var c__19201__auto___25084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___25084,ms_25083,temp__4657__auto___25082__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___25084,ms_25083,temp__4657__auto___25082__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (state_25045){
var state_val_25046 = (state_25045[(1)]);
if((state_val_25046 === (7))){
var inst_25041 = (state_25045[(2)]);
var state_25045__$1 = state_25045;
var statearr_25047_25085 = state_25045__$1;
(statearr_25047_25085[(2)] = inst_25041);

(statearr_25047_25085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (1))){
var state_25045__$1 = state_25045;
var statearr_25048_25086 = state_25045__$1;
(statearr_25048_25086[(2)] = null);

(statearr_25048_25086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (4))){
var inst_25022 = (state_25045[(2)]);
var inst_25023 = have_handle_QMARK_.call(null);
var state_25045__$1 = (function (){var statearr_25049 = state_25045;
(statearr_25049[(7)] = inst_25022);

return statearr_25049;
})();
if(cljs.core.truth_(inst_25023)){
var statearr_25050_25087 = state_25045__$1;
(statearr_25050_25087[(1)] = (5));

} else {
var statearr_25051_25088 = state_25045__$1;
(statearr_25051_25088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (6))){
var state_25045__$1 = state_25045;
var statearr_25052_25089 = state_25045__$1;
(statearr_25052_25089[(2)] = null);

(statearr_25052_25089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (3))){
var inst_25043 = (state_25045[(2)]);
var state_25045__$1 = state_25045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25045__$1,inst_25043);
} else {
if((state_val_25046 === (2))){
var inst_25019 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_25020 = cljs.core.async.timeout.call(null,ms_25083);
var state_25045__$1 = (function (){var statearr_25053 = state_25045;
(statearr_25053[(8)] = inst_25019);

return statearr_25053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25045__$1,(4),inst_25020);
} else {
if((state_val_25046 === (9))){
var state_25045__$1 = state_25045;
var statearr_25054_25090 = state_25045__$1;
(statearr_25054_25090[(2)] = null);

(statearr_25054_25090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (5))){
var inst_25019 = (state_25045[(8)]);
var inst_25025 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_25026 = cljs.core._EQ_.call(null,inst_25019,inst_25025);
var state_25045__$1 = state_25045;
if(inst_25026){
var statearr_25055_25091 = state_25045__$1;
(statearr_25055_25091[(1)] = (8));

} else {
var statearr_25056_25092 = state_25045__$1;
(statearr_25056_25092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (10))){
var inst_25037 = (state_25045[(2)]);
var state_25045__$1 = (function (){var statearr_25057 = state_25045;
(statearr_25057[(9)] = inst_25037);

return statearr_25057;
})();
var statearr_25058_25093 = state_25045__$1;
(statearr_25058_25093[(2)] = null);

(statearr_25058_25093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (8))){
var inst_25028 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25029 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_25030 = (new cljs.core.PersistentVector(null,1,(5),inst_25028,inst_25029,null));
var inst_25031 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_25032 = [true];
var inst_25033 = cljs.core.PersistentHashMap.fromArrays(inst_25031,inst_25032);
var inst_25034 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_25030,inst_25033);
var state_25045__$1 = state_25045;
var statearr_25059_25094 = state_25045__$1;
(statearr_25059_25094[(2)] = inst_25034);

(statearr_25059_25094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__19201__auto___25084,ms_25083,temp__4657__auto___25082__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
;
return ((function (switch__19136__auto__,c__19201__auto___25084,ms_25083,temp__4657__auto___25082__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__19137__auto__ = null;
var taoensso$sente$state_machine__19137__auto____0 = (function (){
var statearr_25063 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25063[(0)] = taoensso$sente$state_machine__19137__auto__);

(statearr_25063[(1)] = (1));

return statearr_25063;
});
var taoensso$sente$state_machine__19137__auto____1 = (function (state_25045){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_25045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e25064){if((e25064 instanceof Object)){
var ex__19140__auto__ = e25064;
var statearr_25065_25095 = state_25045;
(statearr_25065_25095[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25096 = state_25045;
state_25045 = G__25096;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
taoensso$sente$state_machine__19137__auto__ = function(state_25045){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__19137__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__19137__auto____1.call(this,state_25045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__19137__auto____0;
taoensso$sente$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__19137__auto____1;
return taoensso$sente$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___25084,ms_25083,temp__4657__auto___25082__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
})();
var state__19203__auto__ = (function (){var statearr_25066 = f__19202__auto__.call(null);
(statearr_25066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___25084);

return statearr_25066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___25084,ms_25083,temp__4657__auto___25082__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
);

} else {
}

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__7429__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__7429__auto__,writer__7430__auto__){
return cljs.core._write.call(null,writer__7430__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__24972){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__24972),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__24972),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__24972),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__24972),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__24972),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__24972),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__24972),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__24972),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__24972),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__24972),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__24972),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__24972),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__24972),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__24972),null,cljs.core.dissoc.call(null,G__24972,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.call(null,null)], null),opts));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7395__auto__,k__7396__auto__){
var self__ = this;
var this__7395__auto____$1 = this;
return cljs.core._lookup.call(null,this__7395__auto____$1,k__7396__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7397__auto__,k25104,else__7398__auto__){
var self__ = this;
var this__7397__auto____$1 = this;
var G__25106 = (((k25104 instanceof cljs.core.Keyword))?k25104.fqn:null);
switch (G__25106) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25104,else__7398__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7409__auto__,writer__7410__auto__,opts__7411__auto__){
var self__ = this;
var this__7409__auto____$1 = this;
var pr_pair__7412__auto__ = ((function (this__7409__auto____$1){
return (function (keyval__7413__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7410__auto__,cljs.core.pr_writer,""," ","",opts__7411__auto__,keyval__7413__auto__);
});})(this__7409__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7410__auto__,pr_pair__7412__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__7411__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25103){
var self__ = this;
var G__25103__$1 = this;
return (new cljs.core.RecordIter((0),G__25103__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7393__auto__){
var self__ = this;
var this__7393__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7389__auto__){
var self__ = this;
var this__7389__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7399__auto__){
var self__ = this;
var this__7399__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7390__auto__){
var self__ = this;
var this__7390__auto____$1 = this;
var h__7208__auto__ = self__.__hash;
if(!((h__7208__auto__ == null))){
return h__7208__auto__;
} else {
var h__7208__auto____$1 = cljs.core.hash_imap.call(null,this__7390__auto____$1);
self__.__hash = h__7208__auto____$1;

return h__7208__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7391__auto__,other__7392__auto__){
var self__ = this;
var this__7391__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6761__auto__ = other__7392__auto__;
if(cljs.core.truth_(and__6761__auto__)){
var and__6761__auto____$1 = (this__7391__auto____$1.constructor === other__7392__auto__.constructor);
if(and__6761__auto____$1){
return cljs.core.equiv_map.call(null,this__7391__auto____$1,other__7392__auto__);
} else {
return and__6761__auto____$1;
}
} else {
return and__6761__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7404__auto__,k__7405__auto__){
var self__ = this;
var this__7404__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__7405__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7404__auto____$1),self__.__meta),k__7405__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7405__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7402__auto__,k__7403__auto__,G__25103){
var self__ = this;
var this__7402__auto____$1 = this;
var pred__25107 = cljs.core.keyword_identical_QMARK_;
var expr__25108 = k__7403__auto__;
if(cljs.core.truth_(pred__25107.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__25108))){
return (new taoensso.sente.ChAjaxSocket(G__25103,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25107.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__25108))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__25103,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25107.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__25108))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__25103,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25107.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__25108))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__25103,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25107.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__25108))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__25103,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25107.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__25108))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__25103,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25107.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__25108))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__25103,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25107.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__25108))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__25103,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25107.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__25108))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__25103,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25107.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__25108))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__25103,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25107.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__25108))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__25103,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7403__auto__,G__25103),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7407__auto__){
var self__ = this;
var this__7407__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7394__auto__,G__25103){
var self__ = this;
var this__7394__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__25103,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7400__auto__,entry__7401__auto__){
var self__ = this;
var this__7400__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7401__auto__)){
return cljs.core._assoc.call(null,this__7400__auto____$1,cljs.core._nth.call(null,entry__7401__auto__,(0)),cljs.core._nth.call(null,entry__7401__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7400__auto____$1,entry__7401__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__25097_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__25097_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__25110 = opts;
var map__25110__$1 = ((((!((map__25110 == null)))?((((map__25110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25110):map__25110);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__25110__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__25110__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__25110__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__6773__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
var or__6773__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__6773__auto____$1)){
return or__6773__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__25110,map__25110__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__25112){
var map__25118 = p__25112;
var map__25118__$1 = ((((!((map__25118 == null)))?((((map__25118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25118):map__25118);
var _QMARK_error = cljs.core.get.call(null,map__25118__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__25118__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__25118,map__25118__$1,_QMARK_error,_QMARK_content,csrf_token,map__25110,map__25110__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__25098_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__25098_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__25118,map__25118__$1,_QMARK_error,_QMARK_content,csrf_token,map__25110,map__25110__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__25120 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__25120,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__25120,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4279856727947939544.clj",1207,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__25120,resp_clj,___$1,map__25118,map__25118__$1,_QMARK_error,_QMARK_content,csrf_token,map__25110,map__25110__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__25120,resp_clj,___$1,map__25118,map__25118__$1,_QMARK_error,_QMARK_content,csrf_token,map__25110,map__25110__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,331948288);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__25120,resp_clj,___$1,map__25118,map__25118__$1,_QMARK_error,_QMARK_content,csrf_token,map__25110,map__25110__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__25099_SHARP_){
return cljs.core.assoc.call(null,p1__25099_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__25120,resp_clj,___$1,map__25118,map__25118__$1,_QMARK_error,_QMARK_content,csrf_token,map__25110,map__25110__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__25110,map__25110__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",1217,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,1191520302);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4279856727947939544.clj",1225,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-1974541709);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__25100_SHARP_){
return cljs.core.assoc.call(null,p1__25100_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__6773__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__25134){
var map__25140 = p__25134;
var map__25140__$1 = ((((!((map__25140 == null)))?((((map__25140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25140):map__25140);
var _QMARK_error = cljs.core.get.call(null,map__25140__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__25140__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__25140,map__25140__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__25101_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__25101_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__25140,map__25140__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__25142 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__25142,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__25142,clj,handshake_QMARK_,map__25140,map__25140__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__25102_SHARP_){
return cljs.core.assoc.call(null,p1__25102_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__25142,clj,handshake_QMARK_,map__25140,map__25140__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__6773__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
));
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__7429__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__7429__auto__,writer__7430__auto__){
return cljs.core._write.call(null,writer__7430__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__25105){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__25105),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__25105),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__25105),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__25105),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__25105),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__25105),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__25105),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__25105),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__25105),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__25105),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__25105),null,cljs.core.dissoc.call(null,G__25105,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null)], null),opts));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7395__auto__,k__7396__auto__){
var self__ = this;
var this__7395__auto____$1 = this;
return cljs.core._lookup.call(null,this__7395__auto____$1,k__7396__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7397__auto__,k25147,else__7398__auto__){
var self__ = this;
var this__7397__auto____$1 = this;
var G__25149 = (((k25147 instanceof cljs.core.Keyword))?k25147.fqn:null);
switch (G__25149) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25147,else__7398__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7409__auto__,writer__7410__auto__,opts__7411__auto__){
var self__ = this;
var this__7409__auto____$1 = this;
var pr_pair__7412__auto__ = ((function (this__7409__auto____$1){
return (function (keyval__7413__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7410__auto__,cljs.core.pr_writer,""," ","",opts__7411__auto__,keyval__7413__auto__);
});})(this__7409__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7410__auto__,pr_pair__7412__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__7411__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25146){
var self__ = this;
var G__25146__$1 = this;
return (new cljs.core.RecordIter((0),G__25146__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7393__auto__){
var self__ = this;
var this__7393__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7389__auto__){
var self__ = this;
var this__7389__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7399__auto__){
var self__ = this;
var this__7399__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7390__auto__){
var self__ = this;
var this__7390__auto____$1 = this;
var h__7208__auto__ = self__.__hash;
if(!((h__7208__auto__ == null))){
return h__7208__auto__;
} else {
var h__7208__auto____$1 = cljs.core.hash_imap.call(null,this__7390__auto____$1);
self__.__hash = h__7208__auto____$1;

return h__7208__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7391__auto__,other__7392__auto__){
var self__ = this;
var this__7391__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6761__auto__ = other__7392__auto__;
if(cljs.core.truth_(and__6761__auto__)){
var and__6761__auto____$1 = (this__7391__auto____$1.constructor === other__7392__auto__.constructor);
if(and__6761__auto____$1){
return cljs.core.equiv_map.call(null,this__7391__auto____$1,other__7392__auto__);
} else {
return and__6761__auto____$1;
}
} else {
return and__6761__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7404__auto__,k__7405__auto__){
var self__ = this;
var this__7404__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__7405__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7404__auto____$1),self__.__meta),k__7405__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7405__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7402__auto__,k__7403__auto__,G__25146){
var self__ = this;
var this__7402__auto____$1 = this;
var pred__25150 = cljs.core.keyword_identical_QMARK_;
var expr__25151 = k__7403__auto__;
if(cljs.core.truth_(pred__25150.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__25151))){
return (new taoensso.sente.ChAutoSocket(G__25146,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25150.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__25151))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__25146,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25150.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__25151))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__25146,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25150.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__25151))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__25146,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7403__auto__,G__25146),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7407__auto__){
var self__ = this;
var this__7407__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7394__auto__,G__25146){
var self__ = this;
var this__7394__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__25146,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7400__auto__,entry__7401__auto__){
var self__ = this;
var this__7400__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7401__auto__)){
return cljs.core._assoc.call(null,this__7400__auto____$1,cljs.core._nth.call(null,entry__7401__auto__,(0)),cljs.core._nth.call(null,entry__7401__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7400__auto____$1,entry__7401__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
return taoensso.sente._chsk_disconnect_BANG_.call(null,impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__4655__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4655__auto__)){
var impl = temp__4655__auto__;
return taoensso.sente._chsk_send_BANG_.call(null,impl,ev,opts);
} else {
var map__25153 = opts;
var map__25153__$1 = ((((!((map__25153 == null)))?((((map__25153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25153):map__25153);
var _QMARK_cb = cljs.core.get.call(null,map__25153__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___25156 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___25156,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
var temp__4657__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ever_opened_QMARK__ = temp__4657__auto____$1;
if(cljs.core.truth_(cljs.core.deref.call(null,ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-error","last-error",1848699973).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___25156,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4279856727947939544.clj",1353,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___25156,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___25156,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-1051544077);

taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_.call(null,self__.impl_,ajax_conn_BANG_.call(null));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___25156,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__6773__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
return ajax_conn_BANG_.call(null);
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__7429__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__7429__auto__,writer__7430__auto__){
return cljs.core._write.call(null,writer__7430__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__25148){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__25148),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__25148),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__25148),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__25148),null,cljs.core.dissoc.call(null,G__25148,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__25161 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__25161) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if(((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null)),x);
});})(protocol__$1))
.call(null,protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25162){if((e25162 instanceof Error)){
var e = e25162;
return e;
} else {
throw e25162;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__25163 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25163) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__25164 = protocol__$2;
switch (G__25164) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(protocol__$2)].join('')));

}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$3),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,host,path))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__7855__auto__ = [];
var len__7848__auto___25185 = arguments.length;
var i__7849__auto___25186 = (0);
while(true){
if((i__7849__auto___25186 < len__7848__auto___25185)){
args__7855__auto__.push((arguments[i__7849__auto___25186]));

var G__25187 = (i__7849__auto___25186 + (1));
i__7849__auto___25186 = G__25187;
continue;
} else {
}
break;
}

var argseq__7856__auto__ = ((((1) < args__7855__auto__.length))?(new cljs.core.IndexedSeq(args__7855__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7856__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__25170){
var vec__25171 = p__25170;
var map__25174 = cljs.core.nth.call(null,vec__25171,(0),null);
var map__25174__$1 = ((((!((map__25174 == null)))?((((map__25174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25174):map__25174);
var opts = map__25174__$1;
var ajax_opts = cljs.core.get.call(null,map__25174__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__25174__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__25174__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__6773__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__25174__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__25174__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__25174__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__25174__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__25174__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__25174__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__25174__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__25174__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__25171,(1),null);
var e_25188 = (function (){try{if(((function (vec__25171,map__25174,map__25174__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__25171,map__25174,map__25174__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25176){if((e25176 instanceof Error)){
var e = e25176;
return e;
} else {
throw e25176;

}
}})();
if((e_25188 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_25188,null);
}

var e_25189 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25177){if((e25177 instanceof Error)){
var e = e25177;
return e;
} else {
throw e25177;

}
}})();
if((e_25189 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_25189,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4279856727947939544.clj",1418,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__25171,map__25174,map__25174__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__25171,map__25174,map__25174__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1679950879);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4279856727947939544.clj",1419,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__25171,map__25174,map__25174__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__25171,map__25174,map__25174__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-400096087);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__25178 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__6773__auto__ = path;
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__6773__auto__ = protocol;
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
var or__6773__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__6773__auto____$1)){
return or__6773__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__6773__auto__ = host;
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__25178,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__25178,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__25178,ws_url,ajax_url,vec__25171,map__25174,map__25174__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__25178,ws_url,ajax_url,vec__25171,map__25174,map__25174__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__25181 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25181) {
case "ws":
return taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket.call(null,auto_chsk_opts);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})());
var temp__4655__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__4655__auto__)){
var chsk = temp__4655__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__25178,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__25171,map__25174,map__25174__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__25182 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__25182,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__25182,(1),null);
var ev__$1 = vec__25182;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__25178,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__25171,map__25174,map__25174__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4279856727947939544.clj",1507,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,vec__25178,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__25171,map__25174,map__25174__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,vec__25178,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__25171,map__25174,map__25174__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,366012026);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq25168){
var G__25169 = cljs.core.first.call(null,seq25168);
var seq25168__$1 = cljs.core.next.call(null,seq25168);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25169,seq25168__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__25270 = opts;
var map__25270__$1 = ((((!((map__25270 == null)))?((((map__25270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25270):map__25270);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__25270__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__25270__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__25270__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__19201__auto___25349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___25349,map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___25349,map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_25316){
var state_val_25317 = (state_25316[(1)]);
if((state_val_25317 === (7))){
var inst_25312 = (state_25316[(2)]);
var state_25316__$1 = state_25316;
var statearr_25318_25350 = state_25316__$1;
(statearr_25318_25350[(2)] = inst_25312);

(statearr_25318_25350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25317 === (1))){
var state_25316__$1 = state_25316;
var statearr_25319_25351 = state_25316__$1;
(statearr_25319_25351[(2)] = null);

(statearr_25319_25351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25317 === (4))){
var inst_25280 = (state_25316[(7)]);
var inst_25282 = (state_25316[(8)]);
var inst_25283 = (state_25316[(9)]);
var inst_25280__$1 = (state_25316[(2)]);
var inst_25281 = cljs.core.nth.call(null,inst_25280__$1,(0),null);
var inst_25282__$1 = cljs.core.nth.call(null,inst_25280__$1,(1),null);
var inst_25283__$1 = cljs.core._EQ_.call(null,inst_25282__$1,ch_ctrl);
var state_25316__$1 = (function (){var statearr_25320 = state_25316;
(statearr_25320[(7)] = inst_25280__$1);

(statearr_25320[(8)] = inst_25282__$1);

(statearr_25320[(10)] = inst_25281);

(statearr_25320[(9)] = inst_25283__$1);

return statearr_25320;
})();
if(inst_25283__$1){
var statearr_25321_25352 = state_25316__$1;
(statearr_25321_25352[(1)] = (5));

} else {
var statearr_25322_25353 = state_25316__$1;
(statearr_25322_25353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25317 === (15))){
var inst_25281 = (state_25316[(10)]);
var state_25316__$1 = state_25316;
var statearr_25323_25354 = state_25316__$1;
(statearr_25323_25354[(2)] = inst_25281);

(statearr_25323_25354[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25317 === (13))){
var inst_25298 = (state_25316[(2)]);
var state_25316__$1 = state_25316;
var statearr_25324_25355 = state_25316__$1;
(statearr_25324_25355[(2)] = inst_25298);

(statearr_25324_25355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25317 === (6))){
var inst_25281 = (state_25316[(10)]);
var inst_25288 = (inst_25281 == null);
var inst_25289 = cljs.core.not.call(null,inst_25288);
var state_25316__$1 = state_25316;
if(inst_25289){
var statearr_25325_25356 = state_25316__$1;
(statearr_25325_25356[(1)] = (8));

} else {
var statearr_25326_25357 = state_25316__$1;
(statearr_25326_25357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25317 === (3))){
var inst_25314 = (state_25316[(2)]);
var state_25316__$1 = state_25316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25316__$1,inst_25314);
} else {
if((state_val_25317 === (12))){
var state_25316__$1 = state_25316;
var statearr_25327_25358 = state_25316__$1;
(statearr_25327_25358[(2)] = false);

(statearr_25327_25358[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25317 === (2))){
var inst_25276 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25277 = [ch_recv,ch_ctrl];
var inst_25278 = (new cljs.core.PersistentVector(null,2,(5),inst_25276,inst_25277,null));
var state_25316__$1 = state_25316;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25316__$1,(4),inst_25278);
} else {
if((state_val_25317 === (11))){
var state_25316__$1 = state_25316;
var statearr_25328_25359 = state_25316__$1;
(statearr_25328_25359[(2)] = true);

(statearr_25328_25359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25317 === (9))){
var state_25316__$1 = state_25316;
var statearr_25329_25360 = state_25316__$1;
(statearr_25329_25360[(2)] = false);

(statearr_25329_25360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25317 === (5))){
var state_25316__$1 = state_25316;
var statearr_25330_25361 = state_25316__$1;
(statearr_25330_25361[(2)] = null);

(statearr_25330_25361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25317 === (14))){
var inst_25281 = (state_25316[(10)]);
var inst_25303 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25281);
var state_25316__$1 = state_25316;
var statearr_25331_25362 = state_25316__$1;
(statearr_25331_25362[(2)] = inst_25303);

(statearr_25331_25362[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25317 === (16))){
var inst_25280 = (state_25316[(7)]);
var inst_25282 = (state_25316[(8)]);
var inst_25281 = (state_25316[(10)]);
var inst_25283 = (state_25316[(9)]);
var inst_25306 = (state_25316[(2)]);
var inst_25307 = cljs.core.get.call(null,inst_25306,new cljs.core.Keyword(null,"event","event",301435442));
var inst_25308 = (function (){var vec__25273 = inst_25280;
var v = inst_25281;
var p = inst_25282;
var stop_QMARK_ = inst_25283;
var map__25286 = inst_25306;
var event_msg = inst_25306;
var event = inst_25307;
return ((function (vec__25273,v,p,stop_QMARK_,map__25286,event_msg,event,inst_25280,inst_25282,inst_25281,inst_25283,inst_25306,inst_25307,state_val_25317,c__19201__auto___25349,map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4279856727947939544.clj",1534,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__25273,v,p,stop_QMARK_,map__25286,event_msg,event,inst_25280,inst_25282,inst_25281,inst_25283,inst_25306,inst_25307,state_val_25317,c__19201__auto___25349,map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__25273,v,p,stop_QMARK_,map__25286,event_msg,event,inst_25280,inst_25282,inst_25281,inst_25283,inst_25306,inst_25307,state_val_25317,c__19201__auto___25349,map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1338112060);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25334){if((e25334 instanceof Error)){
var e = e25334;
return e;
} else {
throw e25334;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25335){if((e25335 instanceof Error)){
var e = e25335;
return e;
} else {
throw e25335;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e25332){if((e25332 instanceof Error)){
var e1 = e25332;
try{var temp__4655__auto__ = error_handler;
if(cljs.core.truth_(temp__4655__auto__)){
var eh = temp__4655__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4279856727947939544.clj",1543,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,e1,vec__25273,v,p,stop_QMARK_,map__25286,event_msg,event,inst_25280,inst_25282,inst_25281,inst_25283,inst_25306,inst_25307,state_val_25317,c__19201__auto___25349,map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__4655__auto__,e1,vec__25273,v,p,stop_QMARK_,map__25286,event_msg,event,inst_25280,inst_25282,inst_25281,inst_25283,inst_25306,inst_25307,state_val_25317,c__19201__auto___25349,map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1380632289);
}
}catch (e25333){if((e25333 instanceof Error)){
var e2 = e25333;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4279856727947939544.clj",1544,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__25273,v,p,stop_QMARK_,map__25286,event_msg,event,inst_25280,inst_25282,inst_25281,inst_25283,inst_25306,inst_25307,state_val_25317,c__19201__auto___25349,map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__25273,v,p,stop_QMARK_,map__25286,event_msg,event,inst_25280,inst_25282,inst_25281,inst_25283,inst_25306,inst_25307,state_val_25317,c__19201__auto___25349,map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1353157619);
} else {
throw e25333;

}
}} else {
throw e25332;

}
}});
;})(vec__25273,v,p,stop_QMARK_,map__25286,event_msg,event,inst_25280,inst_25282,inst_25281,inst_25283,inst_25306,inst_25307,state_val_25317,c__19201__auto___25349,map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_25309 = execute1.call(null,inst_25308);
var state_25316__$1 = (function (){var statearr_25336 = state_25316;
(statearr_25336[(11)] = inst_25309);

return statearr_25336;
})();
var statearr_25337_25363 = state_25316__$1;
(statearr_25337_25363[(2)] = null);

(statearr_25337_25363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25317 === (10))){
var inst_25301 = (state_25316[(2)]);
var state_25316__$1 = state_25316;
if(cljs.core.truth_(inst_25301)){
var statearr_25338_25364 = state_25316__$1;
(statearr_25338_25364[(1)] = (14));

} else {
var statearr_25339_25365 = state_25316__$1;
(statearr_25339_25365[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25317 === (8))){
var inst_25281 = (state_25316[(10)]);
var inst_25291 = inst_25281.cljs$lang$protocol_mask$partition0$;
var inst_25292 = (inst_25291 & (64));
var inst_25293 = inst_25281.cljs$core$ISeq$;
var inst_25294 = (inst_25292) || (inst_25293);
var state_25316__$1 = state_25316;
if(cljs.core.truth_(inst_25294)){
var statearr_25340_25366 = state_25316__$1;
(statearr_25340_25366[(1)] = (11));

} else {
var statearr_25341_25367 = state_25316__$1;
(statearr_25341_25367[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19201__auto___25349,map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__19136__auto__,c__19201__auto___25349,map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__19137__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__19137__auto____0 = (function (){
var statearr_25345 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25345[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__19137__auto__);

(statearr_25345[(1)] = (1));

return statearr_25345;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__19137__auto____1 = (function (state_25316){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_25316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e25346){if((e25346 instanceof Object)){
var ex__19140__auto__ = e25346;
var statearr_25347_25368 = state_25316;
(statearr_25347_25368[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25369 = state_25316;
state_25316 = G__25369;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__19137__auto__ = function(state_25316){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__19137__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__19137__auto____1.call(this,state_25316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__19137__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__19137__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___25349,map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__19203__auto__ = (function (){var statearr_25348 = f__19202__auto__.call(null);
(statearr_25348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___25349);

return statearr_25348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___25349,map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__25270,map__25270__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__7855__auto__ = [];
var len__7848__auto___25379 = arguments.length;
var i__7849__auto___25380 = (0);
while(true){
if((i__7849__auto___25380 < len__7848__auto___25379)){
args__7855__auto__.push((arguments[i__7849__auto___25380]));

var G__25381 = (i__7849__auto___25380 + (1));
i__7849__auto___25380 = G__25381;
continue;
} else {
}
break;
}

var argseq__7856__auto__ = ((((2) < args__7855__auto__.length))?(new cljs.core.IndexedSeq(args__7855__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7856__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__25373){
var vec__25374 = p__25373;
var map__25377 = cljs.core.nth.call(null,vec__25374,(0),null);
var map__25377__$1 = ((((!((map__25377 == null)))?((((map__25377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25377):map__25377);
var opts = map__25377__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__25377__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__25377__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__25377__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq25370){
var G__25371 = cljs.core.first.call(null,seq25370);
var seq25370__$1 = cljs.core.next.call(null,seq25370);
var G__25372 = cljs.core.first.call(null,seq25370__$1);
var seq25370__$2 = cljs.core.next.call(null,seq25370__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25371,G__25372,seq25370__$2);
});

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__7855__auto__ = [];
var len__7848__auto___25391 = arguments.length;
var i__7849__auto___25392 = (0);
while(true){
if((i__7849__auto___25392 < len__7848__auto___25391)){
args__7855__auto__.push((arguments[i__7849__auto___25392]));

var G__25393 = (i__7849__auto___25392 + (1));
i__7849__auto___25392 = G__25393;
continue;
} else {
}
break;
}

var argseq__7856__auto__ = ((((2) < args__7855__auto__.length))?(new cljs.core.IndexedSeq(args__7855__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7856__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__25385){
var vec__25386 = p__25385;
var map__25389 = cljs.core.nth.call(null,vec__25386,(0),null);
var map__25389__$1 = ((((!((map__25389 == null)))?((((map__25389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25389):map__25389);
var opts = map__25389__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__25389__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__25389__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq25382){
var G__25383 = cljs.core.first.call(null,seq25382);
var seq25382__$1 = cljs.core.next.call(null,seq25382);
var G__25384 = cljs.core.first.call(null,seq25382__$1);
var seq25382__$2 = cljs.core.next.call(null,seq25382__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25383,G__25384,seq25382__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__25394,websocket_QMARK_){
var map__25397 = p__25394;
var map__25397__$1 = ((((!((map__25397 == null)))?((((map__25397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25397):map__25397);
var location = map__25397__$1;
var protocol = cljs.core.get.call(null,map__25397__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__25397__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__25397__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__6773__auto__ = path;
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map
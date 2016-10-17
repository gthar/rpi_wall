// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27217 = [];
var len__7848__auto___27223 = arguments.length;
var i__7849__auto___27224 = (0);
while(true){
if((i__7849__auto___27224 < len__7848__auto___27223)){
args27217.push((arguments[i__7849__auto___27224]));

var G__27225 = (i__7849__auto___27224 + (1));
i__7849__auto___27224 = G__27225;
continue;
} else {
}
break;
}

var G__27219 = args27217.length;
switch (G__27219) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27217.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27220 = (function (f,blockable,meta27221){
this.f = f;
this.blockable = blockable;
this.meta27221 = meta27221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27222,meta27221__$1){
var self__ = this;
var _27222__$1 = this;
return (new cljs.core.async.t_cljs$core$async27220(self__.f,self__.blockable,meta27221__$1));
});

cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27222){
var self__ = this;
var _27222__$1 = this;
return self__.meta27221;
});

cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27221","meta27221",-22798367,null)], null);
});

cljs.core.async.t_cljs$core$async27220.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27220";

cljs.core.async.t_cljs$core$async27220.cljs$lang$ctorPrWriter = (function (this__7379__auto__,writer__7380__auto__,opt__7381__auto__){
return cljs.core._write.call(null,writer__7380__auto__,"cljs.core.async/t_cljs$core$async27220");
});

cljs.core.async.__GT_t_cljs$core$async27220 = (function cljs$core$async$__GT_t_cljs$core$async27220(f__$1,blockable__$1,meta27221){
return (new cljs.core.async.t_cljs$core$async27220(f__$1,blockable__$1,meta27221));
});

}

return (new cljs.core.async.t_cljs$core$async27220(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27229 = [];
var len__7848__auto___27232 = arguments.length;
var i__7849__auto___27233 = (0);
while(true){
if((i__7849__auto___27233 < len__7848__auto___27232)){
args27229.push((arguments[i__7849__auto___27233]));

var G__27234 = (i__7849__auto___27233 + (1));
i__7849__auto___27233 = G__27234;
continue;
} else {
}
break;
}

var G__27231 = args27229.length;
switch (G__27231) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27229.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27236 = [];
var len__7848__auto___27239 = arguments.length;
var i__7849__auto___27240 = (0);
while(true){
if((i__7849__auto___27240 < len__7848__auto___27239)){
args27236.push((arguments[i__7849__auto___27240]));

var G__27241 = (i__7849__auto___27240 + (1));
i__7849__auto___27240 = G__27241;
continue;
} else {
}
break;
}

var G__27238 = args27236.length;
switch (G__27238) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27236.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27243 = [];
var len__7848__auto___27246 = arguments.length;
var i__7849__auto___27247 = (0);
while(true){
if((i__7849__auto___27247 < len__7848__auto___27246)){
args27243.push((arguments[i__7849__auto___27247]));

var G__27248 = (i__7849__auto___27247 + (1));
i__7849__auto___27247 = G__27248;
continue;
} else {
}
break;
}

var G__27245 = args27243.length;
switch (G__27245) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27243.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27250 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27250);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27250,ret){
return (function (){
return fn1.call(null,val_27250);
});})(val_27250,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27251 = [];
var len__7848__auto___27254 = arguments.length;
var i__7849__auto___27255 = (0);
while(true){
if((i__7849__auto___27255 < len__7848__auto___27254)){
args27251.push((arguments[i__7849__auto___27255]));

var G__27256 = (i__7849__auto___27255 + (1));
i__7849__auto___27255 = G__27256;
continue;
} else {
}
break;
}

var G__27253 = args27251.length;
switch (G__27253) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27251.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7688__auto___27258 = n;
var x_27259 = (0);
while(true){
if((x_27259 < n__7688__auto___27258)){
(a[x_27259] = (0));

var G__27260 = (x_27259 + (1));
x_27259 = G__27260;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27261 = (i + (1));
i = G__27261;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27265 = (function (alt_flag,flag,meta27266){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27266 = meta27266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27267,meta27266__$1){
var self__ = this;
var _27267__$1 = this;
return (new cljs.core.async.t_cljs$core$async27265(self__.alt_flag,self__.flag,meta27266__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27267){
var self__ = this;
var _27267__$1 = this;
return self__.meta27266;
});})(flag))
;

cljs.core.async.t_cljs$core$async27265.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27265.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27265.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27265.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27265.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27266","meta27266",-2018376826,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27265";

cljs.core.async.t_cljs$core$async27265.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7379__auto__,writer__7380__auto__,opt__7381__auto__){
return cljs.core._write.call(null,writer__7380__auto__,"cljs.core.async/t_cljs$core$async27265");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27265 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27265(alt_flag__$1,flag__$1,meta27266){
return (new cljs.core.async.t_cljs$core$async27265(alt_flag__$1,flag__$1,meta27266));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27265(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27271 = (function (alt_handler,flag,cb,meta27272){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27272 = meta27272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27273,meta27272__$1){
var self__ = this;
var _27273__$1 = this;
return (new cljs.core.async.t_cljs$core$async27271(self__.alt_handler,self__.flag,self__.cb,meta27272__$1));
});

cljs.core.async.t_cljs$core$async27271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27273){
var self__ = this;
var _27273__$1 = this;
return self__.meta27272;
});

cljs.core.async.t_cljs$core$async27271.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27271.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27272","meta27272",-1902788354,null)], null);
});

cljs.core.async.t_cljs$core$async27271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27271";

cljs.core.async.t_cljs$core$async27271.cljs$lang$ctorPrWriter = (function (this__7379__auto__,writer__7380__auto__,opt__7381__auto__){
return cljs.core._write.call(null,writer__7380__auto__,"cljs.core.async/t_cljs$core$async27271");
});

cljs.core.async.__GT_t_cljs$core$async27271 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27271(alt_handler__$1,flag__$1,cb__$1,meta27272){
return (new cljs.core.async.t_cljs$core$async27271(alt_handler__$1,flag__$1,cb__$1,meta27272));
});

}

return (new cljs.core.async.t_cljs$core$async27271(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27274_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27274_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27275_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27275_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6773__auto__ = wport;
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27276 = (i + (1));
i = G__27276;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6773__auto__ = ret;
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6761__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6761__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6761__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7855__auto__ = [];
var len__7848__auto___27282 = arguments.length;
var i__7849__auto___27283 = (0);
while(true){
if((i__7849__auto___27283 < len__7848__auto___27282)){
args__7855__auto__.push((arguments[i__7849__auto___27283]));

var G__27284 = (i__7849__auto___27283 + (1));
i__7849__auto___27283 = G__27284;
continue;
} else {
}
break;
}

var argseq__7856__auto__ = ((((1) < args__7855__auto__.length))?(new cljs.core.IndexedSeq(args__7855__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7856__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27279){
var map__27280 = p__27279;
var map__27280__$1 = ((((!((map__27280 == null)))?((((map__27280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27280):map__27280);
var opts = map__27280__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27277){
var G__27278 = cljs.core.first.call(null,seq27277);
var seq27277__$1 = cljs.core.next.call(null,seq27277);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27278,seq27277__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27285 = [];
var len__7848__auto___27335 = arguments.length;
var i__7849__auto___27336 = (0);
while(true){
if((i__7849__auto___27336 < len__7848__auto___27335)){
args27285.push((arguments[i__7849__auto___27336]));

var G__27337 = (i__7849__auto___27336 + (1));
i__7849__auto___27336 = G__27337;
continue;
} else {
}
break;
}

var G__27287 = args27285.length;
switch (G__27287) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27285.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19201__auto___27339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___27339){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___27339){
return (function (state_27311){
var state_val_27312 = (state_27311[(1)]);
if((state_val_27312 === (7))){
var inst_27307 = (state_27311[(2)]);
var state_27311__$1 = state_27311;
var statearr_27313_27340 = state_27311__$1;
(statearr_27313_27340[(2)] = inst_27307);

(statearr_27313_27340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (1))){
var state_27311__$1 = state_27311;
var statearr_27314_27341 = state_27311__$1;
(statearr_27314_27341[(2)] = null);

(statearr_27314_27341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (4))){
var inst_27290 = (state_27311[(7)]);
var inst_27290__$1 = (state_27311[(2)]);
var inst_27291 = (inst_27290__$1 == null);
var state_27311__$1 = (function (){var statearr_27315 = state_27311;
(statearr_27315[(7)] = inst_27290__$1);

return statearr_27315;
})();
if(cljs.core.truth_(inst_27291)){
var statearr_27316_27342 = state_27311__$1;
(statearr_27316_27342[(1)] = (5));

} else {
var statearr_27317_27343 = state_27311__$1;
(statearr_27317_27343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (13))){
var state_27311__$1 = state_27311;
var statearr_27318_27344 = state_27311__$1;
(statearr_27318_27344[(2)] = null);

(statearr_27318_27344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (6))){
var inst_27290 = (state_27311[(7)]);
var state_27311__$1 = state_27311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27311__$1,(11),to,inst_27290);
} else {
if((state_val_27312 === (3))){
var inst_27309 = (state_27311[(2)]);
var state_27311__$1 = state_27311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27311__$1,inst_27309);
} else {
if((state_val_27312 === (12))){
var state_27311__$1 = state_27311;
var statearr_27319_27345 = state_27311__$1;
(statearr_27319_27345[(2)] = null);

(statearr_27319_27345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (2))){
var state_27311__$1 = state_27311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27311__$1,(4),from);
} else {
if((state_val_27312 === (11))){
var inst_27300 = (state_27311[(2)]);
var state_27311__$1 = state_27311;
if(cljs.core.truth_(inst_27300)){
var statearr_27320_27346 = state_27311__$1;
(statearr_27320_27346[(1)] = (12));

} else {
var statearr_27321_27347 = state_27311__$1;
(statearr_27321_27347[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (9))){
var state_27311__$1 = state_27311;
var statearr_27322_27348 = state_27311__$1;
(statearr_27322_27348[(2)] = null);

(statearr_27322_27348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (5))){
var state_27311__$1 = state_27311;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27323_27349 = state_27311__$1;
(statearr_27323_27349[(1)] = (8));

} else {
var statearr_27324_27350 = state_27311__$1;
(statearr_27324_27350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (14))){
var inst_27305 = (state_27311[(2)]);
var state_27311__$1 = state_27311;
var statearr_27325_27351 = state_27311__$1;
(statearr_27325_27351[(2)] = inst_27305);

(statearr_27325_27351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (10))){
var inst_27297 = (state_27311[(2)]);
var state_27311__$1 = state_27311;
var statearr_27326_27352 = state_27311__$1;
(statearr_27326_27352[(2)] = inst_27297);

(statearr_27326_27352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (8))){
var inst_27294 = cljs.core.async.close_BANG_.call(null,to);
var state_27311__$1 = state_27311;
var statearr_27327_27353 = state_27311__$1;
(statearr_27327_27353[(2)] = inst_27294);

(statearr_27327_27353[(1)] = (10));


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
});})(c__19201__auto___27339))
;
return ((function (switch__19136__auto__,c__19201__auto___27339){
return (function() {
var cljs$core$async$state_machine__19137__auto__ = null;
var cljs$core$async$state_machine__19137__auto____0 = (function (){
var statearr_27331 = [null,null,null,null,null,null,null,null];
(statearr_27331[(0)] = cljs$core$async$state_machine__19137__auto__);

(statearr_27331[(1)] = (1));

return statearr_27331;
});
var cljs$core$async$state_machine__19137__auto____1 = (function (state_27311){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_27311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e27332){if((e27332 instanceof Object)){
var ex__19140__auto__ = e27332;
var statearr_27333_27354 = state_27311;
(statearr_27333_27354[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27355 = state_27311;
state_27311 = G__27355;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$state_machine__19137__auto__ = function(state_27311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19137__auto____1.call(this,state_27311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19137__auto____0;
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19137__auto____1;
return cljs$core$async$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___27339))
})();
var state__19203__auto__ = (function (){var statearr_27334 = f__19202__auto__.call(null);
(statearr_27334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___27339);

return statearr_27334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___27339))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27543){
var vec__27544 = p__27543;
var v = cljs.core.nth.call(null,vec__27544,(0),null);
var p = cljs.core.nth.call(null,vec__27544,(1),null);
var job = vec__27544;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19201__auto___27730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___27730,res,vec__27544,v,p,job,jobs,results){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___27730,res,vec__27544,v,p,job,jobs,results){
return (function (state_27551){
var state_val_27552 = (state_27551[(1)]);
if((state_val_27552 === (1))){
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27551__$1,(2),res,v);
} else {
if((state_val_27552 === (2))){
var inst_27548 = (state_27551[(2)]);
var inst_27549 = cljs.core.async.close_BANG_.call(null,res);
var state_27551__$1 = (function (){var statearr_27553 = state_27551;
(statearr_27553[(7)] = inst_27548);

return statearr_27553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27551__$1,inst_27549);
} else {
return null;
}
}
});})(c__19201__auto___27730,res,vec__27544,v,p,job,jobs,results))
;
return ((function (switch__19136__auto__,c__19201__auto___27730,res,vec__27544,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____0 = (function (){
var statearr_27557 = [null,null,null,null,null,null,null,null];
(statearr_27557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__);

(statearr_27557[(1)] = (1));

return statearr_27557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____1 = (function (state_27551){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_27551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e27558){if((e27558 instanceof Object)){
var ex__19140__auto__ = e27558;
var statearr_27559_27731 = state_27551;
(statearr_27559_27731[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27732 = state_27551;
state_27551 = G__27732;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__ = function(state_27551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____1.call(this,state_27551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___27730,res,vec__27544,v,p,job,jobs,results))
})();
var state__19203__auto__ = (function (){var statearr_27560 = f__19202__auto__.call(null);
(statearr_27560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___27730);

return statearr_27560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___27730,res,vec__27544,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27561){
var vec__27562 = p__27561;
var v = cljs.core.nth.call(null,vec__27562,(0),null);
var p = cljs.core.nth.call(null,vec__27562,(1),null);
var job = vec__27562;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7688__auto___27733 = n;
var __27734 = (0);
while(true){
if((__27734 < n__7688__auto___27733)){
var G__27565_27735 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27565_27735) {
case "compute":
var c__19201__auto___27737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27734,c__19201__auto___27737,G__27565_27735,n__7688__auto___27733,jobs,results,process,async){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (__27734,c__19201__auto___27737,G__27565_27735,n__7688__auto___27733,jobs,results,process,async){
return (function (state_27578){
var state_val_27579 = (state_27578[(1)]);
if((state_val_27579 === (1))){
var state_27578__$1 = state_27578;
var statearr_27580_27738 = state_27578__$1;
(statearr_27580_27738[(2)] = null);

(statearr_27580_27738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27579 === (2))){
var state_27578__$1 = state_27578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27578__$1,(4),jobs);
} else {
if((state_val_27579 === (3))){
var inst_27576 = (state_27578[(2)]);
var state_27578__$1 = state_27578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27578__$1,inst_27576);
} else {
if((state_val_27579 === (4))){
var inst_27568 = (state_27578[(2)]);
var inst_27569 = process.call(null,inst_27568);
var state_27578__$1 = state_27578;
if(cljs.core.truth_(inst_27569)){
var statearr_27581_27739 = state_27578__$1;
(statearr_27581_27739[(1)] = (5));

} else {
var statearr_27582_27740 = state_27578__$1;
(statearr_27582_27740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27579 === (5))){
var state_27578__$1 = state_27578;
var statearr_27583_27741 = state_27578__$1;
(statearr_27583_27741[(2)] = null);

(statearr_27583_27741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27579 === (6))){
var state_27578__$1 = state_27578;
var statearr_27584_27742 = state_27578__$1;
(statearr_27584_27742[(2)] = null);

(statearr_27584_27742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27579 === (7))){
var inst_27574 = (state_27578[(2)]);
var state_27578__$1 = state_27578;
var statearr_27585_27743 = state_27578__$1;
(statearr_27585_27743[(2)] = inst_27574);

(statearr_27585_27743[(1)] = (3));


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
});})(__27734,c__19201__auto___27737,G__27565_27735,n__7688__auto___27733,jobs,results,process,async))
;
return ((function (__27734,switch__19136__auto__,c__19201__auto___27737,G__27565_27735,n__7688__auto___27733,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____0 = (function (){
var statearr_27589 = [null,null,null,null,null,null,null];
(statearr_27589[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__);

(statearr_27589[(1)] = (1));

return statearr_27589;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____1 = (function (state_27578){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_27578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e27590){if((e27590 instanceof Object)){
var ex__19140__auto__ = e27590;
var statearr_27591_27744 = state_27578;
(statearr_27591_27744[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27745 = state_27578;
state_27578 = G__27745;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__ = function(state_27578){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____1.call(this,state_27578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__;
})()
;})(__27734,switch__19136__auto__,c__19201__auto___27737,G__27565_27735,n__7688__auto___27733,jobs,results,process,async))
})();
var state__19203__auto__ = (function (){var statearr_27592 = f__19202__auto__.call(null);
(statearr_27592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___27737);

return statearr_27592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(__27734,c__19201__auto___27737,G__27565_27735,n__7688__auto___27733,jobs,results,process,async))
);


break;
case "async":
var c__19201__auto___27746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27734,c__19201__auto___27746,G__27565_27735,n__7688__auto___27733,jobs,results,process,async){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (__27734,c__19201__auto___27746,G__27565_27735,n__7688__auto___27733,jobs,results,process,async){
return (function (state_27605){
var state_val_27606 = (state_27605[(1)]);
if((state_val_27606 === (1))){
var state_27605__$1 = state_27605;
var statearr_27607_27747 = state_27605__$1;
(statearr_27607_27747[(2)] = null);

(statearr_27607_27747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (2))){
var state_27605__$1 = state_27605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27605__$1,(4),jobs);
} else {
if((state_val_27606 === (3))){
var inst_27603 = (state_27605[(2)]);
var state_27605__$1 = state_27605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27605__$1,inst_27603);
} else {
if((state_val_27606 === (4))){
var inst_27595 = (state_27605[(2)]);
var inst_27596 = async.call(null,inst_27595);
var state_27605__$1 = state_27605;
if(cljs.core.truth_(inst_27596)){
var statearr_27608_27748 = state_27605__$1;
(statearr_27608_27748[(1)] = (5));

} else {
var statearr_27609_27749 = state_27605__$1;
(statearr_27609_27749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (5))){
var state_27605__$1 = state_27605;
var statearr_27610_27750 = state_27605__$1;
(statearr_27610_27750[(2)] = null);

(statearr_27610_27750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (6))){
var state_27605__$1 = state_27605;
var statearr_27611_27751 = state_27605__$1;
(statearr_27611_27751[(2)] = null);

(statearr_27611_27751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (7))){
var inst_27601 = (state_27605[(2)]);
var state_27605__$1 = state_27605;
var statearr_27612_27752 = state_27605__$1;
(statearr_27612_27752[(2)] = inst_27601);

(statearr_27612_27752[(1)] = (3));


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
});})(__27734,c__19201__auto___27746,G__27565_27735,n__7688__auto___27733,jobs,results,process,async))
;
return ((function (__27734,switch__19136__auto__,c__19201__auto___27746,G__27565_27735,n__7688__auto___27733,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____0 = (function (){
var statearr_27616 = [null,null,null,null,null,null,null];
(statearr_27616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__);

(statearr_27616[(1)] = (1));

return statearr_27616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____1 = (function (state_27605){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_27605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e27617){if((e27617 instanceof Object)){
var ex__19140__auto__ = e27617;
var statearr_27618_27753 = state_27605;
(statearr_27618_27753[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27754 = state_27605;
state_27605 = G__27754;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__ = function(state_27605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____1.call(this,state_27605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__;
})()
;})(__27734,switch__19136__auto__,c__19201__auto___27746,G__27565_27735,n__7688__auto___27733,jobs,results,process,async))
})();
var state__19203__auto__ = (function (){var statearr_27619 = f__19202__auto__.call(null);
(statearr_27619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___27746);

return statearr_27619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(__27734,c__19201__auto___27746,G__27565_27735,n__7688__auto___27733,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27755 = (__27734 + (1));
__27734 = G__27755;
continue;
} else {
}
break;
}

var c__19201__auto___27756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___27756,jobs,results,process,async){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___27756,jobs,results,process,async){
return (function (state_27641){
var state_val_27642 = (state_27641[(1)]);
if((state_val_27642 === (1))){
var state_27641__$1 = state_27641;
var statearr_27643_27757 = state_27641__$1;
(statearr_27643_27757[(2)] = null);

(statearr_27643_27757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (2))){
var state_27641__$1 = state_27641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27641__$1,(4),from);
} else {
if((state_val_27642 === (3))){
var inst_27639 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27641__$1,inst_27639);
} else {
if((state_val_27642 === (4))){
var inst_27622 = (state_27641[(7)]);
var inst_27622__$1 = (state_27641[(2)]);
var inst_27623 = (inst_27622__$1 == null);
var state_27641__$1 = (function (){var statearr_27644 = state_27641;
(statearr_27644[(7)] = inst_27622__$1);

return statearr_27644;
})();
if(cljs.core.truth_(inst_27623)){
var statearr_27645_27758 = state_27641__$1;
(statearr_27645_27758[(1)] = (5));

} else {
var statearr_27646_27759 = state_27641__$1;
(statearr_27646_27759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (5))){
var inst_27625 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27641__$1 = state_27641;
var statearr_27647_27760 = state_27641__$1;
(statearr_27647_27760[(2)] = inst_27625);

(statearr_27647_27760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (6))){
var inst_27622 = (state_27641[(7)]);
var inst_27627 = (state_27641[(8)]);
var inst_27627__$1 = cljs.core.async.chan.call(null,(1));
var inst_27628 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27629 = [inst_27622,inst_27627__$1];
var inst_27630 = (new cljs.core.PersistentVector(null,2,(5),inst_27628,inst_27629,null));
var state_27641__$1 = (function (){var statearr_27648 = state_27641;
(statearr_27648[(8)] = inst_27627__$1);

return statearr_27648;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27641__$1,(8),jobs,inst_27630);
} else {
if((state_val_27642 === (7))){
var inst_27637 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
var statearr_27649_27761 = state_27641__$1;
(statearr_27649_27761[(2)] = inst_27637);

(statearr_27649_27761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (8))){
var inst_27627 = (state_27641[(8)]);
var inst_27632 = (state_27641[(2)]);
var state_27641__$1 = (function (){var statearr_27650 = state_27641;
(statearr_27650[(9)] = inst_27632);

return statearr_27650;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27641__$1,(9),results,inst_27627);
} else {
if((state_val_27642 === (9))){
var inst_27634 = (state_27641[(2)]);
var state_27641__$1 = (function (){var statearr_27651 = state_27641;
(statearr_27651[(10)] = inst_27634);

return statearr_27651;
})();
var statearr_27652_27762 = state_27641__$1;
(statearr_27652_27762[(2)] = null);

(statearr_27652_27762[(1)] = (2));


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
});})(c__19201__auto___27756,jobs,results,process,async))
;
return ((function (switch__19136__auto__,c__19201__auto___27756,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____0 = (function (){
var statearr_27656 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27656[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__);

(statearr_27656[(1)] = (1));

return statearr_27656;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____1 = (function (state_27641){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_27641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e27657){if((e27657 instanceof Object)){
var ex__19140__auto__ = e27657;
var statearr_27658_27763 = state_27641;
(statearr_27658_27763[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27764 = state_27641;
state_27641 = G__27764;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__ = function(state_27641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____1.call(this,state_27641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___27756,jobs,results,process,async))
})();
var state__19203__auto__ = (function (){var statearr_27659 = f__19202__auto__.call(null);
(statearr_27659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___27756);

return statearr_27659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___27756,jobs,results,process,async))
);


var c__19201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto__,jobs,results,process,async){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto__,jobs,results,process,async){
return (function (state_27697){
var state_val_27698 = (state_27697[(1)]);
if((state_val_27698 === (7))){
var inst_27693 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27699_27765 = state_27697__$1;
(statearr_27699_27765[(2)] = inst_27693);

(statearr_27699_27765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (20))){
var state_27697__$1 = state_27697;
var statearr_27700_27766 = state_27697__$1;
(statearr_27700_27766[(2)] = null);

(statearr_27700_27766[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (1))){
var state_27697__$1 = state_27697;
var statearr_27701_27767 = state_27697__$1;
(statearr_27701_27767[(2)] = null);

(statearr_27701_27767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (4))){
var inst_27662 = (state_27697[(7)]);
var inst_27662__$1 = (state_27697[(2)]);
var inst_27663 = (inst_27662__$1 == null);
var state_27697__$1 = (function (){var statearr_27702 = state_27697;
(statearr_27702[(7)] = inst_27662__$1);

return statearr_27702;
})();
if(cljs.core.truth_(inst_27663)){
var statearr_27703_27768 = state_27697__$1;
(statearr_27703_27768[(1)] = (5));

} else {
var statearr_27704_27769 = state_27697__$1;
(statearr_27704_27769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (15))){
var inst_27675 = (state_27697[(8)]);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27697__$1,(18),to,inst_27675);
} else {
if((state_val_27698 === (21))){
var inst_27688 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27705_27770 = state_27697__$1;
(statearr_27705_27770[(2)] = inst_27688);

(statearr_27705_27770[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (13))){
var inst_27690 = (state_27697[(2)]);
var state_27697__$1 = (function (){var statearr_27706 = state_27697;
(statearr_27706[(9)] = inst_27690);

return statearr_27706;
})();
var statearr_27707_27771 = state_27697__$1;
(statearr_27707_27771[(2)] = null);

(statearr_27707_27771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (6))){
var inst_27662 = (state_27697[(7)]);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(11),inst_27662);
} else {
if((state_val_27698 === (17))){
var inst_27683 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27683)){
var statearr_27708_27772 = state_27697__$1;
(statearr_27708_27772[(1)] = (19));

} else {
var statearr_27709_27773 = state_27697__$1;
(statearr_27709_27773[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (3))){
var inst_27695 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27697__$1,inst_27695);
} else {
if((state_val_27698 === (12))){
var inst_27672 = (state_27697[(10)]);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(14),inst_27672);
} else {
if((state_val_27698 === (2))){
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(4),results);
} else {
if((state_val_27698 === (19))){
var state_27697__$1 = state_27697;
var statearr_27710_27774 = state_27697__$1;
(statearr_27710_27774[(2)] = null);

(statearr_27710_27774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (11))){
var inst_27672 = (state_27697[(2)]);
var state_27697__$1 = (function (){var statearr_27711 = state_27697;
(statearr_27711[(10)] = inst_27672);

return statearr_27711;
})();
var statearr_27712_27775 = state_27697__$1;
(statearr_27712_27775[(2)] = null);

(statearr_27712_27775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (9))){
var state_27697__$1 = state_27697;
var statearr_27713_27776 = state_27697__$1;
(statearr_27713_27776[(2)] = null);

(statearr_27713_27776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (5))){
var state_27697__$1 = state_27697;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27714_27777 = state_27697__$1;
(statearr_27714_27777[(1)] = (8));

} else {
var statearr_27715_27778 = state_27697__$1;
(statearr_27715_27778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (14))){
var inst_27677 = (state_27697[(11)]);
var inst_27675 = (state_27697[(8)]);
var inst_27675__$1 = (state_27697[(2)]);
var inst_27676 = (inst_27675__$1 == null);
var inst_27677__$1 = cljs.core.not.call(null,inst_27676);
var state_27697__$1 = (function (){var statearr_27716 = state_27697;
(statearr_27716[(11)] = inst_27677__$1);

(statearr_27716[(8)] = inst_27675__$1);

return statearr_27716;
})();
if(inst_27677__$1){
var statearr_27717_27779 = state_27697__$1;
(statearr_27717_27779[(1)] = (15));

} else {
var statearr_27718_27780 = state_27697__$1;
(statearr_27718_27780[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (16))){
var inst_27677 = (state_27697[(11)]);
var state_27697__$1 = state_27697;
var statearr_27719_27781 = state_27697__$1;
(statearr_27719_27781[(2)] = inst_27677);

(statearr_27719_27781[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (10))){
var inst_27669 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27720_27782 = state_27697__$1;
(statearr_27720_27782[(2)] = inst_27669);

(statearr_27720_27782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (18))){
var inst_27680 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27721_27783 = state_27697__$1;
(statearr_27721_27783[(2)] = inst_27680);

(statearr_27721_27783[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (8))){
var inst_27666 = cljs.core.async.close_BANG_.call(null,to);
var state_27697__$1 = state_27697;
var statearr_27722_27784 = state_27697__$1;
(statearr_27722_27784[(2)] = inst_27666);

(statearr_27722_27784[(1)] = (10));


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
}
}
}
}
}
});})(c__19201__auto__,jobs,results,process,async))
;
return ((function (switch__19136__auto__,c__19201__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____0 = (function (){
var statearr_27726 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27726[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__);

(statearr_27726[(1)] = (1));

return statearr_27726;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____1 = (function (state_27697){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_27697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e27727){if((e27727 instanceof Object)){
var ex__19140__auto__ = e27727;
var statearr_27728_27785 = state_27697;
(statearr_27728_27785[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27786 = state_27697;
state_27697 = G__27786;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__ = function(state_27697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____1.call(this,state_27697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19137__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto__,jobs,results,process,async))
})();
var state__19203__auto__ = (function (){var statearr_27729 = f__19202__auto__.call(null);
(statearr_27729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto__);

return statearr_27729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto__,jobs,results,process,async))
);

return c__19201__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27787 = [];
var len__7848__auto___27790 = arguments.length;
var i__7849__auto___27791 = (0);
while(true){
if((i__7849__auto___27791 < len__7848__auto___27790)){
args27787.push((arguments[i__7849__auto___27791]));

var G__27792 = (i__7849__auto___27791 + (1));
i__7849__auto___27791 = G__27792;
continue;
} else {
}
break;
}

var G__27789 = args27787.length;
switch (G__27789) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27787.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27794 = [];
var len__7848__auto___27797 = arguments.length;
var i__7849__auto___27798 = (0);
while(true){
if((i__7849__auto___27798 < len__7848__auto___27797)){
args27794.push((arguments[i__7849__auto___27798]));

var G__27799 = (i__7849__auto___27798 + (1));
i__7849__auto___27798 = G__27799;
continue;
} else {
}
break;
}

var G__27796 = args27794.length;
switch (G__27796) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27794.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27801 = [];
var len__7848__auto___27854 = arguments.length;
var i__7849__auto___27855 = (0);
while(true){
if((i__7849__auto___27855 < len__7848__auto___27854)){
args27801.push((arguments[i__7849__auto___27855]));

var G__27856 = (i__7849__auto___27855 + (1));
i__7849__auto___27855 = G__27856;
continue;
} else {
}
break;
}

var G__27803 = args27801.length;
switch (G__27803) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27801.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19201__auto___27858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___27858,tc,fc){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___27858,tc,fc){
return (function (state_27829){
var state_val_27830 = (state_27829[(1)]);
if((state_val_27830 === (7))){
var inst_27825 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27831_27859 = state_27829__$1;
(statearr_27831_27859[(2)] = inst_27825);

(statearr_27831_27859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (1))){
var state_27829__$1 = state_27829;
var statearr_27832_27860 = state_27829__$1;
(statearr_27832_27860[(2)] = null);

(statearr_27832_27860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (4))){
var inst_27806 = (state_27829[(7)]);
var inst_27806__$1 = (state_27829[(2)]);
var inst_27807 = (inst_27806__$1 == null);
var state_27829__$1 = (function (){var statearr_27833 = state_27829;
(statearr_27833[(7)] = inst_27806__$1);

return statearr_27833;
})();
if(cljs.core.truth_(inst_27807)){
var statearr_27834_27861 = state_27829__$1;
(statearr_27834_27861[(1)] = (5));

} else {
var statearr_27835_27862 = state_27829__$1;
(statearr_27835_27862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (13))){
var state_27829__$1 = state_27829;
var statearr_27836_27863 = state_27829__$1;
(statearr_27836_27863[(2)] = null);

(statearr_27836_27863[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (6))){
var inst_27806 = (state_27829[(7)]);
var inst_27812 = p.call(null,inst_27806);
var state_27829__$1 = state_27829;
if(cljs.core.truth_(inst_27812)){
var statearr_27837_27864 = state_27829__$1;
(statearr_27837_27864[(1)] = (9));

} else {
var statearr_27838_27865 = state_27829__$1;
(statearr_27838_27865[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (3))){
var inst_27827 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27829__$1,inst_27827);
} else {
if((state_val_27830 === (12))){
var state_27829__$1 = state_27829;
var statearr_27839_27866 = state_27829__$1;
(statearr_27839_27866[(2)] = null);

(statearr_27839_27866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (2))){
var state_27829__$1 = state_27829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27829__$1,(4),ch);
} else {
if((state_val_27830 === (11))){
var inst_27806 = (state_27829[(7)]);
var inst_27816 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27829__$1,(8),inst_27816,inst_27806);
} else {
if((state_val_27830 === (9))){
var state_27829__$1 = state_27829;
var statearr_27840_27867 = state_27829__$1;
(statearr_27840_27867[(2)] = tc);

(statearr_27840_27867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (5))){
var inst_27809 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27810 = cljs.core.async.close_BANG_.call(null,fc);
var state_27829__$1 = (function (){var statearr_27841 = state_27829;
(statearr_27841[(8)] = inst_27809);

return statearr_27841;
})();
var statearr_27842_27868 = state_27829__$1;
(statearr_27842_27868[(2)] = inst_27810);

(statearr_27842_27868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (14))){
var inst_27823 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27843_27869 = state_27829__$1;
(statearr_27843_27869[(2)] = inst_27823);

(statearr_27843_27869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (10))){
var state_27829__$1 = state_27829;
var statearr_27844_27870 = state_27829__$1;
(statearr_27844_27870[(2)] = fc);

(statearr_27844_27870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (8))){
var inst_27818 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
if(cljs.core.truth_(inst_27818)){
var statearr_27845_27871 = state_27829__$1;
(statearr_27845_27871[(1)] = (12));

} else {
var statearr_27846_27872 = state_27829__$1;
(statearr_27846_27872[(1)] = (13));

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
});})(c__19201__auto___27858,tc,fc))
;
return ((function (switch__19136__auto__,c__19201__auto___27858,tc,fc){
return (function() {
var cljs$core$async$state_machine__19137__auto__ = null;
var cljs$core$async$state_machine__19137__auto____0 = (function (){
var statearr_27850 = [null,null,null,null,null,null,null,null,null];
(statearr_27850[(0)] = cljs$core$async$state_machine__19137__auto__);

(statearr_27850[(1)] = (1));

return statearr_27850;
});
var cljs$core$async$state_machine__19137__auto____1 = (function (state_27829){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_27829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e27851){if((e27851 instanceof Object)){
var ex__19140__auto__ = e27851;
var statearr_27852_27873 = state_27829;
(statearr_27852_27873[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27874 = state_27829;
state_27829 = G__27874;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$state_machine__19137__auto__ = function(state_27829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19137__auto____1.call(this,state_27829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19137__auto____0;
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19137__auto____1;
return cljs$core$async$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___27858,tc,fc))
})();
var state__19203__auto__ = (function (){var statearr_27853 = f__19202__auto__.call(null);
(statearr_27853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___27858);

return statearr_27853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___27858,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto__){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto__){
return (function (state_27938){
var state_val_27939 = (state_27938[(1)]);
if((state_val_27939 === (7))){
var inst_27934 = (state_27938[(2)]);
var state_27938__$1 = state_27938;
var statearr_27940_27961 = state_27938__$1;
(statearr_27940_27961[(2)] = inst_27934);

(statearr_27940_27961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (1))){
var inst_27918 = init;
var state_27938__$1 = (function (){var statearr_27941 = state_27938;
(statearr_27941[(7)] = inst_27918);

return statearr_27941;
})();
var statearr_27942_27962 = state_27938__$1;
(statearr_27942_27962[(2)] = null);

(statearr_27942_27962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (4))){
var inst_27921 = (state_27938[(8)]);
var inst_27921__$1 = (state_27938[(2)]);
var inst_27922 = (inst_27921__$1 == null);
var state_27938__$1 = (function (){var statearr_27943 = state_27938;
(statearr_27943[(8)] = inst_27921__$1);

return statearr_27943;
})();
if(cljs.core.truth_(inst_27922)){
var statearr_27944_27963 = state_27938__$1;
(statearr_27944_27963[(1)] = (5));

} else {
var statearr_27945_27964 = state_27938__$1;
(statearr_27945_27964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (6))){
var inst_27921 = (state_27938[(8)]);
var inst_27925 = (state_27938[(9)]);
var inst_27918 = (state_27938[(7)]);
var inst_27925__$1 = f.call(null,inst_27918,inst_27921);
var inst_27926 = cljs.core.reduced_QMARK_.call(null,inst_27925__$1);
var state_27938__$1 = (function (){var statearr_27946 = state_27938;
(statearr_27946[(9)] = inst_27925__$1);

return statearr_27946;
})();
if(inst_27926){
var statearr_27947_27965 = state_27938__$1;
(statearr_27947_27965[(1)] = (8));

} else {
var statearr_27948_27966 = state_27938__$1;
(statearr_27948_27966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (3))){
var inst_27936 = (state_27938[(2)]);
var state_27938__$1 = state_27938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27938__$1,inst_27936);
} else {
if((state_val_27939 === (2))){
var state_27938__$1 = state_27938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27938__$1,(4),ch);
} else {
if((state_val_27939 === (9))){
var inst_27925 = (state_27938[(9)]);
var inst_27918 = inst_27925;
var state_27938__$1 = (function (){var statearr_27949 = state_27938;
(statearr_27949[(7)] = inst_27918);

return statearr_27949;
})();
var statearr_27950_27967 = state_27938__$1;
(statearr_27950_27967[(2)] = null);

(statearr_27950_27967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (5))){
var inst_27918 = (state_27938[(7)]);
var state_27938__$1 = state_27938;
var statearr_27951_27968 = state_27938__$1;
(statearr_27951_27968[(2)] = inst_27918);

(statearr_27951_27968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (10))){
var inst_27932 = (state_27938[(2)]);
var state_27938__$1 = state_27938;
var statearr_27952_27969 = state_27938__$1;
(statearr_27952_27969[(2)] = inst_27932);

(statearr_27952_27969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (8))){
var inst_27925 = (state_27938[(9)]);
var inst_27928 = cljs.core.deref.call(null,inst_27925);
var state_27938__$1 = state_27938;
var statearr_27953_27970 = state_27938__$1;
(statearr_27953_27970[(2)] = inst_27928);

(statearr_27953_27970[(1)] = (10));


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
});})(c__19201__auto__))
;
return ((function (switch__19136__auto__,c__19201__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19137__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19137__auto____0 = (function (){
var statearr_27957 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27957[(0)] = cljs$core$async$reduce_$_state_machine__19137__auto__);

(statearr_27957[(1)] = (1));

return statearr_27957;
});
var cljs$core$async$reduce_$_state_machine__19137__auto____1 = (function (state_27938){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_27938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e27958){if((e27958 instanceof Object)){
var ex__19140__auto__ = e27958;
var statearr_27959_27971 = state_27938;
(statearr_27959_27971[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27972 = state_27938;
state_27938 = G__27972;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19137__auto__ = function(state_27938){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19137__auto____1.call(this,state_27938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19137__auto____0;
cljs$core$async$reduce_$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19137__auto____1;
return cljs$core$async$reduce_$_state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto__))
})();
var state__19203__auto__ = (function (){var statearr_27960 = f__19202__auto__.call(null);
(statearr_27960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto__);

return statearr_27960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto__))
);

return c__19201__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27973 = [];
var len__7848__auto___28025 = arguments.length;
var i__7849__auto___28026 = (0);
while(true){
if((i__7849__auto___28026 < len__7848__auto___28025)){
args27973.push((arguments[i__7849__auto___28026]));

var G__28027 = (i__7849__auto___28026 + (1));
i__7849__auto___28026 = G__28027;
continue;
} else {
}
break;
}

var G__27975 = args27973.length;
switch (G__27975) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27973.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto__){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto__){
return (function (state_28000){
var state_val_28001 = (state_28000[(1)]);
if((state_val_28001 === (7))){
var inst_27982 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28002_28029 = state_28000__$1;
(statearr_28002_28029[(2)] = inst_27982);

(statearr_28002_28029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (1))){
var inst_27976 = cljs.core.seq.call(null,coll);
var inst_27977 = inst_27976;
var state_28000__$1 = (function (){var statearr_28003 = state_28000;
(statearr_28003[(7)] = inst_27977);

return statearr_28003;
})();
var statearr_28004_28030 = state_28000__$1;
(statearr_28004_28030[(2)] = null);

(statearr_28004_28030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (4))){
var inst_27977 = (state_28000[(7)]);
var inst_27980 = cljs.core.first.call(null,inst_27977);
var state_28000__$1 = state_28000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28000__$1,(7),ch,inst_27980);
} else {
if((state_val_28001 === (13))){
var inst_27994 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28005_28031 = state_28000__$1;
(statearr_28005_28031[(2)] = inst_27994);

(statearr_28005_28031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (6))){
var inst_27985 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
if(cljs.core.truth_(inst_27985)){
var statearr_28006_28032 = state_28000__$1;
(statearr_28006_28032[(1)] = (8));

} else {
var statearr_28007_28033 = state_28000__$1;
(statearr_28007_28033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (3))){
var inst_27998 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28000__$1,inst_27998);
} else {
if((state_val_28001 === (12))){
var state_28000__$1 = state_28000;
var statearr_28008_28034 = state_28000__$1;
(statearr_28008_28034[(2)] = null);

(statearr_28008_28034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (2))){
var inst_27977 = (state_28000[(7)]);
var state_28000__$1 = state_28000;
if(cljs.core.truth_(inst_27977)){
var statearr_28009_28035 = state_28000__$1;
(statearr_28009_28035[(1)] = (4));

} else {
var statearr_28010_28036 = state_28000__$1;
(statearr_28010_28036[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (11))){
var inst_27991 = cljs.core.async.close_BANG_.call(null,ch);
var state_28000__$1 = state_28000;
var statearr_28011_28037 = state_28000__$1;
(statearr_28011_28037[(2)] = inst_27991);

(statearr_28011_28037[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (9))){
var state_28000__$1 = state_28000;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28012_28038 = state_28000__$1;
(statearr_28012_28038[(1)] = (11));

} else {
var statearr_28013_28039 = state_28000__$1;
(statearr_28013_28039[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (5))){
var inst_27977 = (state_28000[(7)]);
var state_28000__$1 = state_28000;
var statearr_28014_28040 = state_28000__$1;
(statearr_28014_28040[(2)] = inst_27977);

(statearr_28014_28040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (10))){
var inst_27996 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28015_28041 = state_28000__$1;
(statearr_28015_28041[(2)] = inst_27996);

(statearr_28015_28041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (8))){
var inst_27977 = (state_28000[(7)]);
var inst_27987 = cljs.core.next.call(null,inst_27977);
var inst_27977__$1 = inst_27987;
var state_28000__$1 = (function (){var statearr_28016 = state_28000;
(statearr_28016[(7)] = inst_27977__$1);

return statearr_28016;
})();
var statearr_28017_28042 = state_28000__$1;
(statearr_28017_28042[(2)] = null);

(statearr_28017_28042[(1)] = (2));


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
});})(c__19201__auto__))
;
return ((function (switch__19136__auto__,c__19201__auto__){
return (function() {
var cljs$core$async$state_machine__19137__auto__ = null;
var cljs$core$async$state_machine__19137__auto____0 = (function (){
var statearr_28021 = [null,null,null,null,null,null,null,null];
(statearr_28021[(0)] = cljs$core$async$state_machine__19137__auto__);

(statearr_28021[(1)] = (1));

return statearr_28021;
});
var cljs$core$async$state_machine__19137__auto____1 = (function (state_28000){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_28000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e28022){if((e28022 instanceof Object)){
var ex__19140__auto__ = e28022;
var statearr_28023_28043 = state_28000;
(statearr_28023_28043[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28044 = state_28000;
state_28000 = G__28044;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$state_machine__19137__auto__ = function(state_28000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19137__auto____1.call(this,state_28000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19137__auto____0;
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19137__auto____1;
return cljs$core$async$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto__))
})();
var state__19203__auto__ = (function (){var statearr_28024 = f__19202__auto__.call(null);
(statearr_28024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto__);

return statearr_28024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto__))
);

return c__19201__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7436__auto__ = (((_ == null))?null:_);
var m__7437__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,_);
} else {
var m__7437__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7436__auto__ = (((m == null))?null:m);
var m__7437__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7437__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7436__auto__ = (((m == null))?null:m);
var m__7437__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,m,ch);
} else {
var m__7437__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7436__auto__ = (((m == null))?null:m);
var m__7437__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,m);
} else {
var m__7437__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28270 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28270 = (function (mult,ch,cs,meta28271){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28271 = meta28271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28272,meta28271__$1){
var self__ = this;
var _28272__$1 = this;
return (new cljs.core.async.t_cljs$core$async28270(self__.mult,self__.ch,self__.cs,meta28271__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28272){
var self__ = this;
var _28272__$1 = this;
return self__.meta28271;
});})(cs))
;

cljs.core.async.t_cljs$core$async28270.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28270.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28270.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28270.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28270.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28270.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28271","meta28271",-1593037919,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28270.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28270";

cljs.core.async.t_cljs$core$async28270.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7379__auto__,writer__7380__auto__,opt__7381__auto__){
return cljs.core._write.call(null,writer__7380__auto__,"cljs.core.async/t_cljs$core$async28270");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28270 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28270(mult__$1,ch__$1,cs__$1,meta28271){
return (new cljs.core.async.t_cljs$core$async28270(mult__$1,ch__$1,cs__$1,meta28271));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28270(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19201__auto___28495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___28495,cs,m,dchan,dctr,done){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___28495,cs,m,dchan,dctr,done){
return (function (state_28407){
var state_val_28408 = (state_28407[(1)]);
if((state_val_28408 === (7))){
var inst_28403 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
var statearr_28409_28496 = state_28407__$1;
(statearr_28409_28496[(2)] = inst_28403);

(statearr_28409_28496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (20))){
var inst_28306 = (state_28407[(7)]);
var inst_28318 = cljs.core.first.call(null,inst_28306);
var inst_28319 = cljs.core.nth.call(null,inst_28318,(0),null);
var inst_28320 = cljs.core.nth.call(null,inst_28318,(1),null);
var state_28407__$1 = (function (){var statearr_28410 = state_28407;
(statearr_28410[(8)] = inst_28319);

return statearr_28410;
})();
if(cljs.core.truth_(inst_28320)){
var statearr_28411_28497 = state_28407__$1;
(statearr_28411_28497[(1)] = (22));

} else {
var statearr_28412_28498 = state_28407__$1;
(statearr_28412_28498[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (27))){
var inst_28350 = (state_28407[(9)]);
var inst_28275 = (state_28407[(10)]);
var inst_28348 = (state_28407[(11)]);
var inst_28355 = (state_28407[(12)]);
var inst_28355__$1 = cljs.core._nth.call(null,inst_28348,inst_28350);
var inst_28356 = cljs.core.async.put_BANG_.call(null,inst_28355__$1,inst_28275,done);
var state_28407__$1 = (function (){var statearr_28413 = state_28407;
(statearr_28413[(12)] = inst_28355__$1);

return statearr_28413;
})();
if(cljs.core.truth_(inst_28356)){
var statearr_28414_28499 = state_28407__$1;
(statearr_28414_28499[(1)] = (30));

} else {
var statearr_28415_28500 = state_28407__$1;
(statearr_28415_28500[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (1))){
var state_28407__$1 = state_28407;
var statearr_28416_28501 = state_28407__$1;
(statearr_28416_28501[(2)] = null);

(statearr_28416_28501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (24))){
var inst_28306 = (state_28407[(7)]);
var inst_28325 = (state_28407[(2)]);
var inst_28326 = cljs.core.next.call(null,inst_28306);
var inst_28284 = inst_28326;
var inst_28285 = null;
var inst_28286 = (0);
var inst_28287 = (0);
var state_28407__$1 = (function (){var statearr_28417 = state_28407;
(statearr_28417[(13)] = inst_28285);

(statearr_28417[(14)] = inst_28287);

(statearr_28417[(15)] = inst_28284);

(statearr_28417[(16)] = inst_28325);

(statearr_28417[(17)] = inst_28286);

return statearr_28417;
})();
var statearr_28418_28502 = state_28407__$1;
(statearr_28418_28502[(2)] = null);

(statearr_28418_28502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (39))){
var state_28407__$1 = state_28407;
var statearr_28422_28503 = state_28407__$1;
(statearr_28422_28503[(2)] = null);

(statearr_28422_28503[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (4))){
var inst_28275 = (state_28407[(10)]);
var inst_28275__$1 = (state_28407[(2)]);
var inst_28276 = (inst_28275__$1 == null);
var state_28407__$1 = (function (){var statearr_28423 = state_28407;
(statearr_28423[(10)] = inst_28275__$1);

return statearr_28423;
})();
if(cljs.core.truth_(inst_28276)){
var statearr_28424_28504 = state_28407__$1;
(statearr_28424_28504[(1)] = (5));

} else {
var statearr_28425_28505 = state_28407__$1;
(statearr_28425_28505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (15))){
var inst_28285 = (state_28407[(13)]);
var inst_28287 = (state_28407[(14)]);
var inst_28284 = (state_28407[(15)]);
var inst_28286 = (state_28407[(17)]);
var inst_28302 = (state_28407[(2)]);
var inst_28303 = (inst_28287 + (1));
var tmp28419 = inst_28285;
var tmp28420 = inst_28284;
var tmp28421 = inst_28286;
var inst_28284__$1 = tmp28420;
var inst_28285__$1 = tmp28419;
var inst_28286__$1 = tmp28421;
var inst_28287__$1 = inst_28303;
var state_28407__$1 = (function (){var statearr_28426 = state_28407;
(statearr_28426[(13)] = inst_28285__$1);

(statearr_28426[(14)] = inst_28287__$1);

(statearr_28426[(15)] = inst_28284__$1);

(statearr_28426[(18)] = inst_28302);

(statearr_28426[(17)] = inst_28286__$1);

return statearr_28426;
})();
var statearr_28427_28506 = state_28407__$1;
(statearr_28427_28506[(2)] = null);

(statearr_28427_28506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (21))){
var inst_28329 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
var statearr_28431_28507 = state_28407__$1;
(statearr_28431_28507[(2)] = inst_28329);

(statearr_28431_28507[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (31))){
var inst_28355 = (state_28407[(12)]);
var inst_28359 = done.call(null,null);
var inst_28360 = cljs.core.async.untap_STAR_.call(null,m,inst_28355);
var state_28407__$1 = (function (){var statearr_28432 = state_28407;
(statearr_28432[(19)] = inst_28359);

return statearr_28432;
})();
var statearr_28433_28508 = state_28407__$1;
(statearr_28433_28508[(2)] = inst_28360);

(statearr_28433_28508[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (32))){
var inst_28350 = (state_28407[(9)]);
var inst_28347 = (state_28407[(20)]);
var inst_28348 = (state_28407[(11)]);
var inst_28349 = (state_28407[(21)]);
var inst_28362 = (state_28407[(2)]);
var inst_28363 = (inst_28350 + (1));
var tmp28428 = inst_28347;
var tmp28429 = inst_28348;
var tmp28430 = inst_28349;
var inst_28347__$1 = tmp28428;
var inst_28348__$1 = tmp28429;
var inst_28349__$1 = tmp28430;
var inst_28350__$1 = inst_28363;
var state_28407__$1 = (function (){var statearr_28434 = state_28407;
(statearr_28434[(9)] = inst_28350__$1);

(statearr_28434[(20)] = inst_28347__$1);

(statearr_28434[(11)] = inst_28348__$1);

(statearr_28434[(22)] = inst_28362);

(statearr_28434[(21)] = inst_28349__$1);

return statearr_28434;
})();
var statearr_28435_28509 = state_28407__$1;
(statearr_28435_28509[(2)] = null);

(statearr_28435_28509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (40))){
var inst_28375 = (state_28407[(23)]);
var inst_28379 = done.call(null,null);
var inst_28380 = cljs.core.async.untap_STAR_.call(null,m,inst_28375);
var state_28407__$1 = (function (){var statearr_28436 = state_28407;
(statearr_28436[(24)] = inst_28379);

return statearr_28436;
})();
var statearr_28437_28510 = state_28407__$1;
(statearr_28437_28510[(2)] = inst_28380);

(statearr_28437_28510[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (33))){
var inst_28366 = (state_28407[(25)]);
var inst_28368 = cljs.core.chunked_seq_QMARK_.call(null,inst_28366);
var state_28407__$1 = state_28407;
if(inst_28368){
var statearr_28438_28511 = state_28407__$1;
(statearr_28438_28511[(1)] = (36));

} else {
var statearr_28439_28512 = state_28407__$1;
(statearr_28439_28512[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (13))){
var inst_28296 = (state_28407[(26)]);
var inst_28299 = cljs.core.async.close_BANG_.call(null,inst_28296);
var state_28407__$1 = state_28407;
var statearr_28440_28513 = state_28407__$1;
(statearr_28440_28513[(2)] = inst_28299);

(statearr_28440_28513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (22))){
var inst_28319 = (state_28407[(8)]);
var inst_28322 = cljs.core.async.close_BANG_.call(null,inst_28319);
var state_28407__$1 = state_28407;
var statearr_28441_28514 = state_28407__$1;
(statearr_28441_28514[(2)] = inst_28322);

(statearr_28441_28514[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (36))){
var inst_28366 = (state_28407[(25)]);
var inst_28370 = cljs.core.chunk_first.call(null,inst_28366);
var inst_28371 = cljs.core.chunk_rest.call(null,inst_28366);
var inst_28372 = cljs.core.count.call(null,inst_28370);
var inst_28347 = inst_28371;
var inst_28348 = inst_28370;
var inst_28349 = inst_28372;
var inst_28350 = (0);
var state_28407__$1 = (function (){var statearr_28442 = state_28407;
(statearr_28442[(9)] = inst_28350);

(statearr_28442[(20)] = inst_28347);

(statearr_28442[(11)] = inst_28348);

(statearr_28442[(21)] = inst_28349);

return statearr_28442;
})();
var statearr_28443_28515 = state_28407__$1;
(statearr_28443_28515[(2)] = null);

(statearr_28443_28515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (41))){
var inst_28366 = (state_28407[(25)]);
var inst_28382 = (state_28407[(2)]);
var inst_28383 = cljs.core.next.call(null,inst_28366);
var inst_28347 = inst_28383;
var inst_28348 = null;
var inst_28349 = (0);
var inst_28350 = (0);
var state_28407__$1 = (function (){var statearr_28444 = state_28407;
(statearr_28444[(9)] = inst_28350);

(statearr_28444[(27)] = inst_28382);

(statearr_28444[(20)] = inst_28347);

(statearr_28444[(11)] = inst_28348);

(statearr_28444[(21)] = inst_28349);

return statearr_28444;
})();
var statearr_28445_28516 = state_28407__$1;
(statearr_28445_28516[(2)] = null);

(statearr_28445_28516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (43))){
var state_28407__$1 = state_28407;
var statearr_28446_28517 = state_28407__$1;
(statearr_28446_28517[(2)] = null);

(statearr_28446_28517[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (29))){
var inst_28391 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
var statearr_28447_28518 = state_28407__$1;
(statearr_28447_28518[(2)] = inst_28391);

(statearr_28447_28518[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (44))){
var inst_28400 = (state_28407[(2)]);
var state_28407__$1 = (function (){var statearr_28448 = state_28407;
(statearr_28448[(28)] = inst_28400);

return statearr_28448;
})();
var statearr_28449_28519 = state_28407__$1;
(statearr_28449_28519[(2)] = null);

(statearr_28449_28519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (6))){
var inst_28339 = (state_28407[(29)]);
var inst_28338 = cljs.core.deref.call(null,cs);
var inst_28339__$1 = cljs.core.keys.call(null,inst_28338);
var inst_28340 = cljs.core.count.call(null,inst_28339__$1);
var inst_28341 = cljs.core.reset_BANG_.call(null,dctr,inst_28340);
var inst_28346 = cljs.core.seq.call(null,inst_28339__$1);
var inst_28347 = inst_28346;
var inst_28348 = null;
var inst_28349 = (0);
var inst_28350 = (0);
var state_28407__$1 = (function (){var statearr_28450 = state_28407;
(statearr_28450[(9)] = inst_28350);

(statearr_28450[(20)] = inst_28347);

(statearr_28450[(30)] = inst_28341);

(statearr_28450[(11)] = inst_28348);

(statearr_28450[(29)] = inst_28339__$1);

(statearr_28450[(21)] = inst_28349);

return statearr_28450;
})();
var statearr_28451_28520 = state_28407__$1;
(statearr_28451_28520[(2)] = null);

(statearr_28451_28520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (28))){
var inst_28366 = (state_28407[(25)]);
var inst_28347 = (state_28407[(20)]);
var inst_28366__$1 = cljs.core.seq.call(null,inst_28347);
var state_28407__$1 = (function (){var statearr_28452 = state_28407;
(statearr_28452[(25)] = inst_28366__$1);

return statearr_28452;
})();
if(inst_28366__$1){
var statearr_28453_28521 = state_28407__$1;
(statearr_28453_28521[(1)] = (33));

} else {
var statearr_28454_28522 = state_28407__$1;
(statearr_28454_28522[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (25))){
var inst_28350 = (state_28407[(9)]);
var inst_28349 = (state_28407[(21)]);
var inst_28352 = (inst_28350 < inst_28349);
var inst_28353 = inst_28352;
var state_28407__$1 = state_28407;
if(cljs.core.truth_(inst_28353)){
var statearr_28455_28523 = state_28407__$1;
(statearr_28455_28523[(1)] = (27));

} else {
var statearr_28456_28524 = state_28407__$1;
(statearr_28456_28524[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (34))){
var state_28407__$1 = state_28407;
var statearr_28457_28525 = state_28407__$1;
(statearr_28457_28525[(2)] = null);

(statearr_28457_28525[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (17))){
var state_28407__$1 = state_28407;
var statearr_28458_28526 = state_28407__$1;
(statearr_28458_28526[(2)] = null);

(statearr_28458_28526[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (3))){
var inst_28405 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28407__$1,inst_28405);
} else {
if((state_val_28408 === (12))){
var inst_28334 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
var statearr_28459_28527 = state_28407__$1;
(statearr_28459_28527[(2)] = inst_28334);

(statearr_28459_28527[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (2))){
var state_28407__$1 = state_28407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28407__$1,(4),ch);
} else {
if((state_val_28408 === (23))){
var state_28407__$1 = state_28407;
var statearr_28460_28528 = state_28407__$1;
(statearr_28460_28528[(2)] = null);

(statearr_28460_28528[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (35))){
var inst_28389 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
var statearr_28461_28529 = state_28407__$1;
(statearr_28461_28529[(2)] = inst_28389);

(statearr_28461_28529[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (19))){
var inst_28306 = (state_28407[(7)]);
var inst_28310 = cljs.core.chunk_first.call(null,inst_28306);
var inst_28311 = cljs.core.chunk_rest.call(null,inst_28306);
var inst_28312 = cljs.core.count.call(null,inst_28310);
var inst_28284 = inst_28311;
var inst_28285 = inst_28310;
var inst_28286 = inst_28312;
var inst_28287 = (0);
var state_28407__$1 = (function (){var statearr_28462 = state_28407;
(statearr_28462[(13)] = inst_28285);

(statearr_28462[(14)] = inst_28287);

(statearr_28462[(15)] = inst_28284);

(statearr_28462[(17)] = inst_28286);

return statearr_28462;
})();
var statearr_28463_28530 = state_28407__$1;
(statearr_28463_28530[(2)] = null);

(statearr_28463_28530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (11))){
var inst_28306 = (state_28407[(7)]);
var inst_28284 = (state_28407[(15)]);
var inst_28306__$1 = cljs.core.seq.call(null,inst_28284);
var state_28407__$1 = (function (){var statearr_28464 = state_28407;
(statearr_28464[(7)] = inst_28306__$1);

return statearr_28464;
})();
if(inst_28306__$1){
var statearr_28465_28531 = state_28407__$1;
(statearr_28465_28531[(1)] = (16));

} else {
var statearr_28466_28532 = state_28407__$1;
(statearr_28466_28532[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (9))){
var inst_28336 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
var statearr_28467_28533 = state_28407__$1;
(statearr_28467_28533[(2)] = inst_28336);

(statearr_28467_28533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (5))){
var inst_28282 = cljs.core.deref.call(null,cs);
var inst_28283 = cljs.core.seq.call(null,inst_28282);
var inst_28284 = inst_28283;
var inst_28285 = null;
var inst_28286 = (0);
var inst_28287 = (0);
var state_28407__$1 = (function (){var statearr_28468 = state_28407;
(statearr_28468[(13)] = inst_28285);

(statearr_28468[(14)] = inst_28287);

(statearr_28468[(15)] = inst_28284);

(statearr_28468[(17)] = inst_28286);

return statearr_28468;
})();
var statearr_28469_28534 = state_28407__$1;
(statearr_28469_28534[(2)] = null);

(statearr_28469_28534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (14))){
var state_28407__$1 = state_28407;
var statearr_28470_28535 = state_28407__$1;
(statearr_28470_28535[(2)] = null);

(statearr_28470_28535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (45))){
var inst_28397 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
var statearr_28471_28536 = state_28407__$1;
(statearr_28471_28536[(2)] = inst_28397);

(statearr_28471_28536[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (26))){
var inst_28339 = (state_28407[(29)]);
var inst_28393 = (state_28407[(2)]);
var inst_28394 = cljs.core.seq.call(null,inst_28339);
var state_28407__$1 = (function (){var statearr_28472 = state_28407;
(statearr_28472[(31)] = inst_28393);

return statearr_28472;
})();
if(inst_28394){
var statearr_28473_28537 = state_28407__$1;
(statearr_28473_28537[(1)] = (42));

} else {
var statearr_28474_28538 = state_28407__$1;
(statearr_28474_28538[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (16))){
var inst_28306 = (state_28407[(7)]);
var inst_28308 = cljs.core.chunked_seq_QMARK_.call(null,inst_28306);
var state_28407__$1 = state_28407;
if(inst_28308){
var statearr_28475_28539 = state_28407__$1;
(statearr_28475_28539[(1)] = (19));

} else {
var statearr_28476_28540 = state_28407__$1;
(statearr_28476_28540[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (38))){
var inst_28386 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
var statearr_28477_28541 = state_28407__$1;
(statearr_28477_28541[(2)] = inst_28386);

(statearr_28477_28541[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (30))){
var state_28407__$1 = state_28407;
var statearr_28478_28542 = state_28407__$1;
(statearr_28478_28542[(2)] = null);

(statearr_28478_28542[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (10))){
var inst_28285 = (state_28407[(13)]);
var inst_28287 = (state_28407[(14)]);
var inst_28295 = cljs.core._nth.call(null,inst_28285,inst_28287);
var inst_28296 = cljs.core.nth.call(null,inst_28295,(0),null);
var inst_28297 = cljs.core.nth.call(null,inst_28295,(1),null);
var state_28407__$1 = (function (){var statearr_28479 = state_28407;
(statearr_28479[(26)] = inst_28296);

return statearr_28479;
})();
if(cljs.core.truth_(inst_28297)){
var statearr_28480_28543 = state_28407__$1;
(statearr_28480_28543[(1)] = (13));

} else {
var statearr_28481_28544 = state_28407__$1;
(statearr_28481_28544[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (18))){
var inst_28332 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
var statearr_28482_28545 = state_28407__$1;
(statearr_28482_28545[(2)] = inst_28332);

(statearr_28482_28545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (42))){
var state_28407__$1 = state_28407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28407__$1,(45),dchan);
} else {
if((state_val_28408 === (37))){
var inst_28366 = (state_28407[(25)]);
var inst_28375 = (state_28407[(23)]);
var inst_28275 = (state_28407[(10)]);
var inst_28375__$1 = cljs.core.first.call(null,inst_28366);
var inst_28376 = cljs.core.async.put_BANG_.call(null,inst_28375__$1,inst_28275,done);
var state_28407__$1 = (function (){var statearr_28483 = state_28407;
(statearr_28483[(23)] = inst_28375__$1);

return statearr_28483;
})();
if(cljs.core.truth_(inst_28376)){
var statearr_28484_28546 = state_28407__$1;
(statearr_28484_28546[(1)] = (39));

} else {
var statearr_28485_28547 = state_28407__$1;
(statearr_28485_28547[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (8))){
var inst_28287 = (state_28407[(14)]);
var inst_28286 = (state_28407[(17)]);
var inst_28289 = (inst_28287 < inst_28286);
var inst_28290 = inst_28289;
var state_28407__$1 = state_28407;
if(cljs.core.truth_(inst_28290)){
var statearr_28486_28548 = state_28407__$1;
(statearr_28486_28548[(1)] = (10));

} else {
var statearr_28487_28549 = state_28407__$1;
(statearr_28487_28549[(1)] = (11));

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
});})(c__19201__auto___28495,cs,m,dchan,dctr,done))
;
return ((function (switch__19136__auto__,c__19201__auto___28495,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19137__auto__ = null;
var cljs$core$async$mult_$_state_machine__19137__auto____0 = (function (){
var statearr_28491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28491[(0)] = cljs$core$async$mult_$_state_machine__19137__auto__);

(statearr_28491[(1)] = (1));

return statearr_28491;
});
var cljs$core$async$mult_$_state_machine__19137__auto____1 = (function (state_28407){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_28407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e28492){if((e28492 instanceof Object)){
var ex__19140__auto__ = e28492;
var statearr_28493_28550 = state_28407;
(statearr_28493_28550[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28551 = state_28407;
state_28407 = G__28551;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19137__auto__ = function(state_28407){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19137__auto____1.call(this,state_28407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19137__auto____0;
cljs$core$async$mult_$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19137__auto____1;
return cljs$core$async$mult_$_state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___28495,cs,m,dchan,dctr,done))
})();
var state__19203__auto__ = (function (){var statearr_28494 = f__19202__auto__.call(null);
(statearr_28494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___28495);

return statearr_28494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___28495,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28552 = [];
var len__7848__auto___28555 = arguments.length;
var i__7849__auto___28556 = (0);
while(true){
if((i__7849__auto___28556 < len__7848__auto___28555)){
args28552.push((arguments[i__7849__auto___28556]));

var G__28557 = (i__7849__auto___28556 + (1));
i__7849__auto___28556 = G__28557;
continue;
} else {
}
break;
}

var G__28554 = args28552.length;
switch (G__28554) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28552.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7436__auto__ = (((m == null))?null:m);
var m__7437__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,m,ch);
} else {
var m__7437__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7436__auto__ = (((m == null))?null:m);
var m__7437__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,m,ch);
} else {
var m__7437__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7436__auto__ = (((m == null))?null:m);
var m__7437__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,m);
} else {
var m__7437__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7436__auto__ = (((m == null))?null:m);
var m__7437__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,m,state_map);
} else {
var m__7437__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7436__auto__ = (((m == null))?null:m);
var m__7437__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,m,mode);
} else {
var m__7437__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7855__auto__ = [];
var len__7848__auto___28569 = arguments.length;
var i__7849__auto___28570 = (0);
while(true){
if((i__7849__auto___28570 < len__7848__auto___28569)){
args__7855__auto__.push((arguments[i__7849__auto___28570]));

var G__28571 = (i__7849__auto___28570 + (1));
i__7849__auto___28570 = G__28571;
continue;
} else {
}
break;
}

var argseq__7856__auto__ = ((((3) < args__7855__auto__.length))?(new cljs.core.IndexedSeq(args__7855__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7856__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28563){
var map__28564 = p__28563;
var map__28564__$1 = ((((!((map__28564 == null)))?((((map__28564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28564):map__28564);
var opts = map__28564__$1;
var statearr_28566_28572 = state;
(statearr_28566_28572[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28564,map__28564__$1,opts){
return (function (val){
var statearr_28567_28573 = state;
(statearr_28567_28573[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28564,map__28564__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28568_28574 = state;
(statearr_28568_28574[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28559){
var G__28560 = cljs.core.first.call(null,seq28559);
var seq28559__$1 = cljs.core.next.call(null,seq28559);
var G__28561 = cljs.core.first.call(null,seq28559__$1);
var seq28559__$2 = cljs.core.next.call(null,seq28559__$1);
var G__28562 = cljs.core.first.call(null,seq28559__$2);
var seq28559__$3 = cljs.core.next.call(null,seq28559__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28560,G__28561,G__28562,seq28559__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28740 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28740 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28741){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28741 = meta28741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28742,meta28741__$1){
var self__ = this;
var _28742__$1 = this;
return (new cljs.core.async.t_cljs$core$async28740(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28741__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28742){
var self__ = this;
var _28742__$1 = this;
return self__.meta28741;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28740.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28741","meta28741",750526068,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28740.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28740";

cljs.core.async.t_cljs$core$async28740.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7379__auto__,writer__7380__auto__,opt__7381__auto__){
return cljs.core._write.call(null,writer__7380__auto__,"cljs.core.async/t_cljs$core$async28740");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28740 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28740(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28741){
return (new cljs.core.async.t_cljs$core$async28740(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28741));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28740(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19201__auto___28905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___28905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___28905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28842){
var state_val_28843 = (state_28842[(1)]);
if((state_val_28843 === (7))){
var inst_28758 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28844_28906 = state_28842__$1;
(statearr_28844_28906[(2)] = inst_28758);

(statearr_28844_28906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (20))){
var inst_28770 = (state_28842[(7)]);
var state_28842__$1 = state_28842;
var statearr_28845_28907 = state_28842__$1;
(statearr_28845_28907[(2)] = inst_28770);

(statearr_28845_28907[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (27))){
var state_28842__$1 = state_28842;
var statearr_28846_28908 = state_28842__$1;
(statearr_28846_28908[(2)] = null);

(statearr_28846_28908[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (1))){
var inst_28746 = (state_28842[(8)]);
var inst_28746__$1 = calc_state.call(null);
var inst_28748 = (inst_28746__$1 == null);
var inst_28749 = cljs.core.not.call(null,inst_28748);
var state_28842__$1 = (function (){var statearr_28847 = state_28842;
(statearr_28847[(8)] = inst_28746__$1);

return statearr_28847;
})();
if(inst_28749){
var statearr_28848_28909 = state_28842__$1;
(statearr_28848_28909[(1)] = (2));

} else {
var statearr_28849_28910 = state_28842__$1;
(statearr_28849_28910[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (24))){
var inst_28793 = (state_28842[(9)]);
var inst_28816 = (state_28842[(10)]);
var inst_28802 = (state_28842[(11)]);
var inst_28816__$1 = inst_28793.call(null,inst_28802);
var state_28842__$1 = (function (){var statearr_28850 = state_28842;
(statearr_28850[(10)] = inst_28816__$1);

return statearr_28850;
})();
if(cljs.core.truth_(inst_28816__$1)){
var statearr_28851_28911 = state_28842__$1;
(statearr_28851_28911[(1)] = (29));

} else {
var statearr_28852_28912 = state_28842__$1;
(statearr_28852_28912[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (4))){
var inst_28761 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28761)){
var statearr_28853_28913 = state_28842__$1;
(statearr_28853_28913[(1)] = (8));

} else {
var statearr_28854_28914 = state_28842__$1;
(statearr_28854_28914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (15))){
var inst_28787 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28787)){
var statearr_28855_28915 = state_28842__$1;
(statearr_28855_28915[(1)] = (19));

} else {
var statearr_28856_28916 = state_28842__$1;
(statearr_28856_28916[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (21))){
var inst_28792 = (state_28842[(12)]);
var inst_28792__$1 = (state_28842[(2)]);
var inst_28793 = cljs.core.get.call(null,inst_28792__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28794 = cljs.core.get.call(null,inst_28792__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28795 = cljs.core.get.call(null,inst_28792__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28842__$1 = (function (){var statearr_28857 = state_28842;
(statearr_28857[(9)] = inst_28793);

(statearr_28857[(12)] = inst_28792__$1);

(statearr_28857[(13)] = inst_28794);

return statearr_28857;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28842__$1,(22),inst_28795);
} else {
if((state_val_28843 === (31))){
var inst_28824 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28824)){
var statearr_28858_28917 = state_28842__$1;
(statearr_28858_28917[(1)] = (32));

} else {
var statearr_28859_28918 = state_28842__$1;
(statearr_28859_28918[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (32))){
var inst_28801 = (state_28842[(14)]);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28842__$1,(35),out,inst_28801);
} else {
if((state_val_28843 === (33))){
var inst_28792 = (state_28842[(12)]);
var inst_28770 = inst_28792;
var state_28842__$1 = (function (){var statearr_28860 = state_28842;
(statearr_28860[(7)] = inst_28770);

return statearr_28860;
})();
var statearr_28861_28919 = state_28842__$1;
(statearr_28861_28919[(2)] = null);

(statearr_28861_28919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (13))){
var inst_28770 = (state_28842[(7)]);
var inst_28777 = inst_28770.cljs$lang$protocol_mask$partition0$;
var inst_28778 = (inst_28777 & (64));
var inst_28779 = inst_28770.cljs$core$ISeq$;
var inst_28780 = (inst_28778) || (inst_28779);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28780)){
var statearr_28862_28920 = state_28842__$1;
(statearr_28862_28920[(1)] = (16));

} else {
var statearr_28863_28921 = state_28842__$1;
(statearr_28863_28921[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (22))){
var inst_28801 = (state_28842[(14)]);
var inst_28802 = (state_28842[(11)]);
var inst_28800 = (state_28842[(2)]);
var inst_28801__$1 = cljs.core.nth.call(null,inst_28800,(0),null);
var inst_28802__$1 = cljs.core.nth.call(null,inst_28800,(1),null);
var inst_28803 = (inst_28801__$1 == null);
var inst_28804 = cljs.core._EQ_.call(null,inst_28802__$1,change);
var inst_28805 = (inst_28803) || (inst_28804);
var state_28842__$1 = (function (){var statearr_28864 = state_28842;
(statearr_28864[(14)] = inst_28801__$1);

(statearr_28864[(11)] = inst_28802__$1);

return statearr_28864;
})();
if(cljs.core.truth_(inst_28805)){
var statearr_28865_28922 = state_28842__$1;
(statearr_28865_28922[(1)] = (23));

} else {
var statearr_28866_28923 = state_28842__$1;
(statearr_28866_28923[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (36))){
var inst_28792 = (state_28842[(12)]);
var inst_28770 = inst_28792;
var state_28842__$1 = (function (){var statearr_28867 = state_28842;
(statearr_28867[(7)] = inst_28770);

return statearr_28867;
})();
var statearr_28868_28924 = state_28842__$1;
(statearr_28868_28924[(2)] = null);

(statearr_28868_28924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (29))){
var inst_28816 = (state_28842[(10)]);
var state_28842__$1 = state_28842;
var statearr_28869_28925 = state_28842__$1;
(statearr_28869_28925[(2)] = inst_28816);

(statearr_28869_28925[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (6))){
var state_28842__$1 = state_28842;
var statearr_28870_28926 = state_28842__$1;
(statearr_28870_28926[(2)] = false);

(statearr_28870_28926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (28))){
var inst_28812 = (state_28842[(2)]);
var inst_28813 = calc_state.call(null);
var inst_28770 = inst_28813;
var state_28842__$1 = (function (){var statearr_28871 = state_28842;
(statearr_28871[(15)] = inst_28812);

(statearr_28871[(7)] = inst_28770);

return statearr_28871;
})();
var statearr_28872_28927 = state_28842__$1;
(statearr_28872_28927[(2)] = null);

(statearr_28872_28927[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (25))){
var inst_28838 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28873_28928 = state_28842__$1;
(statearr_28873_28928[(2)] = inst_28838);

(statearr_28873_28928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (34))){
var inst_28836 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28874_28929 = state_28842__$1;
(statearr_28874_28929[(2)] = inst_28836);

(statearr_28874_28929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (17))){
var state_28842__$1 = state_28842;
var statearr_28875_28930 = state_28842__$1;
(statearr_28875_28930[(2)] = false);

(statearr_28875_28930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (3))){
var state_28842__$1 = state_28842;
var statearr_28876_28931 = state_28842__$1;
(statearr_28876_28931[(2)] = false);

(statearr_28876_28931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (12))){
var inst_28840 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28842__$1,inst_28840);
} else {
if((state_val_28843 === (2))){
var inst_28746 = (state_28842[(8)]);
var inst_28751 = inst_28746.cljs$lang$protocol_mask$partition0$;
var inst_28752 = (inst_28751 & (64));
var inst_28753 = inst_28746.cljs$core$ISeq$;
var inst_28754 = (inst_28752) || (inst_28753);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28754)){
var statearr_28877_28932 = state_28842__$1;
(statearr_28877_28932[(1)] = (5));

} else {
var statearr_28878_28933 = state_28842__$1;
(statearr_28878_28933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (23))){
var inst_28801 = (state_28842[(14)]);
var inst_28807 = (inst_28801 == null);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28807)){
var statearr_28879_28934 = state_28842__$1;
(statearr_28879_28934[(1)] = (26));

} else {
var statearr_28880_28935 = state_28842__$1;
(statearr_28880_28935[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (35))){
var inst_28827 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28827)){
var statearr_28881_28936 = state_28842__$1;
(statearr_28881_28936[(1)] = (36));

} else {
var statearr_28882_28937 = state_28842__$1;
(statearr_28882_28937[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (19))){
var inst_28770 = (state_28842[(7)]);
var inst_28789 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28770);
var state_28842__$1 = state_28842;
var statearr_28883_28938 = state_28842__$1;
(statearr_28883_28938[(2)] = inst_28789);

(statearr_28883_28938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (11))){
var inst_28770 = (state_28842[(7)]);
var inst_28774 = (inst_28770 == null);
var inst_28775 = cljs.core.not.call(null,inst_28774);
var state_28842__$1 = state_28842;
if(inst_28775){
var statearr_28884_28939 = state_28842__$1;
(statearr_28884_28939[(1)] = (13));

} else {
var statearr_28885_28940 = state_28842__$1;
(statearr_28885_28940[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (9))){
var inst_28746 = (state_28842[(8)]);
var state_28842__$1 = state_28842;
var statearr_28886_28941 = state_28842__$1;
(statearr_28886_28941[(2)] = inst_28746);

(statearr_28886_28941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (5))){
var state_28842__$1 = state_28842;
var statearr_28887_28942 = state_28842__$1;
(statearr_28887_28942[(2)] = true);

(statearr_28887_28942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (14))){
var state_28842__$1 = state_28842;
var statearr_28888_28943 = state_28842__$1;
(statearr_28888_28943[(2)] = false);

(statearr_28888_28943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (26))){
var inst_28802 = (state_28842[(11)]);
var inst_28809 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28802);
var state_28842__$1 = state_28842;
var statearr_28889_28944 = state_28842__$1;
(statearr_28889_28944[(2)] = inst_28809);

(statearr_28889_28944[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (16))){
var state_28842__$1 = state_28842;
var statearr_28890_28945 = state_28842__$1;
(statearr_28890_28945[(2)] = true);

(statearr_28890_28945[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (38))){
var inst_28832 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28891_28946 = state_28842__$1;
(statearr_28891_28946[(2)] = inst_28832);

(statearr_28891_28946[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (30))){
var inst_28793 = (state_28842[(9)]);
var inst_28802 = (state_28842[(11)]);
var inst_28794 = (state_28842[(13)]);
var inst_28819 = cljs.core.empty_QMARK_.call(null,inst_28793);
var inst_28820 = inst_28794.call(null,inst_28802);
var inst_28821 = cljs.core.not.call(null,inst_28820);
var inst_28822 = (inst_28819) && (inst_28821);
var state_28842__$1 = state_28842;
var statearr_28892_28947 = state_28842__$1;
(statearr_28892_28947[(2)] = inst_28822);

(statearr_28892_28947[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (10))){
var inst_28746 = (state_28842[(8)]);
var inst_28766 = (state_28842[(2)]);
var inst_28767 = cljs.core.get.call(null,inst_28766,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28768 = cljs.core.get.call(null,inst_28766,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28769 = cljs.core.get.call(null,inst_28766,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28770 = inst_28746;
var state_28842__$1 = (function (){var statearr_28893 = state_28842;
(statearr_28893[(7)] = inst_28770);

(statearr_28893[(16)] = inst_28769);

(statearr_28893[(17)] = inst_28768);

(statearr_28893[(18)] = inst_28767);

return statearr_28893;
})();
var statearr_28894_28948 = state_28842__$1;
(statearr_28894_28948[(2)] = null);

(statearr_28894_28948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (18))){
var inst_28784 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28895_28949 = state_28842__$1;
(statearr_28895_28949[(2)] = inst_28784);

(statearr_28895_28949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (37))){
var state_28842__$1 = state_28842;
var statearr_28896_28950 = state_28842__$1;
(statearr_28896_28950[(2)] = null);

(statearr_28896_28950[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (8))){
var inst_28746 = (state_28842[(8)]);
var inst_28763 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28746);
var state_28842__$1 = state_28842;
var statearr_28897_28951 = state_28842__$1;
(statearr_28897_28951[(2)] = inst_28763);

(statearr_28897_28951[(1)] = (10));


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
}
}
}
}
}
}
});})(c__19201__auto___28905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19136__auto__,c__19201__auto___28905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19137__auto__ = null;
var cljs$core$async$mix_$_state_machine__19137__auto____0 = (function (){
var statearr_28901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28901[(0)] = cljs$core$async$mix_$_state_machine__19137__auto__);

(statearr_28901[(1)] = (1));

return statearr_28901;
});
var cljs$core$async$mix_$_state_machine__19137__auto____1 = (function (state_28842){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_28842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e28902){if((e28902 instanceof Object)){
var ex__19140__auto__ = e28902;
var statearr_28903_28952 = state_28842;
(statearr_28903_28952[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28953 = state_28842;
state_28842 = G__28953;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19137__auto__ = function(state_28842){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19137__auto____1.call(this,state_28842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19137__auto____0;
cljs$core$async$mix_$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19137__auto____1;
return cljs$core$async$mix_$_state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___28905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19203__auto__ = (function (){var statearr_28904 = f__19202__auto__.call(null);
(statearr_28904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___28905);

return statearr_28904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___28905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7436__auto__ = (((p == null))?null:p);
var m__7437__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7437__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7436__auto__ = (((p == null))?null:p);
var m__7437__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,p,v,ch);
} else {
var m__7437__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28954 = [];
var len__7848__auto___28957 = arguments.length;
var i__7849__auto___28958 = (0);
while(true){
if((i__7849__auto___28958 < len__7848__auto___28957)){
args28954.push((arguments[i__7849__auto___28958]));

var G__28959 = (i__7849__auto___28958 + (1));
i__7849__auto___28958 = G__28959;
continue;
} else {
}
break;
}

var G__28956 = args28954.length;
switch (G__28956) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28954.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7436__auto__ = (((p == null))?null:p);
var m__7437__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,p);
} else {
var m__7437__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7436__auto__ = (((p == null))?null:p);
var m__7437__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7436__auto__)]);
if(!((m__7437__auto__ == null))){
return m__7437__auto__.call(null,p,v);
} else {
var m__7437__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7437__auto____$1 == null))){
return m__7437__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28962 = [];
var len__7848__auto___29087 = arguments.length;
var i__7849__auto___29088 = (0);
while(true){
if((i__7849__auto___29088 < len__7848__auto___29087)){
args28962.push((arguments[i__7849__auto___29088]));

var G__29089 = (i__7849__auto___29088 + (1));
i__7849__auto___29088 = G__29089;
continue;
} else {
}
break;
}

var G__28964 = args28962.length;
switch (G__28964) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28962.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6773__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6773__auto__)){
return or__6773__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6773__auto__,mults){
return (function (p1__28961_SHARP_){
if(cljs.core.truth_(p1__28961_SHARP_.call(null,topic))){
return p1__28961_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28961_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6773__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28965 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28966){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28966 = meta28966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28967,meta28966__$1){
var self__ = this;
var _28967__$1 = this;
return (new cljs.core.async.t_cljs$core$async28965(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28966__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28967){
var self__ = this;
var _28967__$1 = this;
return self__.meta28966;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28965.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28965.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28965.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28965.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28965.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28965.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28965.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28966","meta28966",1457443707,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28965";

cljs.core.async.t_cljs$core$async28965.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7379__auto__,writer__7380__auto__,opt__7381__auto__){
return cljs.core._write.call(null,writer__7380__auto__,"cljs.core.async/t_cljs$core$async28965");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28965 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28965(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28966){
return (new cljs.core.async.t_cljs$core$async28965(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28966));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28965(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19201__auto___29091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___29091,mults,ensure_mult,p){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___29091,mults,ensure_mult,p){
return (function (state_29039){
var state_val_29040 = (state_29039[(1)]);
if((state_val_29040 === (7))){
var inst_29035 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
var statearr_29041_29092 = state_29039__$1;
(statearr_29041_29092[(2)] = inst_29035);

(statearr_29041_29092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (20))){
var state_29039__$1 = state_29039;
var statearr_29042_29093 = state_29039__$1;
(statearr_29042_29093[(2)] = null);

(statearr_29042_29093[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (1))){
var state_29039__$1 = state_29039;
var statearr_29043_29094 = state_29039__$1;
(statearr_29043_29094[(2)] = null);

(statearr_29043_29094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (24))){
var inst_29018 = (state_29039[(7)]);
var inst_29027 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29018);
var state_29039__$1 = state_29039;
var statearr_29044_29095 = state_29039__$1;
(statearr_29044_29095[(2)] = inst_29027);

(statearr_29044_29095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (4))){
var inst_28970 = (state_29039[(8)]);
var inst_28970__$1 = (state_29039[(2)]);
var inst_28971 = (inst_28970__$1 == null);
var state_29039__$1 = (function (){var statearr_29045 = state_29039;
(statearr_29045[(8)] = inst_28970__$1);

return statearr_29045;
})();
if(cljs.core.truth_(inst_28971)){
var statearr_29046_29096 = state_29039__$1;
(statearr_29046_29096[(1)] = (5));

} else {
var statearr_29047_29097 = state_29039__$1;
(statearr_29047_29097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (15))){
var inst_29012 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
var statearr_29048_29098 = state_29039__$1;
(statearr_29048_29098[(2)] = inst_29012);

(statearr_29048_29098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (21))){
var inst_29032 = (state_29039[(2)]);
var state_29039__$1 = (function (){var statearr_29049 = state_29039;
(statearr_29049[(9)] = inst_29032);

return statearr_29049;
})();
var statearr_29050_29099 = state_29039__$1;
(statearr_29050_29099[(2)] = null);

(statearr_29050_29099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (13))){
var inst_28994 = (state_29039[(10)]);
var inst_28996 = cljs.core.chunked_seq_QMARK_.call(null,inst_28994);
var state_29039__$1 = state_29039;
if(inst_28996){
var statearr_29051_29100 = state_29039__$1;
(statearr_29051_29100[(1)] = (16));

} else {
var statearr_29052_29101 = state_29039__$1;
(statearr_29052_29101[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (22))){
var inst_29024 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
if(cljs.core.truth_(inst_29024)){
var statearr_29053_29102 = state_29039__$1;
(statearr_29053_29102[(1)] = (23));

} else {
var statearr_29054_29103 = state_29039__$1;
(statearr_29054_29103[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (6))){
var inst_29018 = (state_29039[(7)]);
var inst_28970 = (state_29039[(8)]);
var inst_29020 = (state_29039[(11)]);
var inst_29018__$1 = topic_fn.call(null,inst_28970);
var inst_29019 = cljs.core.deref.call(null,mults);
var inst_29020__$1 = cljs.core.get.call(null,inst_29019,inst_29018__$1);
var state_29039__$1 = (function (){var statearr_29055 = state_29039;
(statearr_29055[(7)] = inst_29018__$1);

(statearr_29055[(11)] = inst_29020__$1);

return statearr_29055;
})();
if(cljs.core.truth_(inst_29020__$1)){
var statearr_29056_29104 = state_29039__$1;
(statearr_29056_29104[(1)] = (19));

} else {
var statearr_29057_29105 = state_29039__$1;
(statearr_29057_29105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (25))){
var inst_29029 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
var statearr_29058_29106 = state_29039__$1;
(statearr_29058_29106[(2)] = inst_29029);

(statearr_29058_29106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (17))){
var inst_28994 = (state_29039[(10)]);
var inst_29003 = cljs.core.first.call(null,inst_28994);
var inst_29004 = cljs.core.async.muxch_STAR_.call(null,inst_29003);
var inst_29005 = cljs.core.async.close_BANG_.call(null,inst_29004);
var inst_29006 = cljs.core.next.call(null,inst_28994);
var inst_28980 = inst_29006;
var inst_28981 = null;
var inst_28982 = (0);
var inst_28983 = (0);
var state_29039__$1 = (function (){var statearr_29059 = state_29039;
(statearr_29059[(12)] = inst_28983);

(statearr_29059[(13)] = inst_28982);

(statearr_29059[(14)] = inst_29005);

(statearr_29059[(15)] = inst_28980);

(statearr_29059[(16)] = inst_28981);

return statearr_29059;
})();
var statearr_29060_29107 = state_29039__$1;
(statearr_29060_29107[(2)] = null);

(statearr_29060_29107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (3))){
var inst_29037 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29039__$1,inst_29037);
} else {
if((state_val_29040 === (12))){
var inst_29014 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
var statearr_29061_29108 = state_29039__$1;
(statearr_29061_29108[(2)] = inst_29014);

(statearr_29061_29108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (2))){
var state_29039__$1 = state_29039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29039__$1,(4),ch);
} else {
if((state_val_29040 === (23))){
var state_29039__$1 = state_29039;
var statearr_29062_29109 = state_29039__$1;
(statearr_29062_29109[(2)] = null);

(statearr_29062_29109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (19))){
var inst_28970 = (state_29039[(8)]);
var inst_29020 = (state_29039[(11)]);
var inst_29022 = cljs.core.async.muxch_STAR_.call(null,inst_29020);
var state_29039__$1 = state_29039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29039__$1,(22),inst_29022,inst_28970);
} else {
if((state_val_29040 === (11))){
var inst_28994 = (state_29039[(10)]);
var inst_28980 = (state_29039[(15)]);
var inst_28994__$1 = cljs.core.seq.call(null,inst_28980);
var state_29039__$1 = (function (){var statearr_29063 = state_29039;
(statearr_29063[(10)] = inst_28994__$1);

return statearr_29063;
})();
if(inst_28994__$1){
var statearr_29064_29110 = state_29039__$1;
(statearr_29064_29110[(1)] = (13));

} else {
var statearr_29065_29111 = state_29039__$1;
(statearr_29065_29111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (9))){
var inst_29016 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
var statearr_29066_29112 = state_29039__$1;
(statearr_29066_29112[(2)] = inst_29016);

(statearr_29066_29112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (5))){
var inst_28977 = cljs.core.deref.call(null,mults);
var inst_28978 = cljs.core.vals.call(null,inst_28977);
var inst_28979 = cljs.core.seq.call(null,inst_28978);
var inst_28980 = inst_28979;
var inst_28981 = null;
var inst_28982 = (0);
var inst_28983 = (0);
var state_29039__$1 = (function (){var statearr_29067 = state_29039;
(statearr_29067[(12)] = inst_28983);

(statearr_29067[(13)] = inst_28982);

(statearr_29067[(15)] = inst_28980);

(statearr_29067[(16)] = inst_28981);

return statearr_29067;
})();
var statearr_29068_29113 = state_29039__$1;
(statearr_29068_29113[(2)] = null);

(statearr_29068_29113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (14))){
var state_29039__$1 = state_29039;
var statearr_29072_29114 = state_29039__$1;
(statearr_29072_29114[(2)] = null);

(statearr_29072_29114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (16))){
var inst_28994 = (state_29039[(10)]);
var inst_28998 = cljs.core.chunk_first.call(null,inst_28994);
var inst_28999 = cljs.core.chunk_rest.call(null,inst_28994);
var inst_29000 = cljs.core.count.call(null,inst_28998);
var inst_28980 = inst_28999;
var inst_28981 = inst_28998;
var inst_28982 = inst_29000;
var inst_28983 = (0);
var state_29039__$1 = (function (){var statearr_29073 = state_29039;
(statearr_29073[(12)] = inst_28983);

(statearr_29073[(13)] = inst_28982);

(statearr_29073[(15)] = inst_28980);

(statearr_29073[(16)] = inst_28981);

return statearr_29073;
})();
var statearr_29074_29115 = state_29039__$1;
(statearr_29074_29115[(2)] = null);

(statearr_29074_29115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (10))){
var inst_28983 = (state_29039[(12)]);
var inst_28982 = (state_29039[(13)]);
var inst_28980 = (state_29039[(15)]);
var inst_28981 = (state_29039[(16)]);
var inst_28988 = cljs.core._nth.call(null,inst_28981,inst_28983);
var inst_28989 = cljs.core.async.muxch_STAR_.call(null,inst_28988);
var inst_28990 = cljs.core.async.close_BANG_.call(null,inst_28989);
var inst_28991 = (inst_28983 + (1));
var tmp29069 = inst_28982;
var tmp29070 = inst_28980;
var tmp29071 = inst_28981;
var inst_28980__$1 = tmp29070;
var inst_28981__$1 = tmp29071;
var inst_28982__$1 = tmp29069;
var inst_28983__$1 = inst_28991;
var state_29039__$1 = (function (){var statearr_29075 = state_29039;
(statearr_29075[(12)] = inst_28983__$1);

(statearr_29075[(13)] = inst_28982__$1);

(statearr_29075[(15)] = inst_28980__$1);

(statearr_29075[(17)] = inst_28990);

(statearr_29075[(16)] = inst_28981__$1);

return statearr_29075;
})();
var statearr_29076_29116 = state_29039__$1;
(statearr_29076_29116[(2)] = null);

(statearr_29076_29116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (18))){
var inst_29009 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
var statearr_29077_29117 = state_29039__$1;
(statearr_29077_29117[(2)] = inst_29009);

(statearr_29077_29117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (8))){
var inst_28983 = (state_29039[(12)]);
var inst_28982 = (state_29039[(13)]);
var inst_28985 = (inst_28983 < inst_28982);
var inst_28986 = inst_28985;
var state_29039__$1 = state_29039;
if(cljs.core.truth_(inst_28986)){
var statearr_29078_29118 = state_29039__$1;
(statearr_29078_29118[(1)] = (10));

} else {
var statearr_29079_29119 = state_29039__$1;
(statearr_29079_29119[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
});})(c__19201__auto___29091,mults,ensure_mult,p))
;
return ((function (switch__19136__auto__,c__19201__auto___29091,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19137__auto__ = null;
var cljs$core$async$state_machine__19137__auto____0 = (function (){
var statearr_29083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29083[(0)] = cljs$core$async$state_machine__19137__auto__);

(statearr_29083[(1)] = (1));

return statearr_29083;
});
var cljs$core$async$state_machine__19137__auto____1 = (function (state_29039){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_29039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e29084){if((e29084 instanceof Object)){
var ex__19140__auto__ = e29084;
var statearr_29085_29120 = state_29039;
(statearr_29085_29120[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29121 = state_29039;
state_29039 = G__29121;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$state_machine__19137__auto__ = function(state_29039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19137__auto____1.call(this,state_29039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19137__auto____0;
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19137__auto____1;
return cljs$core$async$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___29091,mults,ensure_mult,p))
})();
var state__19203__auto__ = (function (){var statearr_29086 = f__19202__auto__.call(null);
(statearr_29086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___29091);

return statearr_29086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___29091,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29122 = [];
var len__7848__auto___29125 = arguments.length;
var i__7849__auto___29126 = (0);
while(true){
if((i__7849__auto___29126 < len__7848__auto___29125)){
args29122.push((arguments[i__7849__auto___29126]));

var G__29127 = (i__7849__auto___29126 + (1));
i__7849__auto___29126 = G__29127;
continue;
} else {
}
break;
}

var G__29124 = args29122.length;
switch (G__29124) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29122.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29129 = [];
var len__7848__auto___29132 = arguments.length;
var i__7849__auto___29133 = (0);
while(true){
if((i__7849__auto___29133 < len__7848__auto___29132)){
args29129.push((arguments[i__7849__auto___29133]));

var G__29134 = (i__7849__auto___29133 + (1));
i__7849__auto___29133 = G__29134;
continue;
} else {
}
break;
}

var G__29131 = args29129.length;
switch (G__29131) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29129.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29136 = [];
var len__7848__auto___29207 = arguments.length;
var i__7849__auto___29208 = (0);
while(true){
if((i__7849__auto___29208 < len__7848__auto___29207)){
args29136.push((arguments[i__7849__auto___29208]));

var G__29209 = (i__7849__auto___29208 + (1));
i__7849__auto___29208 = G__29209;
continue;
} else {
}
break;
}

var G__29138 = args29136.length;
switch (G__29138) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29136.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19201__auto___29211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___29211,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___29211,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29177){
var state_val_29178 = (state_29177[(1)]);
if((state_val_29178 === (7))){
var state_29177__$1 = state_29177;
var statearr_29179_29212 = state_29177__$1;
(statearr_29179_29212[(2)] = null);

(statearr_29179_29212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29178 === (1))){
var state_29177__$1 = state_29177;
var statearr_29180_29213 = state_29177__$1;
(statearr_29180_29213[(2)] = null);

(statearr_29180_29213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29178 === (4))){
var inst_29141 = (state_29177[(7)]);
var inst_29143 = (inst_29141 < cnt);
var state_29177__$1 = state_29177;
if(cljs.core.truth_(inst_29143)){
var statearr_29181_29214 = state_29177__$1;
(statearr_29181_29214[(1)] = (6));

} else {
var statearr_29182_29215 = state_29177__$1;
(statearr_29182_29215[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29178 === (15))){
var inst_29173 = (state_29177[(2)]);
var state_29177__$1 = state_29177;
var statearr_29183_29216 = state_29177__$1;
(statearr_29183_29216[(2)] = inst_29173);

(statearr_29183_29216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29178 === (13))){
var inst_29166 = cljs.core.async.close_BANG_.call(null,out);
var state_29177__$1 = state_29177;
var statearr_29184_29217 = state_29177__$1;
(statearr_29184_29217[(2)] = inst_29166);

(statearr_29184_29217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29178 === (6))){
var state_29177__$1 = state_29177;
var statearr_29185_29218 = state_29177__$1;
(statearr_29185_29218[(2)] = null);

(statearr_29185_29218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29178 === (3))){
var inst_29175 = (state_29177[(2)]);
var state_29177__$1 = state_29177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29177__$1,inst_29175);
} else {
if((state_val_29178 === (12))){
var inst_29163 = (state_29177[(8)]);
var inst_29163__$1 = (state_29177[(2)]);
var inst_29164 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29163__$1);
var state_29177__$1 = (function (){var statearr_29186 = state_29177;
(statearr_29186[(8)] = inst_29163__$1);

return statearr_29186;
})();
if(cljs.core.truth_(inst_29164)){
var statearr_29187_29219 = state_29177__$1;
(statearr_29187_29219[(1)] = (13));

} else {
var statearr_29188_29220 = state_29177__$1;
(statearr_29188_29220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29178 === (2))){
var inst_29140 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29141 = (0);
var state_29177__$1 = (function (){var statearr_29189 = state_29177;
(statearr_29189[(9)] = inst_29140);

(statearr_29189[(7)] = inst_29141);

return statearr_29189;
})();
var statearr_29190_29221 = state_29177__$1;
(statearr_29190_29221[(2)] = null);

(statearr_29190_29221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29178 === (11))){
var inst_29141 = (state_29177[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29177,(10),Object,null,(9));
var inst_29150 = chs__$1.call(null,inst_29141);
var inst_29151 = done.call(null,inst_29141);
var inst_29152 = cljs.core.async.take_BANG_.call(null,inst_29150,inst_29151);
var state_29177__$1 = state_29177;
var statearr_29191_29222 = state_29177__$1;
(statearr_29191_29222[(2)] = inst_29152);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29177__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29178 === (9))){
var inst_29141 = (state_29177[(7)]);
var inst_29154 = (state_29177[(2)]);
var inst_29155 = (inst_29141 + (1));
var inst_29141__$1 = inst_29155;
var state_29177__$1 = (function (){var statearr_29192 = state_29177;
(statearr_29192[(7)] = inst_29141__$1);

(statearr_29192[(10)] = inst_29154);

return statearr_29192;
})();
var statearr_29193_29223 = state_29177__$1;
(statearr_29193_29223[(2)] = null);

(statearr_29193_29223[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29178 === (5))){
var inst_29161 = (state_29177[(2)]);
var state_29177__$1 = (function (){var statearr_29194 = state_29177;
(statearr_29194[(11)] = inst_29161);

return statearr_29194;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29177__$1,(12),dchan);
} else {
if((state_val_29178 === (14))){
var inst_29163 = (state_29177[(8)]);
var inst_29168 = cljs.core.apply.call(null,f,inst_29163);
var state_29177__$1 = state_29177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29177__$1,(16),out,inst_29168);
} else {
if((state_val_29178 === (16))){
var inst_29170 = (state_29177[(2)]);
var state_29177__$1 = (function (){var statearr_29195 = state_29177;
(statearr_29195[(12)] = inst_29170);

return statearr_29195;
})();
var statearr_29196_29224 = state_29177__$1;
(statearr_29196_29224[(2)] = null);

(statearr_29196_29224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29178 === (10))){
var inst_29145 = (state_29177[(2)]);
var inst_29146 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29177__$1 = (function (){var statearr_29197 = state_29177;
(statearr_29197[(13)] = inst_29145);

return statearr_29197;
})();
var statearr_29198_29225 = state_29177__$1;
(statearr_29198_29225[(2)] = inst_29146);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29177__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29178 === (8))){
var inst_29159 = (state_29177[(2)]);
var state_29177__$1 = state_29177;
var statearr_29199_29226 = state_29177__$1;
(statearr_29199_29226[(2)] = inst_29159);

(statearr_29199_29226[(1)] = (5));


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
});})(c__19201__auto___29211,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19136__auto__,c__19201__auto___29211,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19137__auto__ = null;
var cljs$core$async$state_machine__19137__auto____0 = (function (){
var statearr_29203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29203[(0)] = cljs$core$async$state_machine__19137__auto__);

(statearr_29203[(1)] = (1));

return statearr_29203;
});
var cljs$core$async$state_machine__19137__auto____1 = (function (state_29177){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_29177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e29204){if((e29204 instanceof Object)){
var ex__19140__auto__ = e29204;
var statearr_29205_29227 = state_29177;
(statearr_29205_29227[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29228 = state_29177;
state_29177 = G__29228;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$state_machine__19137__auto__ = function(state_29177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19137__auto____1.call(this,state_29177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19137__auto____0;
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19137__auto____1;
return cljs$core$async$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___29211,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19203__auto__ = (function (){var statearr_29206 = f__19202__auto__.call(null);
(statearr_29206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___29211);

return statearr_29206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___29211,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29230 = [];
var len__7848__auto___29288 = arguments.length;
var i__7849__auto___29289 = (0);
while(true){
if((i__7849__auto___29289 < len__7848__auto___29288)){
args29230.push((arguments[i__7849__auto___29289]));

var G__29290 = (i__7849__auto___29289 + (1));
i__7849__auto___29289 = G__29290;
continue;
} else {
}
break;
}

var G__29232 = args29230.length;
switch (G__29232) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29230.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19201__auto___29292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___29292,out){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___29292,out){
return (function (state_29264){
var state_val_29265 = (state_29264[(1)]);
if((state_val_29265 === (7))){
var inst_29244 = (state_29264[(7)]);
var inst_29243 = (state_29264[(8)]);
var inst_29243__$1 = (state_29264[(2)]);
var inst_29244__$1 = cljs.core.nth.call(null,inst_29243__$1,(0),null);
var inst_29245 = cljs.core.nth.call(null,inst_29243__$1,(1),null);
var inst_29246 = (inst_29244__$1 == null);
var state_29264__$1 = (function (){var statearr_29266 = state_29264;
(statearr_29266[(7)] = inst_29244__$1);

(statearr_29266[(9)] = inst_29245);

(statearr_29266[(8)] = inst_29243__$1);

return statearr_29266;
})();
if(cljs.core.truth_(inst_29246)){
var statearr_29267_29293 = state_29264__$1;
(statearr_29267_29293[(1)] = (8));

} else {
var statearr_29268_29294 = state_29264__$1;
(statearr_29268_29294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (1))){
var inst_29233 = cljs.core.vec.call(null,chs);
var inst_29234 = inst_29233;
var state_29264__$1 = (function (){var statearr_29269 = state_29264;
(statearr_29269[(10)] = inst_29234);

return statearr_29269;
})();
var statearr_29270_29295 = state_29264__$1;
(statearr_29270_29295[(2)] = null);

(statearr_29270_29295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (4))){
var inst_29234 = (state_29264[(10)]);
var state_29264__$1 = state_29264;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29264__$1,(7),inst_29234);
} else {
if((state_val_29265 === (6))){
var inst_29260 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
var statearr_29271_29296 = state_29264__$1;
(statearr_29271_29296[(2)] = inst_29260);

(statearr_29271_29296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (3))){
var inst_29262 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29264__$1,inst_29262);
} else {
if((state_val_29265 === (2))){
var inst_29234 = (state_29264[(10)]);
var inst_29236 = cljs.core.count.call(null,inst_29234);
var inst_29237 = (inst_29236 > (0));
var state_29264__$1 = state_29264;
if(cljs.core.truth_(inst_29237)){
var statearr_29273_29297 = state_29264__$1;
(statearr_29273_29297[(1)] = (4));

} else {
var statearr_29274_29298 = state_29264__$1;
(statearr_29274_29298[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (11))){
var inst_29234 = (state_29264[(10)]);
var inst_29253 = (state_29264[(2)]);
var tmp29272 = inst_29234;
var inst_29234__$1 = tmp29272;
var state_29264__$1 = (function (){var statearr_29275 = state_29264;
(statearr_29275[(10)] = inst_29234__$1);

(statearr_29275[(11)] = inst_29253);

return statearr_29275;
})();
var statearr_29276_29299 = state_29264__$1;
(statearr_29276_29299[(2)] = null);

(statearr_29276_29299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (9))){
var inst_29244 = (state_29264[(7)]);
var state_29264__$1 = state_29264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29264__$1,(11),out,inst_29244);
} else {
if((state_val_29265 === (5))){
var inst_29258 = cljs.core.async.close_BANG_.call(null,out);
var state_29264__$1 = state_29264;
var statearr_29277_29300 = state_29264__$1;
(statearr_29277_29300[(2)] = inst_29258);

(statearr_29277_29300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (10))){
var inst_29256 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
var statearr_29278_29301 = state_29264__$1;
(statearr_29278_29301[(2)] = inst_29256);

(statearr_29278_29301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (8))){
var inst_29244 = (state_29264[(7)]);
var inst_29245 = (state_29264[(9)]);
var inst_29243 = (state_29264[(8)]);
var inst_29234 = (state_29264[(10)]);
var inst_29248 = (function (){var cs = inst_29234;
var vec__29239 = inst_29243;
var v = inst_29244;
var c = inst_29245;
return ((function (cs,vec__29239,v,c,inst_29244,inst_29245,inst_29243,inst_29234,state_val_29265,c__19201__auto___29292,out){
return (function (p1__29229_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29229_SHARP_);
});
;})(cs,vec__29239,v,c,inst_29244,inst_29245,inst_29243,inst_29234,state_val_29265,c__19201__auto___29292,out))
})();
var inst_29249 = cljs.core.filterv.call(null,inst_29248,inst_29234);
var inst_29234__$1 = inst_29249;
var state_29264__$1 = (function (){var statearr_29279 = state_29264;
(statearr_29279[(10)] = inst_29234__$1);

return statearr_29279;
})();
var statearr_29280_29302 = state_29264__$1;
(statearr_29280_29302[(2)] = null);

(statearr_29280_29302[(1)] = (2));


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
});})(c__19201__auto___29292,out))
;
return ((function (switch__19136__auto__,c__19201__auto___29292,out){
return (function() {
var cljs$core$async$state_machine__19137__auto__ = null;
var cljs$core$async$state_machine__19137__auto____0 = (function (){
var statearr_29284 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29284[(0)] = cljs$core$async$state_machine__19137__auto__);

(statearr_29284[(1)] = (1));

return statearr_29284;
});
var cljs$core$async$state_machine__19137__auto____1 = (function (state_29264){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_29264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e29285){if((e29285 instanceof Object)){
var ex__19140__auto__ = e29285;
var statearr_29286_29303 = state_29264;
(statearr_29286_29303[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29304 = state_29264;
state_29264 = G__29304;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$state_machine__19137__auto__ = function(state_29264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19137__auto____1.call(this,state_29264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19137__auto____0;
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19137__auto____1;
return cljs$core$async$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___29292,out))
})();
var state__19203__auto__ = (function (){var statearr_29287 = f__19202__auto__.call(null);
(statearr_29287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___29292);

return statearr_29287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___29292,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29305 = [];
var len__7848__auto___29354 = arguments.length;
var i__7849__auto___29355 = (0);
while(true){
if((i__7849__auto___29355 < len__7848__auto___29354)){
args29305.push((arguments[i__7849__auto___29355]));

var G__29356 = (i__7849__auto___29355 + (1));
i__7849__auto___29355 = G__29356;
continue;
} else {
}
break;
}

var G__29307 = args29305.length;
switch (G__29307) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29305.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19201__auto___29358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___29358,out){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___29358,out){
return (function (state_29331){
var state_val_29332 = (state_29331[(1)]);
if((state_val_29332 === (7))){
var inst_29313 = (state_29331[(7)]);
var inst_29313__$1 = (state_29331[(2)]);
var inst_29314 = (inst_29313__$1 == null);
var inst_29315 = cljs.core.not.call(null,inst_29314);
var state_29331__$1 = (function (){var statearr_29333 = state_29331;
(statearr_29333[(7)] = inst_29313__$1);

return statearr_29333;
})();
if(inst_29315){
var statearr_29334_29359 = state_29331__$1;
(statearr_29334_29359[(1)] = (8));

} else {
var statearr_29335_29360 = state_29331__$1;
(statearr_29335_29360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29332 === (1))){
var inst_29308 = (0);
var state_29331__$1 = (function (){var statearr_29336 = state_29331;
(statearr_29336[(8)] = inst_29308);

return statearr_29336;
})();
var statearr_29337_29361 = state_29331__$1;
(statearr_29337_29361[(2)] = null);

(statearr_29337_29361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29332 === (4))){
var state_29331__$1 = state_29331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29331__$1,(7),ch);
} else {
if((state_val_29332 === (6))){
var inst_29326 = (state_29331[(2)]);
var state_29331__$1 = state_29331;
var statearr_29338_29362 = state_29331__$1;
(statearr_29338_29362[(2)] = inst_29326);

(statearr_29338_29362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29332 === (3))){
var inst_29328 = (state_29331[(2)]);
var inst_29329 = cljs.core.async.close_BANG_.call(null,out);
var state_29331__$1 = (function (){var statearr_29339 = state_29331;
(statearr_29339[(9)] = inst_29328);

return statearr_29339;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29331__$1,inst_29329);
} else {
if((state_val_29332 === (2))){
var inst_29308 = (state_29331[(8)]);
var inst_29310 = (inst_29308 < n);
var state_29331__$1 = state_29331;
if(cljs.core.truth_(inst_29310)){
var statearr_29340_29363 = state_29331__$1;
(statearr_29340_29363[(1)] = (4));

} else {
var statearr_29341_29364 = state_29331__$1;
(statearr_29341_29364[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29332 === (11))){
var inst_29308 = (state_29331[(8)]);
var inst_29318 = (state_29331[(2)]);
var inst_29319 = (inst_29308 + (1));
var inst_29308__$1 = inst_29319;
var state_29331__$1 = (function (){var statearr_29342 = state_29331;
(statearr_29342[(10)] = inst_29318);

(statearr_29342[(8)] = inst_29308__$1);

return statearr_29342;
})();
var statearr_29343_29365 = state_29331__$1;
(statearr_29343_29365[(2)] = null);

(statearr_29343_29365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29332 === (9))){
var state_29331__$1 = state_29331;
var statearr_29344_29366 = state_29331__$1;
(statearr_29344_29366[(2)] = null);

(statearr_29344_29366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29332 === (5))){
var state_29331__$1 = state_29331;
var statearr_29345_29367 = state_29331__$1;
(statearr_29345_29367[(2)] = null);

(statearr_29345_29367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29332 === (10))){
var inst_29323 = (state_29331[(2)]);
var state_29331__$1 = state_29331;
var statearr_29346_29368 = state_29331__$1;
(statearr_29346_29368[(2)] = inst_29323);

(statearr_29346_29368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29332 === (8))){
var inst_29313 = (state_29331[(7)]);
var state_29331__$1 = state_29331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29331__$1,(11),out,inst_29313);
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
});})(c__19201__auto___29358,out))
;
return ((function (switch__19136__auto__,c__19201__auto___29358,out){
return (function() {
var cljs$core$async$state_machine__19137__auto__ = null;
var cljs$core$async$state_machine__19137__auto____0 = (function (){
var statearr_29350 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29350[(0)] = cljs$core$async$state_machine__19137__auto__);

(statearr_29350[(1)] = (1));

return statearr_29350;
});
var cljs$core$async$state_machine__19137__auto____1 = (function (state_29331){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_29331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e29351){if((e29351 instanceof Object)){
var ex__19140__auto__ = e29351;
var statearr_29352_29369 = state_29331;
(statearr_29352_29369[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29370 = state_29331;
state_29331 = G__29370;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$state_machine__19137__auto__ = function(state_29331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19137__auto____1.call(this,state_29331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19137__auto____0;
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19137__auto____1;
return cljs$core$async$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___29358,out))
})();
var state__19203__auto__ = (function (){var statearr_29353 = f__19202__auto__.call(null);
(statearr_29353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___29358);

return statearr_29353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___29358,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29378 = (function (map_LT_,f,ch,meta29379){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29379 = meta29379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29380,meta29379__$1){
var self__ = this;
var _29380__$1 = this;
return (new cljs.core.async.t_cljs$core$async29378(self__.map_LT_,self__.f,self__.ch,meta29379__$1));
});

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29380){
var self__ = this;
var _29380__$1 = this;
return self__.meta29379;
});

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29381 = (function (map_LT_,f,ch,meta29379,_,fn1,meta29382){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29379 = meta29379;
this._ = _;
this.fn1 = fn1;
this.meta29382 = meta29382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29383,meta29382__$1){
var self__ = this;
var _29383__$1 = this;
return (new cljs.core.async.t_cljs$core$async29381(self__.map_LT_,self__.f,self__.ch,self__.meta29379,self__._,self__.fn1,meta29382__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29383){
var self__ = this;
var _29383__$1 = this;
return self__.meta29382;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29381.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29381.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29371_SHARP_){
return f1.call(null,(((p1__29371_SHARP_ == null))?null:self__.f.call(null,p1__29371_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29381.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29379","meta29379",1823023570,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29378","cljs.core.async/t_cljs$core$async29378",-1673407773,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29382","meta29382",-1935602491,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29381";

cljs.core.async.t_cljs$core$async29381.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7379__auto__,writer__7380__auto__,opt__7381__auto__){
return cljs.core._write.call(null,writer__7380__auto__,"cljs.core.async/t_cljs$core$async29381");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29381 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29381(map_LT___$1,f__$1,ch__$1,meta29379__$1,___$2,fn1__$1,meta29382){
return (new cljs.core.async.t_cljs$core$async29381(map_LT___$1,f__$1,ch__$1,meta29379__$1,___$2,fn1__$1,meta29382));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29381(self__.map_LT_,self__.f,self__.ch,self__.meta29379,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6761__auto__ = ret;
if(cljs.core.truth_(and__6761__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6761__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29379","meta29379",1823023570,null)], null);
});

cljs.core.async.t_cljs$core$async29378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29378";

cljs.core.async.t_cljs$core$async29378.cljs$lang$ctorPrWriter = (function (this__7379__auto__,writer__7380__auto__,opt__7381__auto__){
return cljs.core._write.call(null,writer__7380__auto__,"cljs.core.async/t_cljs$core$async29378");
});

cljs.core.async.__GT_t_cljs$core$async29378 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29378(map_LT___$1,f__$1,ch__$1,meta29379){
return (new cljs.core.async.t_cljs$core$async29378(map_LT___$1,f__$1,ch__$1,meta29379));
});

}

return (new cljs.core.async.t_cljs$core$async29378(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29387 = (function (map_GT_,f,ch,meta29388){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29388 = meta29388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29389,meta29388__$1){
var self__ = this;
var _29389__$1 = this;
return (new cljs.core.async.t_cljs$core$async29387(self__.map_GT_,self__.f,self__.ch,meta29388__$1));
});

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29389){
var self__ = this;
var _29389__$1 = this;
return self__.meta29388;
});

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29388","meta29388",-761031657,null)], null);
});

cljs.core.async.t_cljs$core$async29387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29387";

cljs.core.async.t_cljs$core$async29387.cljs$lang$ctorPrWriter = (function (this__7379__auto__,writer__7380__auto__,opt__7381__auto__){
return cljs.core._write.call(null,writer__7380__auto__,"cljs.core.async/t_cljs$core$async29387");
});

cljs.core.async.__GT_t_cljs$core$async29387 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29387(map_GT___$1,f__$1,ch__$1,meta29388){
return (new cljs.core.async.t_cljs$core$async29387(map_GT___$1,f__$1,ch__$1,meta29388));
});

}

return (new cljs.core.async.t_cljs$core$async29387(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29393 = (function (filter_GT_,p,ch,meta29394){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29394 = meta29394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29395,meta29394__$1){
var self__ = this;
var _29395__$1 = this;
return (new cljs.core.async.t_cljs$core$async29393(self__.filter_GT_,self__.p,self__.ch,meta29394__$1));
});

cljs.core.async.t_cljs$core$async29393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29395){
var self__ = this;
var _29395__$1 = this;
return self__.meta29394;
});

cljs.core.async.t_cljs$core$async29393.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29393.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29393.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29393.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29394","meta29394",-379267409,null)], null);
});

cljs.core.async.t_cljs$core$async29393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29393";

cljs.core.async.t_cljs$core$async29393.cljs$lang$ctorPrWriter = (function (this__7379__auto__,writer__7380__auto__,opt__7381__auto__){
return cljs.core._write.call(null,writer__7380__auto__,"cljs.core.async/t_cljs$core$async29393");
});

cljs.core.async.__GT_t_cljs$core$async29393 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29393(filter_GT___$1,p__$1,ch__$1,meta29394){
return (new cljs.core.async.t_cljs$core$async29393(filter_GT___$1,p__$1,ch__$1,meta29394));
});

}

return (new cljs.core.async.t_cljs$core$async29393(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29396 = [];
var len__7848__auto___29440 = arguments.length;
var i__7849__auto___29441 = (0);
while(true){
if((i__7849__auto___29441 < len__7848__auto___29440)){
args29396.push((arguments[i__7849__auto___29441]));

var G__29442 = (i__7849__auto___29441 + (1));
i__7849__auto___29441 = G__29442;
continue;
} else {
}
break;
}

var G__29398 = args29396.length;
switch (G__29398) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29396.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19201__auto___29444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___29444,out){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___29444,out){
return (function (state_29419){
var state_val_29420 = (state_29419[(1)]);
if((state_val_29420 === (7))){
var inst_29415 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
var statearr_29421_29445 = state_29419__$1;
(statearr_29421_29445[(2)] = inst_29415);

(statearr_29421_29445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (1))){
var state_29419__$1 = state_29419;
var statearr_29422_29446 = state_29419__$1;
(statearr_29422_29446[(2)] = null);

(statearr_29422_29446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (4))){
var inst_29401 = (state_29419[(7)]);
var inst_29401__$1 = (state_29419[(2)]);
var inst_29402 = (inst_29401__$1 == null);
var state_29419__$1 = (function (){var statearr_29423 = state_29419;
(statearr_29423[(7)] = inst_29401__$1);

return statearr_29423;
})();
if(cljs.core.truth_(inst_29402)){
var statearr_29424_29447 = state_29419__$1;
(statearr_29424_29447[(1)] = (5));

} else {
var statearr_29425_29448 = state_29419__$1;
(statearr_29425_29448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (6))){
var inst_29401 = (state_29419[(7)]);
var inst_29406 = p.call(null,inst_29401);
var state_29419__$1 = state_29419;
if(cljs.core.truth_(inst_29406)){
var statearr_29426_29449 = state_29419__$1;
(statearr_29426_29449[(1)] = (8));

} else {
var statearr_29427_29450 = state_29419__$1;
(statearr_29427_29450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (3))){
var inst_29417 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29419__$1,inst_29417);
} else {
if((state_val_29420 === (2))){
var state_29419__$1 = state_29419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29419__$1,(4),ch);
} else {
if((state_val_29420 === (11))){
var inst_29409 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
var statearr_29428_29451 = state_29419__$1;
(statearr_29428_29451[(2)] = inst_29409);

(statearr_29428_29451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (9))){
var state_29419__$1 = state_29419;
var statearr_29429_29452 = state_29419__$1;
(statearr_29429_29452[(2)] = null);

(statearr_29429_29452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (5))){
var inst_29404 = cljs.core.async.close_BANG_.call(null,out);
var state_29419__$1 = state_29419;
var statearr_29430_29453 = state_29419__$1;
(statearr_29430_29453[(2)] = inst_29404);

(statearr_29430_29453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (10))){
var inst_29412 = (state_29419[(2)]);
var state_29419__$1 = (function (){var statearr_29431 = state_29419;
(statearr_29431[(8)] = inst_29412);

return statearr_29431;
})();
var statearr_29432_29454 = state_29419__$1;
(statearr_29432_29454[(2)] = null);

(statearr_29432_29454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (8))){
var inst_29401 = (state_29419[(7)]);
var state_29419__$1 = state_29419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29419__$1,(11),out,inst_29401);
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
});})(c__19201__auto___29444,out))
;
return ((function (switch__19136__auto__,c__19201__auto___29444,out){
return (function() {
var cljs$core$async$state_machine__19137__auto__ = null;
var cljs$core$async$state_machine__19137__auto____0 = (function (){
var statearr_29436 = [null,null,null,null,null,null,null,null,null];
(statearr_29436[(0)] = cljs$core$async$state_machine__19137__auto__);

(statearr_29436[(1)] = (1));

return statearr_29436;
});
var cljs$core$async$state_machine__19137__auto____1 = (function (state_29419){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_29419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e29437){if((e29437 instanceof Object)){
var ex__19140__auto__ = e29437;
var statearr_29438_29455 = state_29419;
(statearr_29438_29455[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29456 = state_29419;
state_29419 = G__29456;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$state_machine__19137__auto__ = function(state_29419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19137__auto____1.call(this,state_29419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19137__auto____0;
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19137__auto____1;
return cljs$core$async$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___29444,out))
})();
var state__19203__auto__ = (function (){var statearr_29439 = f__19202__auto__.call(null);
(statearr_29439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___29444);

return statearr_29439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___29444,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29457 = [];
var len__7848__auto___29460 = arguments.length;
var i__7849__auto___29461 = (0);
while(true){
if((i__7849__auto___29461 < len__7848__auto___29460)){
args29457.push((arguments[i__7849__auto___29461]));

var G__29462 = (i__7849__auto___29461 + (1));
i__7849__auto___29461 = G__29462;
continue;
} else {
}
break;
}

var G__29459 = args29457.length;
switch (G__29459) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29457.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto__){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto__){
return (function (state_29629){
var state_val_29630 = (state_29629[(1)]);
if((state_val_29630 === (7))){
var inst_29625 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
var statearr_29631_29672 = state_29629__$1;
(statearr_29631_29672[(2)] = inst_29625);

(statearr_29631_29672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (20))){
var inst_29595 = (state_29629[(7)]);
var inst_29606 = (state_29629[(2)]);
var inst_29607 = cljs.core.next.call(null,inst_29595);
var inst_29581 = inst_29607;
var inst_29582 = null;
var inst_29583 = (0);
var inst_29584 = (0);
var state_29629__$1 = (function (){var statearr_29632 = state_29629;
(statearr_29632[(8)] = inst_29581);

(statearr_29632[(9)] = inst_29606);

(statearr_29632[(10)] = inst_29582);

(statearr_29632[(11)] = inst_29583);

(statearr_29632[(12)] = inst_29584);

return statearr_29632;
})();
var statearr_29633_29673 = state_29629__$1;
(statearr_29633_29673[(2)] = null);

(statearr_29633_29673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (1))){
var state_29629__$1 = state_29629;
var statearr_29634_29674 = state_29629__$1;
(statearr_29634_29674[(2)] = null);

(statearr_29634_29674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (4))){
var inst_29570 = (state_29629[(13)]);
var inst_29570__$1 = (state_29629[(2)]);
var inst_29571 = (inst_29570__$1 == null);
var state_29629__$1 = (function (){var statearr_29635 = state_29629;
(statearr_29635[(13)] = inst_29570__$1);

return statearr_29635;
})();
if(cljs.core.truth_(inst_29571)){
var statearr_29636_29675 = state_29629__$1;
(statearr_29636_29675[(1)] = (5));

} else {
var statearr_29637_29676 = state_29629__$1;
(statearr_29637_29676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (15))){
var state_29629__$1 = state_29629;
var statearr_29641_29677 = state_29629__$1;
(statearr_29641_29677[(2)] = null);

(statearr_29641_29677[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (21))){
var state_29629__$1 = state_29629;
var statearr_29642_29678 = state_29629__$1;
(statearr_29642_29678[(2)] = null);

(statearr_29642_29678[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (13))){
var inst_29581 = (state_29629[(8)]);
var inst_29582 = (state_29629[(10)]);
var inst_29583 = (state_29629[(11)]);
var inst_29584 = (state_29629[(12)]);
var inst_29591 = (state_29629[(2)]);
var inst_29592 = (inst_29584 + (1));
var tmp29638 = inst_29581;
var tmp29639 = inst_29582;
var tmp29640 = inst_29583;
var inst_29581__$1 = tmp29638;
var inst_29582__$1 = tmp29639;
var inst_29583__$1 = tmp29640;
var inst_29584__$1 = inst_29592;
var state_29629__$1 = (function (){var statearr_29643 = state_29629;
(statearr_29643[(14)] = inst_29591);

(statearr_29643[(8)] = inst_29581__$1);

(statearr_29643[(10)] = inst_29582__$1);

(statearr_29643[(11)] = inst_29583__$1);

(statearr_29643[(12)] = inst_29584__$1);

return statearr_29643;
})();
var statearr_29644_29679 = state_29629__$1;
(statearr_29644_29679[(2)] = null);

(statearr_29644_29679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (22))){
var state_29629__$1 = state_29629;
var statearr_29645_29680 = state_29629__$1;
(statearr_29645_29680[(2)] = null);

(statearr_29645_29680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (6))){
var inst_29570 = (state_29629[(13)]);
var inst_29579 = f.call(null,inst_29570);
var inst_29580 = cljs.core.seq.call(null,inst_29579);
var inst_29581 = inst_29580;
var inst_29582 = null;
var inst_29583 = (0);
var inst_29584 = (0);
var state_29629__$1 = (function (){var statearr_29646 = state_29629;
(statearr_29646[(8)] = inst_29581);

(statearr_29646[(10)] = inst_29582);

(statearr_29646[(11)] = inst_29583);

(statearr_29646[(12)] = inst_29584);

return statearr_29646;
})();
var statearr_29647_29681 = state_29629__$1;
(statearr_29647_29681[(2)] = null);

(statearr_29647_29681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (17))){
var inst_29595 = (state_29629[(7)]);
var inst_29599 = cljs.core.chunk_first.call(null,inst_29595);
var inst_29600 = cljs.core.chunk_rest.call(null,inst_29595);
var inst_29601 = cljs.core.count.call(null,inst_29599);
var inst_29581 = inst_29600;
var inst_29582 = inst_29599;
var inst_29583 = inst_29601;
var inst_29584 = (0);
var state_29629__$1 = (function (){var statearr_29648 = state_29629;
(statearr_29648[(8)] = inst_29581);

(statearr_29648[(10)] = inst_29582);

(statearr_29648[(11)] = inst_29583);

(statearr_29648[(12)] = inst_29584);

return statearr_29648;
})();
var statearr_29649_29682 = state_29629__$1;
(statearr_29649_29682[(2)] = null);

(statearr_29649_29682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (3))){
var inst_29627 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29629__$1,inst_29627);
} else {
if((state_val_29630 === (12))){
var inst_29615 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
var statearr_29650_29683 = state_29629__$1;
(statearr_29650_29683[(2)] = inst_29615);

(statearr_29650_29683[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (2))){
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29629__$1,(4),in$);
} else {
if((state_val_29630 === (23))){
var inst_29623 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
var statearr_29651_29684 = state_29629__$1;
(statearr_29651_29684[(2)] = inst_29623);

(statearr_29651_29684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (19))){
var inst_29610 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
var statearr_29652_29685 = state_29629__$1;
(statearr_29652_29685[(2)] = inst_29610);

(statearr_29652_29685[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (11))){
var inst_29581 = (state_29629[(8)]);
var inst_29595 = (state_29629[(7)]);
var inst_29595__$1 = cljs.core.seq.call(null,inst_29581);
var state_29629__$1 = (function (){var statearr_29653 = state_29629;
(statearr_29653[(7)] = inst_29595__$1);

return statearr_29653;
})();
if(inst_29595__$1){
var statearr_29654_29686 = state_29629__$1;
(statearr_29654_29686[(1)] = (14));

} else {
var statearr_29655_29687 = state_29629__$1;
(statearr_29655_29687[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (9))){
var inst_29617 = (state_29629[(2)]);
var inst_29618 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29629__$1 = (function (){var statearr_29656 = state_29629;
(statearr_29656[(15)] = inst_29617);

return statearr_29656;
})();
if(cljs.core.truth_(inst_29618)){
var statearr_29657_29688 = state_29629__$1;
(statearr_29657_29688[(1)] = (21));

} else {
var statearr_29658_29689 = state_29629__$1;
(statearr_29658_29689[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (5))){
var inst_29573 = cljs.core.async.close_BANG_.call(null,out);
var state_29629__$1 = state_29629;
var statearr_29659_29690 = state_29629__$1;
(statearr_29659_29690[(2)] = inst_29573);

(statearr_29659_29690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (14))){
var inst_29595 = (state_29629[(7)]);
var inst_29597 = cljs.core.chunked_seq_QMARK_.call(null,inst_29595);
var state_29629__$1 = state_29629;
if(inst_29597){
var statearr_29660_29691 = state_29629__$1;
(statearr_29660_29691[(1)] = (17));

} else {
var statearr_29661_29692 = state_29629__$1;
(statearr_29661_29692[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (16))){
var inst_29613 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
var statearr_29662_29693 = state_29629__$1;
(statearr_29662_29693[(2)] = inst_29613);

(statearr_29662_29693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (10))){
var inst_29582 = (state_29629[(10)]);
var inst_29584 = (state_29629[(12)]);
var inst_29589 = cljs.core._nth.call(null,inst_29582,inst_29584);
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29629__$1,(13),out,inst_29589);
} else {
if((state_val_29630 === (18))){
var inst_29595 = (state_29629[(7)]);
var inst_29604 = cljs.core.first.call(null,inst_29595);
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29629__$1,(20),out,inst_29604);
} else {
if((state_val_29630 === (8))){
var inst_29583 = (state_29629[(11)]);
var inst_29584 = (state_29629[(12)]);
var inst_29586 = (inst_29584 < inst_29583);
var inst_29587 = inst_29586;
var state_29629__$1 = state_29629;
if(cljs.core.truth_(inst_29587)){
var statearr_29663_29694 = state_29629__$1;
(statearr_29663_29694[(1)] = (10));

} else {
var statearr_29664_29695 = state_29629__$1;
(statearr_29664_29695[(1)] = (11));

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
}
}
}
}
}
}
}
});})(c__19201__auto__))
;
return ((function (switch__19136__auto__,c__19201__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19137__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19137__auto____0 = (function (){
var statearr_29668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29668[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19137__auto__);

(statearr_29668[(1)] = (1));

return statearr_29668;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19137__auto____1 = (function (state_29629){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_29629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e29669){if((e29669 instanceof Object)){
var ex__19140__auto__ = e29669;
var statearr_29670_29696 = state_29629;
(statearr_29670_29696[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29697 = state_29629;
state_29629 = G__29697;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19137__auto__ = function(state_29629){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19137__auto____1.call(this,state_29629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19137__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19137__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto__))
})();
var state__19203__auto__ = (function (){var statearr_29671 = f__19202__auto__.call(null);
(statearr_29671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto__);

return statearr_29671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto__))
);

return c__19201__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29698 = [];
var len__7848__auto___29701 = arguments.length;
var i__7849__auto___29702 = (0);
while(true){
if((i__7849__auto___29702 < len__7848__auto___29701)){
args29698.push((arguments[i__7849__auto___29702]));

var G__29703 = (i__7849__auto___29702 + (1));
i__7849__auto___29702 = G__29703;
continue;
} else {
}
break;
}

var G__29700 = args29698.length;
switch (G__29700) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29698.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29705 = [];
var len__7848__auto___29708 = arguments.length;
var i__7849__auto___29709 = (0);
while(true){
if((i__7849__auto___29709 < len__7848__auto___29708)){
args29705.push((arguments[i__7849__auto___29709]));

var G__29710 = (i__7849__auto___29709 + (1));
i__7849__auto___29709 = G__29710;
continue;
} else {
}
break;
}

var G__29707 = args29705.length;
switch (G__29707) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29705.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29712 = [];
var len__7848__auto___29763 = arguments.length;
var i__7849__auto___29764 = (0);
while(true){
if((i__7849__auto___29764 < len__7848__auto___29763)){
args29712.push((arguments[i__7849__auto___29764]));

var G__29765 = (i__7849__auto___29764 + (1));
i__7849__auto___29764 = G__29765;
continue;
} else {
}
break;
}

var G__29714 = args29712.length;
switch (G__29714) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29712.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19201__auto___29767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___29767,out){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___29767,out){
return (function (state_29738){
var state_val_29739 = (state_29738[(1)]);
if((state_val_29739 === (7))){
var inst_29733 = (state_29738[(2)]);
var state_29738__$1 = state_29738;
var statearr_29740_29768 = state_29738__$1;
(statearr_29740_29768[(2)] = inst_29733);

(statearr_29740_29768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (1))){
var inst_29715 = null;
var state_29738__$1 = (function (){var statearr_29741 = state_29738;
(statearr_29741[(7)] = inst_29715);

return statearr_29741;
})();
var statearr_29742_29769 = state_29738__$1;
(statearr_29742_29769[(2)] = null);

(statearr_29742_29769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (4))){
var inst_29718 = (state_29738[(8)]);
var inst_29718__$1 = (state_29738[(2)]);
var inst_29719 = (inst_29718__$1 == null);
var inst_29720 = cljs.core.not.call(null,inst_29719);
var state_29738__$1 = (function (){var statearr_29743 = state_29738;
(statearr_29743[(8)] = inst_29718__$1);

return statearr_29743;
})();
if(inst_29720){
var statearr_29744_29770 = state_29738__$1;
(statearr_29744_29770[(1)] = (5));

} else {
var statearr_29745_29771 = state_29738__$1;
(statearr_29745_29771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (6))){
var state_29738__$1 = state_29738;
var statearr_29746_29772 = state_29738__$1;
(statearr_29746_29772[(2)] = null);

(statearr_29746_29772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (3))){
var inst_29735 = (state_29738[(2)]);
var inst_29736 = cljs.core.async.close_BANG_.call(null,out);
var state_29738__$1 = (function (){var statearr_29747 = state_29738;
(statearr_29747[(9)] = inst_29735);

return statearr_29747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29738__$1,inst_29736);
} else {
if((state_val_29739 === (2))){
var state_29738__$1 = state_29738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29738__$1,(4),ch);
} else {
if((state_val_29739 === (11))){
var inst_29718 = (state_29738[(8)]);
var inst_29727 = (state_29738[(2)]);
var inst_29715 = inst_29718;
var state_29738__$1 = (function (){var statearr_29748 = state_29738;
(statearr_29748[(7)] = inst_29715);

(statearr_29748[(10)] = inst_29727);

return statearr_29748;
})();
var statearr_29749_29773 = state_29738__$1;
(statearr_29749_29773[(2)] = null);

(statearr_29749_29773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (9))){
var inst_29718 = (state_29738[(8)]);
var state_29738__$1 = state_29738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29738__$1,(11),out,inst_29718);
} else {
if((state_val_29739 === (5))){
var inst_29718 = (state_29738[(8)]);
var inst_29715 = (state_29738[(7)]);
var inst_29722 = cljs.core._EQ_.call(null,inst_29718,inst_29715);
var state_29738__$1 = state_29738;
if(inst_29722){
var statearr_29751_29774 = state_29738__$1;
(statearr_29751_29774[(1)] = (8));

} else {
var statearr_29752_29775 = state_29738__$1;
(statearr_29752_29775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (10))){
var inst_29730 = (state_29738[(2)]);
var state_29738__$1 = state_29738;
var statearr_29753_29776 = state_29738__$1;
(statearr_29753_29776[(2)] = inst_29730);

(statearr_29753_29776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (8))){
var inst_29715 = (state_29738[(7)]);
var tmp29750 = inst_29715;
var inst_29715__$1 = tmp29750;
var state_29738__$1 = (function (){var statearr_29754 = state_29738;
(statearr_29754[(7)] = inst_29715__$1);

return statearr_29754;
})();
var statearr_29755_29777 = state_29738__$1;
(statearr_29755_29777[(2)] = null);

(statearr_29755_29777[(1)] = (2));


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
});})(c__19201__auto___29767,out))
;
return ((function (switch__19136__auto__,c__19201__auto___29767,out){
return (function() {
var cljs$core$async$state_machine__19137__auto__ = null;
var cljs$core$async$state_machine__19137__auto____0 = (function (){
var statearr_29759 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29759[(0)] = cljs$core$async$state_machine__19137__auto__);

(statearr_29759[(1)] = (1));

return statearr_29759;
});
var cljs$core$async$state_machine__19137__auto____1 = (function (state_29738){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_29738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e29760){if((e29760 instanceof Object)){
var ex__19140__auto__ = e29760;
var statearr_29761_29778 = state_29738;
(statearr_29761_29778[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29779 = state_29738;
state_29738 = G__29779;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$state_machine__19137__auto__ = function(state_29738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19137__auto____1.call(this,state_29738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19137__auto____0;
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19137__auto____1;
return cljs$core$async$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___29767,out))
})();
var state__19203__auto__ = (function (){var statearr_29762 = f__19202__auto__.call(null);
(statearr_29762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___29767);

return statearr_29762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___29767,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29780 = [];
var len__7848__auto___29850 = arguments.length;
var i__7849__auto___29851 = (0);
while(true){
if((i__7849__auto___29851 < len__7848__auto___29850)){
args29780.push((arguments[i__7849__auto___29851]));

var G__29852 = (i__7849__auto___29851 + (1));
i__7849__auto___29851 = G__29852;
continue;
} else {
}
break;
}

var G__29782 = args29780.length;
switch (G__29782) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29780.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19201__auto___29854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___29854,out){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___29854,out){
return (function (state_29820){
var state_val_29821 = (state_29820[(1)]);
if((state_val_29821 === (7))){
var inst_29816 = (state_29820[(2)]);
var state_29820__$1 = state_29820;
var statearr_29822_29855 = state_29820__$1;
(statearr_29822_29855[(2)] = inst_29816);

(statearr_29822_29855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29821 === (1))){
var inst_29783 = (new Array(n));
var inst_29784 = inst_29783;
var inst_29785 = (0);
var state_29820__$1 = (function (){var statearr_29823 = state_29820;
(statearr_29823[(7)] = inst_29785);

(statearr_29823[(8)] = inst_29784);

return statearr_29823;
})();
var statearr_29824_29856 = state_29820__$1;
(statearr_29824_29856[(2)] = null);

(statearr_29824_29856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29821 === (4))){
var inst_29788 = (state_29820[(9)]);
var inst_29788__$1 = (state_29820[(2)]);
var inst_29789 = (inst_29788__$1 == null);
var inst_29790 = cljs.core.not.call(null,inst_29789);
var state_29820__$1 = (function (){var statearr_29825 = state_29820;
(statearr_29825[(9)] = inst_29788__$1);

return statearr_29825;
})();
if(inst_29790){
var statearr_29826_29857 = state_29820__$1;
(statearr_29826_29857[(1)] = (5));

} else {
var statearr_29827_29858 = state_29820__$1;
(statearr_29827_29858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29821 === (15))){
var inst_29810 = (state_29820[(2)]);
var state_29820__$1 = state_29820;
var statearr_29828_29859 = state_29820__$1;
(statearr_29828_29859[(2)] = inst_29810);

(statearr_29828_29859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29821 === (13))){
var state_29820__$1 = state_29820;
var statearr_29829_29860 = state_29820__$1;
(statearr_29829_29860[(2)] = null);

(statearr_29829_29860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29821 === (6))){
var inst_29785 = (state_29820[(7)]);
var inst_29806 = (inst_29785 > (0));
var state_29820__$1 = state_29820;
if(cljs.core.truth_(inst_29806)){
var statearr_29830_29861 = state_29820__$1;
(statearr_29830_29861[(1)] = (12));

} else {
var statearr_29831_29862 = state_29820__$1;
(statearr_29831_29862[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29821 === (3))){
var inst_29818 = (state_29820[(2)]);
var state_29820__$1 = state_29820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29820__$1,inst_29818);
} else {
if((state_val_29821 === (12))){
var inst_29784 = (state_29820[(8)]);
var inst_29808 = cljs.core.vec.call(null,inst_29784);
var state_29820__$1 = state_29820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29820__$1,(15),out,inst_29808);
} else {
if((state_val_29821 === (2))){
var state_29820__$1 = state_29820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29820__$1,(4),ch);
} else {
if((state_val_29821 === (11))){
var inst_29800 = (state_29820[(2)]);
var inst_29801 = (new Array(n));
var inst_29784 = inst_29801;
var inst_29785 = (0);
var state_29820__$1 = (function (){var statearr_29832 = state_29820;
(statearr_29832[(10)] = inst_29800);

(statearr_29832[(7)] = inst_29785);

(statearr_29832[(8)] = inst_29784);

return statearr_29832;
})();
var statearr_29833_29863 = state_29820__$1;
(statearr_29833_29863[(2)] = null);

(statearr_29833_29863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29821 === (9))){
var inst_29784 = (state_29820[(8)]);
var inst_29798 = cljs.core.vec.call(null,inst_29784);
var state_29820__$1 = state_29820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29820__$1,(11),out,inst_29798);
} else {
if((state_val_29821 === (5))){
var inst_29788 = (state_29820[(9)]);
var inst_29785 = (state_29820[(7)]);
var inst_29784 = (state_29820[(8)]);
var inst_29793 = (state_29820[(11)]);
var inst_29792 = (inst_29784[inst_29785] = inst_29788);
var inst_29793__$1 = (inst_29785 + (1));
var inst_29794 = (inst_29793__$1 < n);
var state_29820__$1 = (function (){var statearr_29834 = state_29820;
(statearr_29834[(12)] = inst_29792);

(statearr_29834[(11)] = inst_29793__$1);

return statearr_29834;
})();
if(cljs.core.truth_(inst_29794)){
var statearr_29835_29864 = state_29820__$1;
(statearr_29835_29864[(1)] = (8));

} else {
var statearr_29836_29865 = state_29820__$1;
(statearr_29836_29865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29821 === (14))){
var inst_29813 = (state_29820[(2)]);
var inst_29814 = cljs.core.async.close_BANG_.call(null,out);
var state_29820__$1 = (function (){var statearr_29838 = state_29820;
(statearr_29838[(13)] = inst_29813);

return statearr_29838;
})();
var statearr_29839_29866 = state_29820__$1;
(statearr_29839_29866[(2)] = inst_29814);

(statearr_29839_29866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29821 === (10))){
var inst_29804 = (state_29820[(2)]);
var state_29820__$1 = state_29820;
var statearr_29840_29867 = state_29820__$1;
(statearr_29840_29867[(2)] = inst_29804);

(statearr_29840_29867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29821 === (8))){
var inst_29784 = (state_29820[(8)]);
var inst_29793 = (state_29820[(11)]);
var tmp29837 = inst_29784;
var inst_29784__$1 = tmp29837;
var inst_29785 = inst_29793;
var state_29820__$1 = (function (){var statearr_29841 = state_29820;
(statearr_29841[(7)] = inst_29785);

(statearr_29841[(8)] = inst_29784__$1);

return statearr_29841;
})();
var statearr_29842_29868 = state_29820__$1;
(statearr_29842_29868[(2)] = null);

(statearr_29842_29868[(1)] = (2));


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
});})(c__19201__auto___29854,out))
;
return ((function (switch__19136__auto__,c__19201__auto___29854,out){
return (function() {
var cljs$core$async$state_machine__19137__auto__ = null;
var cljs$core$async$state_machine__19137__auto____0 = (function (){
var statearr_29846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29846[(0)] = cljs$core$async$state_machine__19137__auto__);

(statearr_29846[(1)] = (1));

return statearr_29846;
});
var cljs$core$async$state_machine__19137__auto____1 = (function (state_29820){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_29820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e29847){if((e29847 instanceof Object)){
var ex__19140__auto__ = e29847;
var statearr_29848_29869 = state_29820;
(statearr_29848_29869[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29870 = state_29820;
state_29820 = G__29870;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$state_machine__19137__auto__ = function(state_29820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19137__auto____1.call(this,state_29820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19137__auto____0;
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19137__auto____1;
return cljs$core$async$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___29854,out))
})();
var state__19203__auto__ = (function (){var statearr_29849 = f__19202__auto__.call(null);
(statearr_29849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___29854);

return statearr_29849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___29854,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29871 = [];
var len__7848__auto___29945 = arguments.length;
var i__7849__auto___29946 = (0);
while(true){
if((i__7849__auto___29946 < len__7848__auto___29945)){
args29871.push((arguments[i__7849__auto___29946]));

var G__29947 = (i__7849__auto___29946 + (1));
i__7849__auto___29946 = G__29947;
continue;
} else {
}
break;
}

var G__29873 = args29871.length;
switch (G__29873) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29871.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19201__auto___29949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19201__auto___29949,out){
return (function (){
var f__19202__auto__ = (function (){var switch__19136__auto__ = ((function (c__19201__auto___29949,out){
return (function (state_29915){
var state_val_29916 = (state_29915[(1)]);
if((state_val_29916 === (7))){
var inst_29911 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
var statearr_29917_29950 = state_29915__$1;
(statearr_29917_29950[(2)] = inst_29911);

(statearr_29917_29950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (1))){
var inst_29874 = [];
var inst_29875 = inst_29874;
var inst_29876 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29915__$1 = (function (){var statearr_29918 = state_29915;
(statearr_29918[(7)] = inst_29876);

(statearr_29918[(8)] = inst_29875);

return statearr_29918;
})();
var statearr_29919_29951 = state_29915__$1;
(statearr_29919_29951[(2)] = null);

(statearr_29919_29951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (4))){
var inst_29879 = (state_29915[(9)]);
var inst_29879__$1 = (state_29915[(2)]);
var inst_29880 = (inst_29879__$1 == null);
var inst_29881 = cljs.core.not.call(null,inst_29880);
var state_29915__$1 = (function (){var statearr_29920 = state_29915;
(statearr_29920[(9)] = inst_29879__$1);

return statearr_29920;
})();
if(inst_29881){
var statearr_29921_29952 = state_29915__$1;
(statearr_29921_29952[(1)] = (5));

} else {
var statearr_29922_29953 = state_29915__$1;
(statearr_29922_29953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (15))){
var inst_29905 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
var statearr_29923_29954 = state_29915__$1;
(statearr_29923_29954[(2)] = inst_29905);

(statearr_29923_29954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (13))){
var state_29915__$1 = state_29915;
var statearr_29924_29955 = state_29915__$1;
(statearr_29924_29955[(2)] = null);

(statearr_29924_29955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (6))){
var inst_29875 = (state_29915[(8)]);
var inst_29900 = inst_29875.length;
var inst_29901 = (inst_29900 > (0));
var state_29915__$1 = state_29915;
if(cljs.core.truth_(inst_29901)){
var statearr_29925_29956 = state_29915__$1;
(statearr_29925_29956[(1)] = (12));

} else {
var statearr_29926_29957 = state_29915__$1;
(statearr_29926_29957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (3))){
var inst_29913 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29915__$1,inst_29913);
} else {
if((state_val_29916 === (12))){
var inst_29875 = (state_29915[(8)]);
var inst_29903 = cljs.core.vec.call(null,inst_29875);
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29915__$1,(15),out,inst_29903);
} else {
if((state_val_29916 === (2))){
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29915__$1,(4),ch);
} else {
if((state_val_29916 === (11))){
var inst_29879 = (state_29915[(9)]);
var inst_29883 = (state_29915[(10)]);
var inst_29893 = (state_29915[(2)]);
var inst_29894 = [];
var inst_29895 = inst_29894.push(inst_29879);
var inst_29875 = inst_29894;
var inst_29876 = inst_29883;
var state_29915__$1 = (function (){var statearr_29927 = state_29915;
(statearr_29927[(7)] = inst_29876);

(statearr_29927[(8)] = inst_29875);

(statearr_29927[(11)] = inst_29893);

(statearr_29927[(12)] = inst_29895);

return statearr_29927;
})();
var statearr_29928_29958 = state_29915__$1;
(statearr_29928_29958[(2)] = null);

(statearr_29928_29958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (9))){
var inst_29875 = (state_29915[(8)]);
var inst_29891 = cljs.core.vec.call(null,inst_29875);
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29915__$1,(11),out,inst_29891);
} else {
if((state_val_29916 === (5))){
var inst_29876 = (state_29915[(7)]);
var inst_29879 = (state_29915[(9)]);
var inst_29883 = (state_29915[(10)]);
var inst_29883__$1 = f.call(null,inst_29879);
var inst_29884 = cljs.core._EQ_.call(null,inst_29883__$1,inst_29876);
var inst_29885 = cljs.core.keyword_identical_QMARK_.call(null,inst_29876,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29886 = (inst_29884) || (inst_29885);
var state_29915__$1 = (function (){var statearr_29929 = state_29915;
(statearr_29929[(10)] = inst_29883__$1);

return statearr_29929;
})();
if(cljs.core.truth_(inst_29886)){
var statearr_29930_29959 = state_29915__$1;
(statearr_29930_29959[(1)] = (8));

} else {
var statearr_29931_29960 = state_29915__$1;
(statearr_29931_29960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (14))){
var inst_29908 = (state_29915[(2)]);
var inst_29909 = cljs.core.async.close_BANG_.call(null,out);
var state_29915__$1 = (function (){var statearr_29933 = state_29915;
(statearr_29933[(13)] = inst_29908);

return statearr_29933;
})();
var statearr_29934_29961 = state_29915__$1;
(statearr_29934_29961[(2)] = inst_29909);

(statearr_29934_29961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (10))){
var inst_29898 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
var statearr_29935_29962 = state_29915__$1;
(statearr_29935_29962[(2)] = inst_29898);

(statearr_29935_29962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (8))){
var inst_29875 = (state_29915[(8)]);
var inst_29879 = (state_29915[(9)]);
var inst_29883 = (state_29915[(10)]);
var inst_29888 = inst_29875.push(inst_29879);
var tmp29932 = inst_29875;
var inst_29875__$1 = tmp29932;
var inst_29876 = inst_29883;
var state_29915__$1 = (function (){var statearr_29936 = state_29915;
(statearr_29936[(7)] = inst_29876);

(statearr_29936[(14)] = inst_29888);

(statearr_29936[(8)] = inst_29875__$1);

return statearr_29936;
})();
var statearr_29937_29963 = state_29915__$1;
(statearr_29937_29963[(2)] = null);

(statearr_29937_29963[(1)] = (2));


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
});})(c__19201__auto___29949,out))
;
return ((function (switch__19136__auto__,c__19201__auto___29949,out){
return (function() {
var cljs$core$async$state_machine__19137__auto__ = null;
var cljs$core$async$state_machine__19137__auto____0 = (function (){
var statearr_29941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29941[(0)] = cljs$core$async$state_machine__19137__auto__);

(statearr_29941[(1)] = (1));

return statearr_29941;
});
var cljs$core$async$state_machine__19137__auto____1 = (function (state_29915){
while(true){
var ret_value__19138__auto__ = (function (){try{while(true){
var result__19139__auto__ = switch__19136__auto__.call(null,state_29915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19139__auto__;
}
break;
}
}catch (e29942){if((e29942 instanceof Object)){
var ex__19140__auto__ = e29942;
var statearr_29943_29964 = state_29915;
(statearr_29943_29964[(5)] = ex__19140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29965 = state_29915;
state_29915 = G__29965;
continue;
} else {
return ret_value__19138__auto__;
}
break;
}
});
cljs$core$async$state_machine__19137__auto__ = function(state_29915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19137__auto____1.call(this,state_29915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19137__auto____0;
cljs$core$async$state_machine__19137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19137__auto____1;
return cljs$core$async$state_machine__19137__auto__;
})()
;})(switch__19136__auto__,c__19201__auto___29949,out))
})();
var state__19203__auto__ = (function (){var statearr_29944 = f__19202__auto__.call(null);
(statearr_29944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19201__auto___29949);

return statearr_29944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19203__auto__);
});})(c__19201__auto___29949,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
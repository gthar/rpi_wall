// Compiled by ClojureScript 1.9.36 {}
goog.provide('rpi_wall.clock');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_time.local');
goog.require('cljs_time.format');
rpi_wall.clock.clock_state = reagent.core.atom.call(null,cljs_time.local.local_now.call(null));
rpi_wall.clock.tick = (function rpi_wall$clock$tick(){
return cljs.core.reset_BANG_.call(null,rpi_wall.clock.clock_state,cljs_time.local.local_now.call(null));
});
rpi_wall.clock.format_time = cljs.core.partial.call(null,cljs_time.format.unparse,cljs_time.format.formatter.call(null,"HH  mm"));
rpi_wall.clock.format_date = cljs.core.partial.call(null,cljs_time.format.unparse,cljs_time.format.formatter.call(null,"dd MM yyyy"));
rpi_wall.clock.clock = (function rpi_wall$clock$clock(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clock","div.clock",297094939),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),rpi_wall.clock.format_time.call(null,cljs.core.deref.call(null,rpi_wall.clock.clock_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),rpi_wall.clock.format_date.call(null,cljs.core.deref.call(null,rpi_wall.clock.clock_state))], null)], null);
});
window.setInterval(rpi_wall.clock.tick,(1000));

//# sourceMappingURL=clock.js.map
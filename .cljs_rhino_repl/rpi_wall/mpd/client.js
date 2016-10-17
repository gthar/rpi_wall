// Compiled by ClojureScript 1.9.36 {}
goog.provide('rpi_wall.mpd.client');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('rpi_wall.common_helpers');
rpi_wall.mpd.client.mpd_state = reagent.core.atom.call(null,null);
rpi_wall.mpd.client.cover_art_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base64-src","base64-src",2126915818),null,new cljs.core.Keyword(null,"img-format","img-format",911694474),null], null));
rpi_wall.mpd.client.format_song = (function rpi_wall$mpd$client$format_song(p__30112,img){
var map__30115 = p__30112;
var map__30115__$1 = ((((!((map__30115 == null)))?((((map__30115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30115):map__30115);
var title = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"title","title",636505583));
var artist = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"artist","artist",152869709));
var album = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"album","album",-1432296582));
var elapsed = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698));
var length = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"length","length",588987862));
var img_src = rpi_wall.common_helpers.base64__GT_img.call(null,img);
var img_cell = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.album-art","td.album-art",270955593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-span","row-span",-365554241),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),img_src], null)], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#mpd","table#mpd",1110515355),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.param","td.param",-1347123135),"song"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.value","td.value",-141360330),title], null),img_cell], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.param","td.param",-1347123135),"elapsed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.value","td.value",-141360330),[cljs.core.str(elapsed),cljs.core.str("/"),cljs.core.str(length)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.param","td.param",-1347123135),"artist"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.value","td.value",-141360330),artist], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.param","td.param",-1347123135),"album"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.value","td.value",-141360330),album], null)], null)], null)], null);
});
rpi_wall.mpd.client.mpd = (function rpi_wall$mpd$client$mpd(){
var s = (function (){var temp__4655__auto__ = cljs.core.deref.call(null,rpi_wall.mpd.client.mpd_state);
if(cljs.core.truth_(temp__4655__auto__)){
var x = temp__4655__auto__;
return rpi_wall.mpd.client.format_song.call(null,x,cljs.core.deref.call(null,rpi_wall.mpd.client.cover_art_state));
} else {
return null;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mpd","div.mpd",-2048881288),s], null);
});

//# sourceMappingURL=client.js.map
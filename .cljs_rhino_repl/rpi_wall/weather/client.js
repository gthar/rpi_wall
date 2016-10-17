// Compiled by ClojureScript 1.9.36 {}
goog.provide('rpi_wall.weather.client');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('rpi_wall.weather.plot_temp');
rpi_wall.weather.client.weather_state = reagent.core.atom.call(null,null);
rpi_wall.weather.client.build_table = (function rpi_wall$weather$client$build_table(xs){
var row_funs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__24098_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"i.wi","i.wi",1081197769),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("wi-owm-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__24098_SHARP_))].join('')], null)],null));
}),(function (p1__24099_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"temp","temp",1791541284).cljs$core$IFn$_invoke$arity$1(p1__24099_SHARP_)),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"humidity","humidity",-2051231184).cljs$core$IFn$_invoke$arity$1(p1__24099_SHARP_)),cljs.core.str(")")].join('');
})], null);
var as_td = cljs.core.partial.call(null,cljs.core.vector,new cljs.core.Keyword(null,"td","td",1479933353));
var table_rows = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.comp,as_td),row_funs);
var build_row = ((function (row_funs,as_td,table_rows){
return (function (p1__24100_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.map.call(null,p1__24100_SHARP_,xs));
});})(row_funs,as_td,table_rows))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#weather","table#weather",-1457984743),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.map.call(null,build_row,table_rows))], null);
});
rpi_wall.weather.client.weather = (function rpi_wall$weather$client$weather(){
var t = (function (){var temp__4655__auto__ = cljs.core.deref.call(null,rpi_wall.weather.client.weather_state);
if(cljs.core.truth_(temp__4655__auto__)){
var x = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),rpi_wall.weather.client.build_table.call(null,cljs.core.deref.call(null,rpi_wall.weather.client.weather_state))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),rpi_wall.weather.plot_temp.temp_lineplot.call(null,cljs.core.deref.call(null,rpi_wall.weather.client.weather_state))], null)], null)], null)], null);
} else {
return null;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.weather","div.weather",-115409124),t], null);
});

//# sourceMappingURL=client.js.map
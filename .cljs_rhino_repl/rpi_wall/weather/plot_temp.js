// Compiled by ClojureScript 1.9.36 {}
goog.provide('rpi_wall.weather.plot_temp');
goog.require('cljs.core');
goog.require('clojure.string');
rpi_wall.weather.plot_temp.margin = (5);
rpi_wall.weather.plot_temp.height = (25);
rpi_wall.weather.plot_temp.width = (800);
rpi_wall.weather.plot_temp.clean_nums = (function rpi_wall$weather$plot_temp$clean_nums(x){
return clojure.string.replace.call(null,x,"\u00BAC","");
});
rpi_wall.weather.plot_temp.val_scaler = (function rpi_wall$weather$plot_temp$val_scaler(xs){
var min_y = cljs.core.apply.call(null,cljs.core.min,xs);
var zeroed = cljs.core.map.call(null,((function (min_y){
return (function (p1__24103_SHARP_){
return (p1__24103_SHARP_ - min_y);
});})(min_y))
,xs);
var max_val = cljs.core.apply.call(null,cljs.core.max,zeroed);
var scaled = cljs.core.map.call(null,((function (min_y,zeroed,max_val){
return (function (p1__24104_SHARP_){
return (p1__24104_SHARP_ / max_val);
});})(min_y,zeroed,max_val))
,zeroed);
return scaled;
});
rpi_wall.weather.plot_temp.temp_lineplot = (function rpi_wall$weather$plot_temp$temp_lineplot(data){
var temps = cljs.core.map.call(null,cljs.core.comp.call(null,parseFloat,rpi_wall.weather.plot_temp.clean_nums,new cljs.core.Keyword(null,"temp","temp",1791541284)),data);
var xs = cljs.core.map.call(null,((function (temps){
return (function (p1__24105_SHARP_){
return ((rpi_wall.weather.plot_temp.width * p1__24105_SHARP_) + rpi_wall.weather.plot_temp.margin);
});})(temps))
,rpi_wall.weather.plot_temp.val_scaler.call(null,cljs.core.range.call(null,cljs.core.count.call(null,temps))));
var ys = cljs.core.map.call(null,((function (temps,xs){
return (function (p1__24106_SHARP_){
return ((rpi_wall.weather.plot_temp.height * ((1) - p1__24106_SHARP_)) + (10));
});})(temps,xs))
,rpi_wall.weather.plot_temp.val_scaler.call(null,temps));
var pts_str = clojure.string.join.call(null," ",cljs.core.map.call(null,((function (temps,xs,ys){
return (function (x,y){
return [cljs.core.str(x),cljs.core.str(","),cljs.core.str(y)].join('');
});})(temps,xs,ys))
,xs,ys));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[cljs.core.str(rpi_wall.weather.plot_temp.margin),cljs.core.str(" "),cljs.core.str(rpi_wall.weather.plot_temp.margin),cljs.core.str(" "),cljs.core.str((rpi_wall.weather.plot_temp.width + (rpi_wall.weather.plot_temp.margin * (2)))),cljs.core.str(" "),cljs.core.str((rpi_wall.weather.plot_temp.height + (rpi_wall.weather.plot_temp.margin * (2))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000000",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"points","points",-1486596883),pts_str], null)], null)], null);
});

//# sourceMappingURL=plot_temp.js.map
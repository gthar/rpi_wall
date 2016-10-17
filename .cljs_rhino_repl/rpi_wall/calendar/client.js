// Compiled by ClojureScript 1.9.36 {}
goog.provide('rpi_wall.calendar.client');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('cljs_time.core');
goog.require('cljs_time.local');
goog.require('cljs_time.coerce');
rpi_wall.calendar.client.date_state = reagent.core.atom.call(null,cljs_time.local.local_now.call(null));
rpi_wall.calendar.client.busy_days_state = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
rpi_wall.calendar.client.tick = (function rpi_wall$calendar$client$tick(){
return cljs.core.reset_BANG_.call(null,rpi_wall.calendar.client.date_state,cljs_time.local.local_now.call(null));
});
rpi_wall.calendar.client.month_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Gener","Febrer","Mar\u00E7","Abril","Maig","Juny","Juliol","Augost","Setembre","Octubre","Novembre","Desembre"], null);
rpi_wall.calendar.client.week_days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dl","dt","dc","dj","dv","ds","dg"], null);
rpi_wall.calendar.client.get_first_week_day = (function rpi_wall$calendar$client$get_first_week_day(current_month,current_year){
return cljs_time.core.day_of_week.call(null,cljs_time.core.date_time.call(null,current_year,current_month,(1)));
});
rpi_wall.calendar.client.get_days_in_this_month = (function rpi_wall$calendar$client$get_days_in_this_month(current_month,current_year){
var this_month = cljs_time.core.date_time.call(null,current_year,current_month,(1));
var next_month = cljs_time.core.date_time.call(null,current_year,(current_month + (1)),(1));
return Math.round(((cljs_time.coerce.to_long.call(null,next_month) - cljs_time.coerce.to_long.call(null,this_month)) / ((((1000) * (60)) * (60)) * (24))));
});
rpi_wall.calendar.client.col_builder = (function rpi_wall$calendar$client$col_builder(x,current_day,busy_days){
var day = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(x);
var is_today = cljs.core._EQ_.call(null,day,current_day);
var is_busy = cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x),busy_days);
var tag = (cljs.core.truth_((function (){var and__6761__auto__ = is_today;
if(and__6761__auto__){
return is_busy;
} else {
return and__6761__auto__;
}
})())?new cljs.core.Keyword(null,"td.current-day.busy-day","td.current-day.busy-day",-1907404013):((is_today)?new cljs.core.Keyword(null,"td.current-day","td.current-day",933032477):(cljs.core.truth_(is_busy)?new cljs.core.Keyword(null,"td.busy-day","td.busy-day",-1827921673):new cljs.core.Keyword(null,"td","td",1479933353)
)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,day], null);
});
rpi_wall.calendar.client.get_empty_days = (function rpi_wall$calendar$client$get_empty_days(first_week_day,days_in_month){
return (cljs.core.count.call(null,rpi_wall.calendar.client.week_days) - (cljs.core.mod.call(null,((first_week_day - (1)) + (days_in_month - (1))),cljs.core.count.call(null,rpi_wall.calendar.client.week_days)) + (1)));
});
rpi_wall.calendar.client.make_day_vals = (function rpi_wall$calendar$client$make_day_vals(first_week_day,days_in_month){
return cljs.core.concat.call(null,cljs.core.repeat.call(null,(first_week_day - (1)),""),cljs.core.range.call(null,(1),(days_in_month + (1))),cljs.core.repeat.call(null,rpi_wall.calendar.client.get_empty_days.call(null,first_week_day,days_in_month),""));
});
rpi_wall.calendar.client.make_cal_body = (function rpi_wall$calendar$client$make_cal_body(current_day,current_month,current_year,busy_days){
var days_in_this_month = rpi_wall.calendar.client.get_days_in_this_month.call(null,current_month,current_year);
var first_week_day = rpi_wall.calendar.client.get_first_week_day.call(null,current_month,current_year);
var day_vals = rpi_wall.calendar.client.make_day_vals.call(null,first_week_day,days_in_this_month);
var cols = cljs.core.map.call(null,((function (days_in_this_month,first_week_day,day_vals){
return (function (x){
return rpi_wall.calendar.client.col_builder.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"day","day",-274800446),x,new cljs.core.Keyword(null,"month","month",-1960248533),current_month,new cljs.core.Keyword(null,"year","year",335913393),current_year], null),current_day,busy_days);
});})(days_in_this_month,first_week_day,day_vals))
,day_vals);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.map.call(null,((function (days_in_this_month,first_week_day,day_vals,cols){
return (function (p1__30128_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),p1__30128_SHARP_);
});})(days_in_this_month,first_week_day,day_vals,cols))
,cljs.core.partition.call(null,cljs.core.count.call(null,rpi_wall.calendar.client.week_days),cols)));
});
rpi_wall.calendar.client.days_row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.vector,new cljs.core.Keyword(null,"th.day-names","th.day-names",511906832)),rpi_wall.calendar.client.week_days));
rpi_wall.calendar.client.make_header = (function rpi_wall$calendar$client$make_header(current_month,current_year){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(7)], null),cljs.core.nth.call(null,rpi_wall.calendar.client.month_names,(current_month - (1)))," ",current_year], null)], null),rpi_wall.calendar.client.days_row], null);
});
rpi_wall.calendar.client.make_month = (function rpi_wall$calendar$client$make_month(d,n,busy_days){
var date = cljs_time.core.plus.call(null,d,cljs_time.core.months.call(null,n));
var current_day = ((cljs.core._EQ_.call(null,n,(0)))?cljs_time.core.day.call(null,date):null);
var current_month = cljs_time.core.month.call(null,date);
var current_year = cljs_time.core.year.call(null,date);
var header = rpi_wall.calendar.client.make_header.call(null,current_month,current_year);
var body = rpi_wall.calendar.client.make_cal_body.call(null,current_day,current_month,current_year,busy_days);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.month","div.month",-870515958),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#month","table#month",1918228648),header,body], null)], null);
});
rpi_wall.calendar.client.month0 = (function rpi_wall$calendar$client$month0(){
return rpi_wall.calendar.client.make_month.call(null,cljs.core.deref.call(null,rpi_wall.calendar.client.date_state),(0),cljs.core.deref.call(null,rpi_wall.calendar.client.busy_days_state));
});
rpi_wall.calendar.client.month1 = (function rpi_wall$calendar$client$month1(){
return rpi_wall.calendar.client.make_month.call(null,cljs.core.deref.call(null,rpi_wall.calendar.client.date_state),(1),cljs.core.deref.call(null,rpi_wall.calendar.client.busy_days_state));
});
rpi_wall.calendar.client.month2 = (function rpi_wall$calendar$client$month2(){
return rpi_wall.calendar.client.make_month.call(null,cljs.core.deref.call(null,rpi_wall.calendar.client.date_state),(2),cljs.core.deref.call(null,rpi_wall.calendar.client.busy_days_state));
});
window.setInterval(rpi_wall.calendar.client.tick,(100000));

//# sourceMappingURL=client.js.map
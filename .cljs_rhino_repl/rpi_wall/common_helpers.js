// Compiled by ClojureScript 1.9.36 {}
goog.provide('rpi_wall.common_helpers');
goog.require('cljs.core');
rpi_wall.common_helpers.base64__GT_img = (function rpi_wall$common_helpers$base64__GT_img(p__30119){
var map__30122 = p__30119;
var map__30122__$1 = ((((!((map__30122 == null)))?((((map__30122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30122):map__30122);
var base64_src = cljs.core.get.call(null,map__30122__$1,new cljs.core.Keyword(null,"base64-src","base64-src",2126915818));
var img_format = cljs.core.get.call(null,map__30122__$1,new cljs.core.Keyword(null,"img-format","img-format",911694474));
return [cljs.core.str("data:image/"),cljs.core.str(img_format),cljs.core.str(";base64,"),cljs.core.str(base64_src)].join('');
});

//# sourceMappingURL=common_helpers.js.map
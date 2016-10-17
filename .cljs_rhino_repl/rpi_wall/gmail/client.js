// Compiled by ClojureScript 1.9.36 {}
goog.provide('rpi_wall.gmail.client');
goog.require('cljs.core');
goog.require('reagent.core');
rpi_wall.gmail.client.new_emails_state = reagent.core.atom.call(null,null);
rpi_wall.gmail.client.gmail = (function rpi_wall$gmail$client$gmail(){
var x = cljs.core.deref.call(null,rpi_wall.gmail.client.new_emails_state);
var txt = (((x == null))?"No s'ha pogut connectar amb gmail":((cljs.core._EQ_.call(null,x,(0)))?"No tens emails nous":((cljs.core._EQ_.call(null,x,(1)))?[cljs.core.str("Tens "),cljs.core.str(x),cljs.core.str(" email nou")].join(''):[cljs.core.str("Tens "),cljs.core.str(x),cljs.core.str(" emails nous")].join('')
)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gmail","div.gmail",-428228882),txt], null);
});

//# sourceMappingURL=client.js.map
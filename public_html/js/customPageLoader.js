/*
 * Angepasste PageLoader Variante
 */

$(document).on("mobileinit", function() {
    $.mobile.loader.prototype.options.text = "";
    $.mobile.loader.prototype.options.textVisible = false;
    $.mobile.loader.prototype.options.theme = "a";
    $.mobile.loader.prototype.options.html = '<img src="../img/gears.gif" width="80"/>';
});

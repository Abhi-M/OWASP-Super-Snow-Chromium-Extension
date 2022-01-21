if( extension_status == 'on' ) {
    var all = document.body.getElementsByTagName("*");
var css = document.createElement("style");
css.innerHTML = "* { -webkit-filter: blur(2px); } *:hover { -webkit-filter: blur(0px); }'";
css.type = "text/css";
document.body.appendChild(css);
chrome.browserAction.setIcon({ path: 'icons/snow-on.png'});
}
if( extension_status == 'off' ) {
    var all = document.body.getElementsByTagName("*");
var css = document.createElement("style");
css.innerHTML = "* { -webkit-filter: blur(0px); } *:hover { -webkit-filter: blur(0px); }'";
css.type = "text/css";
document.body.appendChild(css);
}
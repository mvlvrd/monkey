// ==UserScript==
// @name        filter
// @namespace   local
// @description Ask for confirmation before entering site
// @inject-into auto
// @match     *://*.elpais.com/
// @match     *://*.pitchfork.com/
// ==/UserScript==

function launchAlert(){
    alert("Do you really want to see this?")
}

launchAlert();

// ==UserScript==
// @name        removeMDNad
// @namespace   local
// @description Remove ads
// @match     https://*.mozilla.org/*
// ==/UserScript==

const tbd = document.querySelector(".top-banner");
if (tbd?.querySelector("#pong-note")?.textContent?.trim() === "Ad") {
    tbd.remove();
}

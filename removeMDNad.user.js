// ==UserScript==
// @name        removeMDNad
// @namespace   local
// @description Remove ads
// @match     https://*.mozilla.org/*
// ==/UserScript==

//TODO: There are lots of shadow-roots involved so its difficult to find the element with "Ad" string.
// This doesn't checks if the banners are real Ads or not but seems to work fine.

const banner = document.querySelector(".page-layout__banner");
const sub = banner?.querySelector("mdn-placement-top:nth-child(1)");
if (sub) {
    banner.remove();
}

const side_placement = document.querySelector(".layout__right-sidebar > mdn-placement-sidebar:nth-child(2)");
side_placement?.remove();

const bottom_placement = document.querySelector(".page-layout__footer > mdn-placement-bottom:nth-child(1)");
bottom_placement?.remove();

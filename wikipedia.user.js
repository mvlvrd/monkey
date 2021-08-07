// ==UserScript==
// @name        wikipedia
// @namespace   local
// @description Remove donation banner from wikipedia
// @include     https://*.wikipedia.org/*
// ==/UserScript==


document.querySelector("#siteNotice").remove();
//<div id="centralNotice" class="cn-fundraising">

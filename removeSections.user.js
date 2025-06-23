// ==UserScript==
// @name        removeSections
// @namespace   local
// @description Remove distracting sections
// @match     https://*.stackexchange.com/*
// @match     https://stackoverflow.com/*
// @match     https://askubuntu.com/*
// @match     https://superuser.com/*
// @match     https://*.wikipedia.org/*
// ==/UserScript==

const host = window.location.hostname.split(".").slice(-2).join(".");
const sect = { "stackexchange.com":"#hot-network-questions",
               "stackoverflow.com":"#hot-network-questions",
               "askubuntu.com":"#hot-network-questions",
               "superuser.com":"#hot-network-questions",
               "wikipedia.org":"#siteNotice" }[host];

const tbd = document.querySelector(sect);

tbd.remove();

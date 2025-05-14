// ==UserScript==
// @name        removeSections
// @namespace   local
// @description Remove distracting sections
// @include     https://*.stackexchange.com/*
// @include     https://stackoverflow.com/*
// @include     https://askubuntu.com/*
// @include     https://superuser.com/*
// @include     https://*.wikipedia.org/*
// ==/UserScript==

const host = window.location.hostname.split(".").slice(-2).join(".");
const sect = { "stackexchange.com":"#hot-network-questions",
               "stackoverflow.com":"#hot-network-questions",
               "askubuntu.com":"#hot-network-questions",
               "superuser.com":"#hot-network-questions",
               "wikipedia.org":"#siteNotice" }[host];

const tbd = document.querySelector(sect);

tbd.remove();

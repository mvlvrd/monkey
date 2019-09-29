// ==UserScript==
// @name        removeSections
// @namespace   local
// @description Remove distracting links from StackOverflow sites
// @include     https://*.stackexchange.com/*
// @include     https://stackoverflow.com/*
// @include     https://askubuntu.com/*
// @include     https://superuser.com/*
// ==/UserScript==

var network = document.getElementById("hot-network-questions");
if (network) network.parentNode.removeChild(network);

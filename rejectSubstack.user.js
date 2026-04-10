// ==UserScript==
// @name        rejectSubstack
// @namespace   local
// @description reject cookies in Substack
// @match     https://*.substack.com/*
// @match     https://www.programmablemutter.com/*
// ==/UserScript==

Array.from(document.querySelectorAll("button")).
  filter((element) => element.textContent.trim() === "Reject").
  forEach((elt) => elt.click());

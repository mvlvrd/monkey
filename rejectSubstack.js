// ==UserScript==
// @name        rejectSubstack
// @namespace   local
// @description reject cookies in Substack
// @match     https://*.substack.com/*
// ==/UserScript==

Array.from(document.querySelectorAll("#main > div:nth-child(4) > div > div > div.pencraft.pc-display-flex.pc-gap-6.pc-mobile-gap-6.pc-reset > button:nth-child(2)")).
    filter(element => element.textContent.trim() === "Reject").
    forEach(elt => elt.click());

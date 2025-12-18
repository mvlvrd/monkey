// ==UserScript==
// @name        rejectSubstack
// @namespace   local
// @description reject cookies in Substack
// @match     https://*.substack.com/*
// @match     https://www.programmablemutter.com/*
// ==/UserScript==

const host = window.location.hostname.split(".").slice(-2).join(".");
const query = {"substack.com":"#main > div:nth-child(4) > div > div > div.pencraft.pc-display-flex.pc-gap-6.pc-mobile-gap-6.pc-reset > button:nth-child(2)",
               "programmablemutter.com":"button.priority_secondary-S63h9o:nth-child(2)" }[host]

Array.from(document.querySelectorAll(query)).
    filter(element => element.textContent.trim() === "Reject").
    forEach(elt => elt.click());

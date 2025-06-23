// ==UserScript==
// @name        addNumbers
// @namespace   local
// @description Add index numbers to article list
// @match       https://lobste.rs/
// @match       https://lobste.rs/page/*
// ==/UserScript==

const d = document;

const stories_list = d.querySelector(".stories");
stories_list.style.setProperty("list-style-type", "decimal");
const start = Number(d.URL.match(/^https:\/\/lobste.rs\/page\/(\d+)\/?$/)?.[1] ?? null);
if (start) {
  stories_list.setAttribute("start", (start-1)*25 + 1);
}

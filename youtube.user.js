// ==UserScript==
// @name        youtube
// @namespace   local
// @description Remove clarify-box
// @match     https://www.youtube.com/*
// ==/UserScript==

//TODO: Replace TimeOut with MutationObserver

const TIMEOUT_MS = 2000;

function removeBox() {
  const clarifyBox = document.querySelector("#clarify-box");
  if (clarifyBox) {
    clarifyBox.remove();
  }
}

// Wait for the element to appear in the DOM as it is rendered after the fact
setTimeout(removeBox, TIMEOUT_MS);

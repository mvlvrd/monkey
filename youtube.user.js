// ==UserScript==
// @name        youtube
// @namespace   local
// @description Remove clarify-box
// @include     https://www.youtube.com/*
// ==/UserScript==

const TIMEOUT_MS = 2000;

function removeBox() {
  const clarifyBox = document.getElementById("clarify-box");
  console.debug(clarifyBox);
  if (clarifyBox) {
    clarifyBox.parentNode.removeChild(clarifyBox);
  }
}

// Wait for the element to appear in the DOM as it is rendered after the fact
setTimeout(removeBox, TIMEOUT_MS);

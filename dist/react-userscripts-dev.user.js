// ==UserScript==
// @name         Copy Zentao BUG
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  禅道每日bug一键复制
// @author       Sun chen yang
// @match        http://dev.veilytech.com/zentao/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=veilytech.com
// @grant        none
// @license MIT
// ==/UserScript==

"use strict";

function log(...args) {
    console.log("%cUserscript:", "color: purple; font-weight: bold", ...args);
}

log("Dev mode started");

async function main() {
    const resp = await fetch("http://localhost:8124/static/js/main.js");
    const script = await resp.text();
    log("Got Dev script");
    eval(script);
    log("Dev script evaled");
}

// Make sure we run once at the start
main.bind({})().catch((e) => {
    log("ERROR", e);
});

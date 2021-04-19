// ==UserScript==
// @name         OddValueVolume
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Скрипт для перфекционистов, которые хотят поставить нечётную громкость аудио, в том числе кратные 5.
// @author       Tutturution
// @match        *vk.com/*
// @icon         https://www.google.com/s2/favicons?domain=vk.com
// @grant        GM_registerMenuCommand
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    GM_registerMenuCommand("Установить громкость", () => {
        var volume = prompt("Ввести значение", 100)
        unsafeWindow.ap.setVolume((Math.pow(35, volume/100) - 1) / (35 - 1))
    }, "i");
})();

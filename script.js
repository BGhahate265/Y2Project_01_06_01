/*

Project 01_06_01

Author: Braddock Ghahate
Date: 08.15.18
Filename: script.js

*/

"use strict";
var formValidity = false;

function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    if (formValidity === true) {
        document.getElementsByTagName("form")[0].submit();
    }
}


function createEventListeners() {
    window.addEventListener("submit", validateForm);
}

// enable load event handlers
window.addEventListener("load", createEventListeners);

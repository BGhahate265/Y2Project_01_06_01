/*

Project 01_06_01

Author: Braddock Ghahate
Date: 08.15.18
Filename: script.js

*/

"use strict";
var formValidity = false;

//Function to validate the only fieldset/form
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    document.getElementById("errorText").innerHTML = "Please check your life's decisions";
    document.getElementById("errorText").style.display = "block";
    validateRequired();
}
// TBC

function validateRequired() {

}

function createEventListeners() {
    window.addEventListener("submit", validateForm, false);
}

// enable load event handlers
window.addEventListener("load", createEventListeners, false);

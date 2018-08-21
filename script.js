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

    validateRequired();
    if (formValidity) {
        document.getElementsByTagName("form")[0].submit();
    }
}

// function to validate all of the required input fields
function validateRequired() {
    var selectElements = document.querySelectorAll("#contactinfo input");
    var errorDiv = document.getElementById("errorText");
    var elementCount = selectElements.length;
    var requiredValidity = true;
    var currentElement = null;
    try {
        for (var i = 0; i < elementCount; i++) {
            currentElement = selectElements[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255, 233, 233)";
                requiredValidity = false;
                
            } else {
                currentElement.style.background = "white";
            }
        }
        if (fieldsetValidity) {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        } else {
            throw "Please complete all required fields.";
        }
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}

// enable load event handlers
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}
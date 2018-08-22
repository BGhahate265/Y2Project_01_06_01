/*
script.js 

Author: Braddock Ghahate
Date: 15 August 2018

JavaScript to validate index.html
*/

"use strict";
var formValidity = true;

// event handler for submit - validates form
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;
    // fuction to validate required fields
    function validateRequired() {
        //support variables for validation
        function validateAddress(fieldsetId) {
            var inputElements = document.querySelectorAll("#contactinfo input");
            var errorDiv = document.getElementById("#numErrorText");
            var fieldsetValidity = true;
            var elementCount = inputElements.length;
            var currentElement = null;
        }
    }

    //form validation function
    validateRequired();

    // validation results
    if (formValidity === true) {
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    } else {
        document.getElementById("errorText").innerHTML = "Please fix the indicated problems and resubmit your personal information";
        document.getElementById("errorText").style.display = "block";
        scroll(0, 0);
    }
}

// on load event create necessary event handlers 
function createEventListeners() {
    // submit event listener with handler validateForm()
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
        // try catch to handle 
    }

}
//event handler createEventListeners

// enable load event handlers
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}

import { passwordVisibilityToggle } from '/js/show-hide-password.js';
import { validateForm } from '/js/validateForm.js';

window.addEventListener("DOMContentLoaded", function() {
    // Show - hide password
    const toggleVisibilityButton = document.getElementById("showPassword");

    toggleVisibilityButton.addEventListener("click", passwordVisibilityToggle);

    const loginForm = document.getElementById("login");
    loginForm.addEventListener("submit", function (event) {
        console.log("login submitted");

        if(!validateForm("login")) {
            event.preventDefault();
        };
    })

    const registerForm = document.getElementById("register")
    registerForm.addEventListener("submit", function (event) {
        console.log("register submitted");

        if(!validateForm("register")) {
            event.preventDefault();
        };
    })

})

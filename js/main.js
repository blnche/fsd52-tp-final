import { passwordVisibilityToggle } from '/js/show-hide-password.js';
import { validateForm } from '/js/validateForm.js';
import { realTimeValidation } from '/js/validateInputs.js';
import { toggleMobileMenu } from '/js/toggleMenu.js';

window.addEventListener("DOMContentLoaded", function() {

    console.log(this.window.innerWidth);
    // Mobile Menu Toggle
    toggleMobileMenu();

    // Authentification Page
    if (this.window.location.pathname.includes("authentification")) {
        
        // Real Time Validation of Inputs
        realTimeValidation();

        // Password Visibility
        const toggleVisibilityButton = document.getElementById("showPassword");
    
        toggleVisibilityButton.addEventListener("click", passwordVisibilityToggle);
    
        // Forms Validator
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
    }


})

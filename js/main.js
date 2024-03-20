import {passwordVisibilityToggle} from '/js/show-hide-password.js';

window.addEventListener("DOMContentLoaded", function() {
    // Show - hide password
    const toggleVisibilityButton = document.getElementById("showPassword");

    toggleVisibilityButton.addEventListener("click", passwordVisibilityToggle);

})
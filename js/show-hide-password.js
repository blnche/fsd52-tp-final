function passwordVisibilityToggle(){
    const passwordInput = document.getElementById("password");

    if(passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// check id
// add input checkbox with onclick="passwordVisibilityToggle()" to show or hide 
// do i need to call function in main too ?
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    
    input.addEventListener("invalid"), (e) => {
        console.log(e);
    }
});














  //Set form validation
  document.querySelectorAll("[data-customvalidate").forEach(function(element) {
    element.addEventListener("submit", function(event) {
      let isNotValid = false;
      //Go through each of the input element
      this.querySelectorAll("input").forEach(function(input) {
        //Validate the input and set the isNotValid flg
        if (validateField(input) && !isNotValid) {
          isNotValid = true;
        }
      });
  
      //Stop the form submit if not valid
      if (isNotValid) {    
        event.preventDefault();
      }
    });
  });
  
  
  //Main Validation Funtion
  function validateField(field) {
    let attributes = field.getAttributeNames();
    let parent = field.parentNode
    let errorField = parent.querySelector(".formError");
  
    let isError = false;
    //Required Vlidation
    if (attributes.includes("required") && field.value === "") {
      errorField.textContent = `The ${field.dataset.errorfieldname} field is required`;
      isError = true;
      //Min Length Validation
    } else if (attributes.includes("minlength") && (field.value.length < field.getAttribute("minlength"))) {
      errorField.textContent = `The mininmum length for ${field.dataset.errorfieldname} field is ${field.getAttribute("minlength")} characters`;
      isError = true;
      //Match Validation
    } else if (attributes.includes("data-mustmatch")) {
      let elementToMatch = document.getElementById(field.dataset.mustmatch);
      if (elementToMatch.value !== field.value) {
        errorField.textContent = `The ${elementToMatch.dataset.errorfieldname} and ${field.dataset.errorfieldname} do not match`;
        isError = true;
      }
    }
  
    parent.classList.toggle("error", isError);
    return isError;
  }
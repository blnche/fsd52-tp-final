export function realTimeValidation() {
    let emailInput = document.getElementById("emailConnexion");
    let usernameInput =document.getElementById("pseudo");

    let error = document.getElementById("errorLogin");
    
    let emailCode = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    let passwordCode = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{12,}$/;

    
    emailInput.addEventListener("input", function () {
        let errorMsg = "";

        if (!emailCode.test(emailInput.value)) {
            errorMsg += "Veuillez saisir une adresse e-mail valide.";
        }

        if (!errorMsg) {
            error.textContent = "";
            return true;
        } else {
            error.textContent = errorMsg;
            return false;
        }
    })

    usernameInput.addEventListener("input", function () {
        let errorMsg = "";

        let username = usernameInput.value;

        if (username.length < 4) {
            errorMsg += "Le pseudo ne doit pas faire en dessous de 4 caractère.";
        } 

        if (!errorMsg) {
            error.textContent = "";
            return true;
        } else {
            error.textContent = errorMsg;
            return false;
        }
    })
}
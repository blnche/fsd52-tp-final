export function validateForm (form) {

    let passwordCode = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{12,}$/;
    let emailCode = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

    
    if (form === "login") {
        
        let error = document.getElementById("errorLogin");
        let email = document.getElementById("emailConnexion").value;
        let password = document.getElementById("passwordConnexion").value;

        let errorMsg = "";

        if (!passwordCode.test(password)) {
            errorMsg += "Un mot de passe valide doit contenir au moins 12 caractères et doit inclure au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.";
        } 
        if (!emailCode.test(email)) {
            errorMsg += "Veuillez saisir une adresse e-mail valide.";
        }

        if (!errorMsg) {
            error.textContent = "";
            return true;
        } else {
            error.textContent = errorMsg;
            return false;
        }
    } else if (form === "register") {

        let error = document.getElementById("errorRegister");
        let username = document.getElementById("pseudo").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        let errorMsg = "";

        if (!passwordCode.test(password)) {
            errorMsg += "Un mot de passe valide doit contenir au moins 12 caractères et doit inclure au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.";
        } 
        if (password !== confirmPassword) {
            errorMsg += "Les deux mot de passes doivent être les mêmes.";
        }
        if (!emailCode.test(email)) {
            errorMsg += "Veuillez saisir une adresse e-mail valide.";
        }
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

    }

}
export function validateForm (form) {

    let passwordCode = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{12,}$/;
    let emailCode = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

    if (form === "login") {

        let email = document.getElementById("emailConnexion").value;
        let password = document.getElementById("passwordConnexion").value;

        let error = document.getElementById("error");

        if (!passwordCode.test(password) && !emailCode.test(email)) {
            error.textContent = "Un mot de passe valide doit contenir au moins 12 caractères et doit inclure au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial. Veuillez saisir une adresse e-mail valide.";
            return false;
        } else if (!passwordCode.test(password)) {
            error.textContent = "Un mot de passe valide doit contenir au moins 12 caractères et doit inclure au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.";
            return false;
        } else if (!emailCode.test(email)) {
            error.textContent = "Veuillez saisir une adresse e-mail valide.";
            return false;
        } else {
            let error = document.getElementById("error");
            error.textContent = "";
            return true;
        }
    } else if (form === "register") {

        let username = document.getElementById("pseudo");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirmPassword");

        if((!passwordCode.test(password) && password === confirmPassword) || !emailCode.test(email) || username.length < 4) {
            let error = document.getElementById("error");
            error.textContent = "Le mot de passe doit &&!!, l'adresse mail doit posséder '@' et '.com' ou '.fr' et le pseudo doit faire au minimum 4 charatères";
            return false;
        } else {
            let error = document.getElementById("error");
            error.textContent = "";
            return true;
        }

    }

}
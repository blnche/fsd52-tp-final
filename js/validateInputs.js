export function realTimeValidation() {
    let emailInput = document.getElementById("emailConnexion");
    let usernameInput = document.getElementById("pseudo");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    let errorLogin = document.getElementById("errorLogin");
    let errorRegister = document.getElementById("errorRegister");

    
    let emailCode = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    let passwordCode = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{12,}$/;

    
    emailInput.addEventListener("input", function () {
        let errorMsg = "";

        if (!emailCode.test(emailInput.value)) {
            errorMsg += "Veuillez saisir une adresse e-mail valide.";
        }

        if (!errorMsg) {
            errorLogin.textContent = "";
            return true;
        } else {
            errorLogin.textContent = errorMsg;
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
            errorRegister.textContent = "";
            return true;
        } else {
            errorRegister.textContent = errorMsg;
            return false;
        }
    })

    password.addEventListener("input", function () {
        let errorMsg = "";

        if (!passwordCode.test(password.value)) {
            errorMsg += "Un mot de passe valide doit contenir au moins 12 caractères et doit inclure au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.";
        }

        if (!errorMsg) {
            errorRegister.textContent = "";
            return true;
        } else {
            errorRegister.textContent = errorMsg;
            return false;
        }
    })

    confirmPassword.addEventListener("input", function () {
        let errorMsg = "";

        if (password.value !== confirmPassword.value) {
            errorMsg += "Les deux mot de passes doivent être les mêmes.";
        }

        if (!errorMsg) {
            errorRegister.textContent = "";
            return true;
        } else {
            errorRegister.textContent = errorMsg;
            return false;
        }
    })

//     - html : img responsive 
// - css : en module (import de tous les fichiers tyle dans le style.css et une seule balise style dans page html)
// - js : terminer validation inputs en temps réel
// - css button plumbbot gets out of place when resizing height + 

  
}
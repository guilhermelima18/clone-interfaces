function login() {
    const button = document.querySelector(".card button");
    const inputEmail = document.querySelector(".card input[type=email]");
    const inputPassword = document.querySelector(".card input[type=password]");

    const userEmail = "guilhermelima18@hotmail.com";
    const userPassword = "159753";

    button.addEventListener("click", () => {
        if (inputEmail.value == userEmail && inputPassword.value == userPassword) {
            window.location.href = "user.html";
        }
        else {
            inputEmail.style.border = "3px solid red";
            inputPassword.style.border = "3px solid red";
            alert("Usuário e ou senha incorretos.");
        }
    });
}
login();
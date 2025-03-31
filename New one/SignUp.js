const showPassword = document.getElementById('show-password');
const password = document.getElementById('password');

showPassword.addEventListener('click', () => {
    if (password.type === "password") {
        showPassword.src = "Hide.png";
        password.type = "text";
    } else {
        showPassword.src = "Show.png";
        password.type = "password";
    }
});

let info = {};
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');

emailInput.addEventListener("input", function() {
    info.email = this.value;
});

passInput.addEventListener("input", function() {
    info.pass = this.value;
});

const button = document.getElementById('SingButton');
button.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(emailInput.value);
    console.log(passInput.value);
});
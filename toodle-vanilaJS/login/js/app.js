const emailInput = document.querySelector(".login_email_input")
const passwordInput = document.querySelector(".login_password_input")
const emailInputFocusLine = document.querySelector(".login_email_focus_line");
const passwordInputFocusLine = document.querySelector(".login_password_focus_line");
const password_show_btn = document.querySelector(".login_password img")
const HIDDEN_CLASSNAME = "hidden";

emailInput.onfocus = function (e) {
    emailInputFocusLine.classList.remove(HIDDEN_CLASSNAME);
}

emailInput.onblur = function (e) {
    emailInputFocusLine.classList.add(HIDDEN_CLASSNAME);
}

passwordInput.onfocus = function (e) {
    passwordInputFocusLine.classList.remove(HIDDEN_CLASSNAME);
}

passwordInput.onblur = function (e) {
    passwordInputFocusLine.classList.add(HIDDEN_CLASSNAME);
}
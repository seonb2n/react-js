const emailInput = document.querySelector(".login_email_input");
const passwordInput = document.querySelector(".login_password_input");
const emailInputFocusLine = document.querySelector(".login_email_focus_line");
const passwordInputFocusLine = document.querySelector(".login_password_focus_line");
const passwordShowBtn = document.querySelector(".login_password img");
const loginBtn = document.querySelector(".login_form_submit_button");
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

function onShowPassword() {
    if (passwordInput.getAttribute("type") === "password") {
        passwordInput.setAttribute("type", "text");
        passwordShowBtn.src = "src/ic_task_look_on.png";
    } else {
        passwordInput.setAttribute("type", "password");
        passwordShowBtn.src = "src/ic_task_look_off.png";
    }
}

function onLoginBtnClicked(e) {
    e.preventDefault();
    const userEmail = emailInput.value;
    const userPassword = passwordInput.value;
    fetch("http://192.168.35.157:8080/api/v1/users/login", {
        method: "POST",
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            "Content-Type": "application/json",
        },
        redirect: 'follow',
        body: JSON.stringify({
            userEmail: userEmail,
            password: userPassword,
        }),
    }).then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
        const userName = data;
    })
        .catch(error => console.log(error));

}

passwordShowBtn.addEventListener("click", onShowPassword);
loginBtn.addEventListener("click", onLoginBtnClicked);
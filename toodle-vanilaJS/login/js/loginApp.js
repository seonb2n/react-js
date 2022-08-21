const emailInput = document.querySelector(".login_email_input");
const passwordInput = document.querySelector(".login_password_input");
const emailInputFocusLine = document.querySelector(".login_email_focus_line");
const passwordInputFocusLine = document.querySelector(".login_password_focus_line");
const passwordShowBtn = document.querySelector(".login_password img");
const loginBtn = document.querySelector(".reset_form_submit_button");
const findPasswordBtn = document.querySelector(".findPasswordBtn");
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

function loginFail() {
    const loginFailTxt = document.querySelector(".reset_info_text");
    loginFailTxt.classList.remove(HIDDEN_CLASSNAME);
    const btnInput = loginBtn.querySelector("input");
    btnInput.style.border = '3px solid #000000';
    const btnImg = loginBtn.querySelector(".reset_form_submit_button_text img");
    btnImg.src = "src/ic_check_orange.png";
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
        if(response.status !== 200) {
            throw new Error();
        }
        return response.json();
    }).then((data) => {
        // console.log(data.data);
            var userName = data.data['userNickName'];
            console.log(userName);
            alert(userName + "님 로그인 성공");
    })
        .catch(error => {
            console.log(error)
            loginFail()
        });
}

function onFindPassword() {
    window.location.href = '../login/passwordReset.html';
}



passwordShowBtn.addEventListener("click", onShowPassword);
loginBtn.addEventListener("click", onLoginBtnClicked);
findPasswordBtn.addEventListener("click", onFindPassword);
const backBtn = document.querySelector(".back_button");
const sendEmailBtn = document.querySelector(".reset_form_submit_button");

function onBack() {
    window.location.href = '../login/login.html';
}

function onSendEmail() {
    window.location.href = '../login/passwordResetResult.html';
}

backBtn.addEventListener("click", onBack)
sendEmailBtn.addEventListener("click", onSendEmail);
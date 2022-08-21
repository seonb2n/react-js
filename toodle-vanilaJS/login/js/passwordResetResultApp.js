const backHomeBtn = document.querySelector(".reset_form_back_home_button");

function onBackHomeClicked() {
    window.location.href = '../login/login.html';
}

backHomeBtn.addEventListener("click", onBackHomeClicked);
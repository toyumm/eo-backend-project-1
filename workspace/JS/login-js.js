document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const findBtn = document.getElementById("findBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            location.href = "../index.html";
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener("click", () => {
            location.href = "./signup-page.html";
        });
    }

    if (findBtn) {
        findBtn.addEventListener("click", () => {
            location.href = "./password-page.html";
        });
    }

});

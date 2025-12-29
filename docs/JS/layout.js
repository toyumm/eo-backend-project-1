document.addEventListener("DOMContentLoaded", function () {

    fetch("../html/head.html")
        .then(function (res) {
            return res.text();
        })
        .then(function (html) {
            const headerArea = document.getElementById("header-area");
            if (headerArea) {
                headerArea.innerHTML = html;
            }
        });

    fetch("../html/foot.html")
        .then(function (res) {
            return res.text();
        })
        .then(function (html) {
            const footerArea = document.getElementById("footer-area");
            if (footerArea) {
                footerArea.innerHTML = html;
            }
        });

    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
});

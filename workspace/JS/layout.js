document.addEventListener("DOMContentLoaded", function () {
    fetch("../html/head.html")
        .then(function (res) {
            return res.text();
        })
        .then(function (html) {
            document.getElementById("header-area").innerHTML = html;
        });

    fetch("../html/foot.html")
        .then(function (res) {
            return res.text();
        })
        .then(function (html) {
            document.getElementById("footer-area").innerHTML = html;
        });
});

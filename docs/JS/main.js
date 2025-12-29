document.addEventListener("DOMContentLoaded", function() {
    const authArea = document.getElementById("authArea");
    const profileArea = document.getElementById("profileArea");
    const profileBtn = document.getElementById("profileBtn");
    const profileMenu = document.getElementById("profileMenu");

    const logoutBtn = document.getElementById("logoutBtn");
    const searchBtn = document.getElementById("searchBtn");

    const darkModeBtn = document.getElementById("dark-mode-button");


    function applyAuthUI() {
        const isLogin = localStorage.getItem("isLogin") === "true";

        if (isLogin) {
            authArea.classList.add("hidden");
            profileArea.classList.remove("hidden");
            profileMenu.classList.add("hidden");
        } else {
            authArea.classList.remove("hidden");
            profileArea.classList.add("hidden");
            profileMenu.classList.add("hidden");
        }
    }

    function logout() {
        localStorage.removeItem("isLogin");
        applyAuthUI();
    }

    logoutBtn.addEventListener("click", logout);

    searchBtn.addEventListener("click", function() {
        location.href = "./HTML/question-result.html";
    });

    profileBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        profileMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", function() {
        profileMenu.classList.add("hidden");
    });

    applyAuthUI();




    function updateButtonText() {
        if (!darkModeBtn) return;
        darkModeBtn.textContent = document.body.classList.contains("dark")
            ? "Light mode"
            : "Dark mode";
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    updateButtonText();

    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            const isDark = document.body.classList.contains("dark");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            updateButtonText();
        });
    }


});

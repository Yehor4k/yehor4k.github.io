document.addEventListener("DOMContentLoaded", function () {
    const themeSwitcherButton = document.getElementById("theme-switcher");
    const themeableContent = document.getElementById("theme");

    themeSwitcherButton.addEventListener("click", function () {
        if (themeableContent.getAttribute("data-bs-theme") === "light") {
            themeableContent.setAttribute("data-bs-theme", "dark");
        } else {
            themeableContent.setAttribute("data-bs-theme", "light");
        }
    });
});

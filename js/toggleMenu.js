export function toggleMobileMenu() {
    const menubutton = document.getElementById("menuButton");
    const nav = document.getElementById("nav");

    menubutton.addEventListener("click", function () {

        if (window.getComputedStyle(nav).display === "block") {
            nav.style.display = "none";
        } else if (window.getComputedStyle(nav).display === "none") {
            nav.style.display = "block";
        }
    })
}
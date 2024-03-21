export function toggleMobileMenu() {
    const menubutton = document.getElementById("menuButton");
    const nav = document.getElementById("nav");

    console.log(menubutton);
    console.log(nav);
    console.log(window.getComputedStyle(nav).display);

    menubutton.addEventListener("click", function () {

        if (window.getComputedStyle(nav).display === "block") {
            nav.style.display = "none";
        } else if (window.getComputedStyle(nav).display === "none") {
            nav.style.display = "block";
        }
    })
}
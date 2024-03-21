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

    // Règle pb suivant : si navigation display = none, quand fenêtre passe en desktop il n'y a plus de nav
    window.addEventListener("resize", function () {
        
        if(this.window.innerWidth > 668) {
            nav.style.display = "block";
            menubutton.style.display = "none";
        } else if (this.window.innerWidth < 668) {
            menubutton.style.display = "block";
        }
    })
}
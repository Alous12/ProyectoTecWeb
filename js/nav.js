const header = document.querySelector("header");
const toggleButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll("header nav a");

if (header && toggleButton) {
    const closeMenu = () => {
        header.classList.remove("menu-open");
        toggleButton.setAttribute("aria-expanded", "false");
    };

    const toggleMenu = () => {
        const isOpen = header.classList.toggle("menu-open");
        toggleButton.setAttribute("aria-expanded", String(isOpen));
    };

    toggleButton.addEventListener("click", toggleMenu);

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 1024) {
                closeMenu();
            }
        });
    });

    document.addEventListener("click", (event) => {
        if (!header.contains(event.target)) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) {
            closeMenu();
        }
    });
}

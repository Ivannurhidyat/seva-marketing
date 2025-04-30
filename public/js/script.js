document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");
    const body = document.body;
    const header = document.getElementById("header");


    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            // scroll ke bawah:
            header.classList.remove('bg-dark', 'shadow-md');
            header.classList.add(
                'bg-dark/80',       // 80% opacity
                'backdrop-blur-sm', // efek blur
            );
        } else {
            // di paling atas:
            header.classList.remove(
                'bg-dark/80',
                'backdrop-blur-sm',
            );
            header.classList.add('bg-dark', 'shadow-md');
        }
    });

    // Toggle Menu
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("is-active");
        menu.classList.toggle("menu-active");
        body.classList.toggle("overflow-hidden");
    });

    // Auto close menu on link click
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("is-active");
            menu.classList.remove("menu-active");
            body.classList.remove("overflow-hidden");
        });
    });

    // Scroll Spy: Active Link on Scroll
    window.addEventListener("scroll", () => {
        let current = "";
        const scrollPos = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }

            // Last section fix
            if (
                index === sections.length - 1 &&
                window.scrollY + window.innerHeight >= document.body.scrollHeight - 10
            ) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("text-gradient", "font-bold", "active");

            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("text-gradient", "font-bold", "active");
            }
        });
    });
    // Load Lottie Animation
    lottie.loadAnimation({
        container: document.getElementById("lottie-hero-btn"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "public/lottie/Comp1.json" // Path to your animation file,
    });
});

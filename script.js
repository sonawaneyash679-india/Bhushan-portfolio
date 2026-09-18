/*==================================================
    BHUSHANDEV PORTFOLIO
    JavaScript
==================================================*/


/*==================== MOBILE MENU ====================*/

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

if (menu && navLinks) {

    menu.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menu.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("ri-menu-3-line");
            icon.classList.add("ri-close-line");

        } else {

            icon.classList.remove("ri-close-line");
            icon.classList.add("ri-menu-3-line");

        }

    });


    /* Close menu after clicking a link */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menu.querySelector("i");

            icon.classList.remove("ri-close-line");
            icon.classList.add("ri-menu-3-line");

        });

    });

}


/*==================== SCROLL TOP BUTTON ====================*/

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


if (scrollTop) {

    scrollTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/*==================== ACTIVE NAVIGATION ====================*/

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNav
);


/*==================== HEADER SCROLL EFFECT ====================*/

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(12, 9, 23, 0.90)";

    } else {

        header.style.background =
            "rgba(16, 13, 29, 0.72)";

    }

});


/*==================== SIMPLE TYPING EFFECT ====================*/

const typingElement =
    document.querySelector(".typing");

if (typingElement) {

    const roles = [
        "Python Full Stack Developer",
        "Django & FastAPI Developer",
        "Python Developer",
        "Data Analytics & ML Enthusiast"
    ];

    let roleIndex = 0;
    let characterIndex = 0;

    let deleting = false;

    function typeEffect() {

        const currentRole =
            roles[roleIndex];

        if (!deleting) {

            typingElement.textContent =
                currentRole.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;

            if (
                characterIndex ===
                currentRole.length
            ) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1800
                );

                return;
            }

        } else {

            typingElement.textContent =
                currentRole.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                roleIndex =
                    (roleIndex + 1) %
                    roles.length;

            }

        }

        const speed =
            deleting ? 45 : 75;

        setTimeout(
            typeEffect,
            speed
        );

    }

    typeEffect();

}


/*==================== SCROLL REVEAL ====================*/

const revealElements = document.querySelectorAll(
    ".glass, .section-title, .stat-card"
);

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.10
        }
    );


revealElements.forEach(element => {

    element.classList.add(
        "reveal-element"
    );

    revealObserver.observe(element);

});


/*==================== DYNAMIC YEAR ====================*/

const footerYear =
    document.querySelector(".footer-bottom p");

if (footerYear) {

    const currentYear =
        new Date().getFullYear();

    footerYear.textContent =
        `© ${currentYear} Bhushan Sonawane. All Rights Reserved.`;

}


/*==================== PREVENT EMPTY # LINKS ====================*/

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

    });

});




/*==================== SCROLL REVEAL ====================*/

.reveal-element {
    opacity: 0;
    transform: translateY(25px);
    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}

.reveal-visible {
    opacity: 1;
    transform: translateY(0);
}

.nav-links a.active {
    color: #c084fc;
}

.nav-links a.active::after {
    width: 100%;
}

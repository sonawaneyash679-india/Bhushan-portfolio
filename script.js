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


    /* Close mobile menu after clicking */

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

    if (!scrollTop) return;

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

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

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

updateActiveNav();


/*==================== HEADER SCROLL EFFECT ====================*/

const header =
    document.querySelector(".header");


function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(8, 11, 22, 0.94)";

        header.style.borderBottom =
            "1px solid rgba(139, 92, 246, 0.12)";

    } else {

        header.style.background =
            "rgba(8, 11, 22, 0.78)";

        header.style.borderBottom =
            "1px solid rgba(148, 163, 184, 0.08)";

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/*==================== TYPING EFFECT ====================*/

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
                    1700
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

const revealElements =
    document.querySelectorAll(
        ".glass, .section-title, .stat-card"
    );


if ("IntersectionObserver" in window) {

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

}


/*==================== DYNAMIC YEAR ====================*/

const footerYear =
    document.querySelector(".footer-bottom p");


if (footerYear) {

    const currentYear =
        new Date().getFullYear();

    footerYear.textContent =
        `© ${currentYear} Bhushan Sonawane. All Rights Reserved.`;

}


/*==================== CLOSE MENU ON OUTSIDE CLICK ====================*/

document.addEventListener("click", event => {

    if (!menu || !navLinks) return;

    const clickedInsideMenu =
        menu.contains(event.target);

    const clickedInsideNav =
        navLinks.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedInsideNav &&
        navLinks.classList.contains("active")
    ) {

        navLinks.classList.remove("active");

        const icon =
            menu.querySelector("i");

        icon.classList.remove(
            "ri-close-line"
        );

        icon.classList.add(
            "ri-menu-3-line"
        );

    }

});


/*==================== PREVENT EMPTY # LINKS ====================*/

document
    .querySelectorAll('a[href="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

            }
        );

    });

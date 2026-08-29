```javascript
/*================================================
    MOBILE MENU
================================================*/

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

if (menu && navLinks) {

    menu.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        /* Change menu icon */

        const icon = menu.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("ri-menu-3-line");
            icon.classList.add("ri-close-line");

        } else {

            icon.classList.remove("ri-close-line");
            icon.classList.add("ri-menu-3-line");

        }

    });

}



/*================================================
    CLOSE MOBILE MENU AFTER CLICK
================================================*/

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menu.querySelector("i");

        if (icon) {

            icon.classList.remove("ri-close-line");
            icon.classList.add("ri-menu-3-line");

        }

    });

});



/*================================================
    TYPING EFFECT
================================================*/

const text = [

    "Python Full Stack Developer",
    "Django Developer",
    "FastAPI Developer",
    "Machine Learning Enthusiast",
    "SQL & Power BI Developer"

];


let index = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.querySelector(".typing");


function typeEffect() {

    if (!typing) return;


    const currentText = text[index];


    if (!isDeleting) {

        typing.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;


        if (charIndex === currentText.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }


        setTimeout(typeEffect, 90);

    }


    else {

        typing.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;


        if (charIndex === 0) {

            isDeleting = false;

            index++;

            if (index >= text.length) {

                index = 0;

            }

            setTimeout(typeEffect, 400);

            return;

        }


        setTimeout(typeEffect, 50);

    }

}



/* Start typing effect */

document.addEventListener("DOMContentLoaded", () => {

    if (typing) {

        typing.textContent = "";

        setTimeout(typeEffect, 500);

    }

});



/*================================================
    NAVBAR BACKGROUND ON SCROLL
================================================*/

const header = document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (!header) return;


    if (window.scrollY > 50) {

        header.style.background =
            "rgba(8, 5, 18, 0.94)";

        header.style.backdropFilter =
            "blur(18px)";

        header.style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.25)";

    }

    else {

        header.style.background =
            "rgba(8, 5, 18, 0.55)";

        header.style.backdropFilter =
            "blur(12px)";

        header.style.boxShadow =
            "none";

    }

});



/*================================================
    SCROLL TOP BUTTON
================================================*/

const scrollTop =
    document.getElementById("scrollTop");


if (scrollTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            scrollTop.classList.remove("hide");

        }

        else {

            scrollTop.classList.add("hide");

        }

    });


    scrollTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



/*================================================
    SCROLL REVEAL ANIMATION
================================================*/

const revealElements =
    document.querySelectorAll(
        ".glass, .project-card, .tool-card, .domain-card"
    );


/* Initial state */

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});



const reveal = () => {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach((element, i) => {

        const elementTop =
            element.getBoundingClientRect().top;


        const visible =
            100;


        if (elementTop <
            windowHeight - visible) {

            setTimeout(() => {

                element.style.opacity = "1";

                element.style.transform =
                    "translateY(0)";

            }, i * 40);

        }

    });

};


window.addEventListener(
    "scroll",
    reveal
);


window.addEventListener(
    "load",
    reveal
);


reveal();



/*================================================
    ACTIVE NAVIGATION LINK
================================================*/

const sections =
    document.querySelectorAll("section[id]");


const navItems =
    document.querySelectorAll(".nav-links a");


function activeNav() {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navItems.forEach(item => {

        item.classList.remove("active");


        if (
            item.getAttribute("href") ===
            "#" + current
        ) {

            item.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    activeNav
);


window.addEventListener(
    "load",
    activeNav
);



/*================================================
    SMOOTH SCROLL
================================================*/

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );


            if (target) {

                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }
    );

});



/*================================================
    BUTTON RIPPLE EFFECT
================================================*/

const buttons =
    document.querySelectorAll(
        ".btn1, .btn2, .project-btn, .social-btn"
    );


buttons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            this.style.transform =
                "scale(0.96)";


            setTimeout(() => {

                this.style.transform =
                    "";

            }, 120);

        }
    );

});



/*================================================
    PROJECT CARD HOVER EFFECT
================================================*/

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -2;


            const rotateY =
                ((x - centerX) / centerX) * 2;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});



/*================================================
    PAGE LOADER / READY EFFECT
================================================*/

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);



/*================================================
    CONSOLE MESSAGE
================================================*/

console.log(
    "%c Bhushan Sonawane | Python Full Stack Developer ",
    "color:#ff66d6;font-size:16px;font-weight:bold;"
);

console.log(
    "Python • Django • FastAPI • Machine Learning • SQL • Power BI"
);
```

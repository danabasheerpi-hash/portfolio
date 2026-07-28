// ===============================
// Sticky Header
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(7,21,45,0.98)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.25)";
    } else {
        header.style.background = "rgba(7,21,45,.92)";
        header.style.boxShadow = "none";
    }
});


// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Scroll Reveal Animation
// ===============================

const reveals = document.querySelectorAll(
    ".skill-card, .project-card, .achievement-card, .timeline-item, .contact-card"
);

function revealElements() {

    const windowHeight = window.innerHeight;

    reveals.forEach(item => {

        const revealTop = item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            item.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);


// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ===============================
// Scroll To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// Hero Typing Effect
// ===============================

const role = document.querySelector(".hero-text h2");

if (role) {

    const text = role.textContent;

    role.textContent = "";

    let i = 0;

    function typeEffect() {

        if (i < text.length) {

            role.textContent += text.charAt(i);

            i++;

            setTimeout(typeEffect, 60);

        }

    }

    window.addEventListener("load", typeEffect);

}


// ===============================
// Current Year in Footer
// ===============================

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${year} Dana Basheer. All Rights Reserved.`;

}

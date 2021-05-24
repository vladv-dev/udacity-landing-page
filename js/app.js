// --- navBar --- //
const navbar = document.querySelector("header");
const navToggle = document.querySelector(".burger");

navToggle.addEventListener("click", () => {
    navbar.classList.toggle("opened");
});


// --- highlighting current section of the page  +  scroll-up  button --- //
const scrollUp = document.querySelector(".scroll-up-btn");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrolling);
function scrolling() {
    let Yscroll = window.pageYOffset;
// -- adding scroll-up button after reaching 400px on scrolling
    if (Yscroll > 400) {
        scrollUp.classList.add("show-scroll-up");
    } else {
        scrollUp.classList.remove("show-scroll-up");
    }
// -- defining sections in terms of height of element, relative to the parent, on the viewpoint
    sections.forEach( section => {
        const sectionH = section.getBoundingClientRect().height;
        const sectionTop = section.offsetTop - 200;
        sectionID = section.getAttribute("id");
        let currentSection = document.querySelector(".navbar-item a[href*=" + sectionID + "]");
        if (Yscroll > sectionTop && Yscroll <= sectionTop + sectionH) {
            currentSection.classList.add("current");
        } else {
            currentSection.classList.remove("current");
        }
    })
    
}

// --- best features tabs functionality ---- //

const feature = document.querySelector(".features");
const tabBtns = document.querySelectorAll(".tab-btn");
const FeatureArcticles = document.querySelectorAll(".content");

feature.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    if (id) {
        tabBtns.forEach( btn => {
            btn.classList.remove("active");
        });
        event.target.classList.add("active");

        FeatureArcticles.forEach( featArticle => {
            featArticle.classList.remove("active");
        });
        const featElement = document.getElementById(id);
        featElement.classList.add("active");
    }
});

// --- display current year in copyright footnote --- //
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


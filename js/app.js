// --- navBar --- //
const navbar = document.querySelector("header");
const navToggle = document.querySelector(".burger");
const navContainer = document.querySelector(".navbar-container");
const navMenu = ["About", "Features", "Pricing", "Team", "Contact"];
const fragment = new DocumentFragment();

// toggle the menu button
navToggle.addEventListener("click", () => {
    navbar.classList.toggle("opened");
});
// creating items of the menu
navMenu.forEach( function(item) {
    const Ael = document.createElement("a");
    Ael.textContent = item;
    Ael.classList.add("navbar-link");
    Ael.setAttribute("href", `#${item}`);
    const navItem = document.createElement("li");
    navItem.classList.add("navbar-item");
    navItem.appendChild(Ael);
    fragment.appendChild(navItem);
});
// creating the ul that contains menu items
const navDiv = document.createElement("div");
navDiv.classList.add("navbar-menu");
const navUl = document.createElement("ul");
navUl.classList.add("navbar-links");
navUl.appendChild(fragment);
navDiv.appendChild(navUl);
navContainer.appendChild(navDiv);

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
// -- defining sections
    sections.forEach( section => {
        const sectionH = section.getBoundingClientRect().height;
        const sectionTop = section.offsetTop - 200;
        sectionID = section.getAttribute("id");
        // highlighting current section in the top menu item list
        let currentSection = document.querySelector(".navbar-item a[href*=" + sectionID + "]");
        if (Yscroll > sectionTop && Yscroll <= sectionTop + sectionH) {
            currentSection.classList.add("current");
        } else {
            currentSection.classList.remove("current");
        }
    })
    
}

// --- features tabs functionality ---- //

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


import {homePage, divContent, childContainer, image, overlayTxtDiv} from "./home.js";
import {menuPage} from "./menu.js";
import {aboutPage} from "./about.js";

// Select buttons from the DOM
const homeBtn = document.querySelector("button:first-child");
const menuBtn = document.querySelector("button:nth-child(2)");
const aboutBtn = document.querySelector("button:nth-child(3)");

// Handle code execution from home.js, menu.js, and about.js by adding event listeners

let clickCounter = 0;
if (clickCounter === 0) {
    homePage();
    clickCounter++;
}

let mouseoverOpacity = 0.7;

homeBtn.addEventListener("mouseover", () => {
    homeBtn.style.opacity = `${mouseoverOpacity}`;
    homeBtn.addEventListener("mouseout", () => {
        homeBtn.style.opacity = "1";
    })
})

menuBtn.addEventListener("mouseover", () => {
    menuBtn.style.opacity = `${mouseoverOpacity}`;
    menuBtn.addEventListener("mouseout", () => {
        menuBtn.style.opacity = "1";
    })
})

aboutBtn.addEventListener("mouseover", () => {
    aboutBtn.style.opacity = `${mouseoverOpacity}`;
    aboutBtn.addEventListener("mouseout", () => {
        aboutBtn.style.opacity = "1";
    })
})

homeBtn.addEventListener("click", () => {
    childContainer.remove();
    image.remove();
    overlayTxtDiv.remove();
    // Remove contents of div#content
    divContent.innerHTML = "";
    homePage();
})

menuBtn.addEventListener("click", () => {
    // Remove childContainer
    childContainer.remove();
    menuPage();
})

aboutBtn.addEventListener("click", () => {
    // Remove contents of div#content
    childContainer.remove();
    aboutPage();
})


// Import css styles
import "./style.css";



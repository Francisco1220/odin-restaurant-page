import {homePage} from "./home.js";
import {menuPage} from "./menu.js";

// Select buttons from the DOM
const homeBtn = document.querySelector("button:first-child");
const menuBtn = document.querySelector("button:nth-child(2)");
const aboutBtn = document.querySelector("button:nth-child(3)");

// Handle code execution from home.js, menu.js, and about.js by adding event listeners
homePage();


// Import css styles
import "./style.css";



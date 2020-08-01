import addTop from './top.js';
import addHome from'./home.js';
import addMenu from './menu.js';
import addContact from './contact.js';

// Add title and nav bar to page
let content = document.getElementById("content");
addTop(content);

// Load home content by default
let main = document.getElementById("main");
addHome(main);

// Add event listener for home button
let homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {
    homeBtn.style.borderBottom = "5px solid white";
    menuBtn.style.borderBottom = "none";
    contactBtn.style.borderBottom = "none";
    clearSection();
    addHome(main);
})

// Event listener for menu button
let menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
    homeBtn.style.borderBottom = "none";
    menuBtn.style.borderBottom = "5px solid white";
    contactBtn.style.borderBottom = "none";
    clearSection();
    addMenu(main);
})

// Event listener for contact button
let contactBtn = document.getElementById("contact");
contactBtn.addEventListener("click", () => {
    homeBtn.style.borderBottom = "none";
    menuBtn.style.borderBottom = "none";
    contactBtn.style.borderBottom = "5px solid white";
    clearSection();
    addContact(main);
})    

// Clear section for home, menu or contact information
function clearSection() {
    let homeDiv = document.getElementById("description");
    let menuDiv = document.getElementById("menu-div");
    let contactDiv = document.getElementById("contact-div");

    if (homeDiv !== null) {
        homeDiv.remove();
    }

    if (menuDiv !== null) {
        menuDiv.remove();
    }

    if (contactDiv !== null) {
        contactDiv.remove();
    }
}
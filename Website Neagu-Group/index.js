//document.addEventListener("DOMContentLoaded", function() {  code....  }); -> Place your code where "code...." is if the script tag is placed in the head of the html page !
const languageSelect = document.getElementById("language-select");

languageSelect.addEventListener("change", function () {
    let selectedOption = languageSelect.value;

    // Use a switch statement to determine the destination page
    switch (selectedOption) {
        case "english":
            window.location.href = "index.html";
            break;
        case "french":
            window.location.href = "index - fr.html";
            break;
        case "romanian":
            window.location.href = "index - ro.html";
            break;
        case "dutch":
            window.location.href = "index - ned.html"; 
            break;
        default:
            // other cases
            break;
    }
});

// JavaScript for Toggle Menu

const navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

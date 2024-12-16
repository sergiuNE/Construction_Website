const languageSelect = document.getElementById("language-select");

languageSelect.addEventListener("change", function () {
    let selectedOption = languageSelect.value;

    // Use a switch statement to determine the destination page
    switch (selectedOption) {
        case "english":
            window.location.href = "services.html";
            break;
        case "french":
            window.location.href = "services - fr.html";
            break;
        case "romanian":
            window.location.href = "services - ro.html";
            break;
        case "dutch":
            window.location.href = "services - ned.html";
            break;
        default:
            // other cases
            break;
    }
});

// JavaScript for the Toggle Menu

const navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
} 
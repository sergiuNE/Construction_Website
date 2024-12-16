const languageSelect = document.getElementById("language-select");

languageSelect.addEventListener("change", function () {
    let selectedOption = languageSelect.value;

    // Gebruik een schakelstatement om de bestemmingspagina te bepalen
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
            // andere gevallen
            break;
    }
});

// JavaScript voor de Omschakelmenu

const navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
} 
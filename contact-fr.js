const languageSelect = document.getElementById("language-select");

languageSelect.addEventListener("change", function () {
    let selectedOption = languageSelect.value;

    // Utiliser une instruction de commutation pour déterminer la page de destination
    switch (selectedOption) {
        case "english":
            window.location.href = "contact.html";
            break;
        case "french":
            window.location.href = "contact - fr.html";
            break;
        case "romanian":
            window.location.href = "contact - ro.html";
            break;
        case "dutch":
            window.location.href = "contact - ned.html";
            break;
        default:
            // autres cas
            break;
    }
});

// JavaScript pour le Menu à Bascule

const navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
} 
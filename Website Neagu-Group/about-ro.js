const languageSelect = document.getElementById("language-select");

languageSelect.addEventListener("change", function () {
    let selectedOption = languageSelect.value;

    // Utilizați o declarație de comutare pentru a determina pagina de destinație
    switch (selectedOption) {
        case "english":
            window.location.href = "about.html"; 
            break;
        case "french":
            window.location.href = "about - fr.html"; 
            break;
        case "romanian":
            window.location.href = "about - ro.html"; 
            break;
        case "dutch":
            window.location.href = "about - ned.html"; 
            break;
        default:
            // alte cazuri
            break;
    }
});

// JavaScript pentru Meniul De Comutare

const navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
} 
const languageSelect = document.getElementById("language-select");

languageSelect.addEventListener("change", function () {
    let selectedOption = languageSelect.value;

    // Use a switch statement to determine the destination page
    switch (selectedOption) {
        case "english":
            window.location.href = "portfolio.html";
            break;
        case "french":
            window.location.href = "portfolio - fr.html";
            break;
        case "romanian":
            window.location.href = "portfolio - ro.html";
            break;
        case "dutch":
            window.location.href = "portfolio - ned.html";
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


// JavaScript for the Photos Menu

let slideIndexGermany = 1;
let slideIndexFrance = 1;
let slideIndexBelgium = 1;

showSlides(slideIndexGermany, 1); // Germany/Holland section
showSlides(slideIndexFrance, 2); // France/Belgium section
showSlides(slideIndexBelgium, 3); // Belgium section

function plusSlides(n, sectionIndex) {
    let slideshow;
    let newIndex;
    if (sectionIndex === 1) {
        slideshow = 'Germany';
        newIndex = slideIndexGermany + n;
        if (newIndex >= 1 && newIndex <= document.querySelectorAll('.campus:nth-of-type(2) .mySlides').length) {
            slideIndexGermany = newIndex;
            showSlides(slideIndexGermany, sectionIndex);
        }
    } else if (sectionIndex === 2) {
        slideshow = 'France';
        newIndex = slideIndexFrance + n;
        if (newIndex >= 1 && newIndex <= document.querySelectorAll('.campus:nth-of-type(3) .mySlides').length) {
            slideIndexFrance = newIndex;
            showSlides(slideIndexFrance, sectionIndex);
        }
    } else if (sectionIndex === 3) {
        slideshow = 'Belgium';
        newIndex = slideIndexBelgium + n;
        if (newIndex >= 1 && newIndex <= document.querySelectorAll('.campus:nth-of-type(4) .mySlides').length) {
            slideIndexBelgium = newIndex;
            showSlides(slideIndexBelgium, sectionIndex);
        }
    }
}

function currentSlide(n, sectionIndex) {
    if (sectionIndex === 1) {
        slideIndexGermany = n;
        showSlides(slideIndexGermany, sectionIndex);
    } else if (sectionIndex === 2) {
        slideIndexFrance = n;
        showSlides(slideIndexFrance, sectionIndex);
    } else if (sectionIndex === 3) {
        slideIndexBelgium = n;
        showSlides(slideIndexBelgium, sectionIndex);
    }
}

function showSlides(n, sectionIndex) {
    let i;
    let slides;
    if (sectionIndex === 1) {
        slides = document.querySelectorAll('.campus:nth-of-type(2) .mySlides');
    } else if (sectionIndex === 2) {
        slides = document.querySelectorAll('.campus:nth-of-type(3) .mySlides');
    } else if (sectionIndex === 3) {
        slides = document.querySelectorAll('.campus:nth-of-type(4) .mySlides');
    }

    if (n > slides.length) {
        n = 1;
    }
    if (n < 1) {
        n = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[n - 1].style.display = "block";
}

// Event listeners to arrow buttons in the Germany/Holland section
document.querySelectorAll('.campus:nth-of-type(2) .prev').forEach(function(button) {
    button.addEventListener('click', function() {
        plusSlides(-1, 1); // Call plusSlides with the index of the Germany/Holland section
    });
});

document.querySelectorAll('.campus:nth-of-type(2) .next').forEach(function(button) {
    button.addEventListener('click', function() {
        plusSlides(1, 1); // Call plusSlides with the index of the Germany/Holland section
    });
});

// Event listeners to arrow buttons in the France/Belgium section
document.querySelectorAll('.campus:nth-of-type(3) .prev').forEach(function(button) {
    button.addEventListener('click', function() {
        plusSlides(-1, 2); // Call plusSlides with the index of the France/Belgium section
    });
});

document.querySelectorAll('.campus:nth-of-type(3) .next').forEach(function(button) {
    button.addEventListener('click', function() {
        plusSlides(1, 2); // Call plusSlides with the index of the France/Belgium section
    });
});

// Event listeners to arrow buttons in the Belgium section
document.querySelectorAll('.campus:nth-of-type(4) .prev').forEach(function(button) {
    button.addEventListener('click', function() {
        plusSlides(-1, 3); // Call plusSlides with the index of the Belgium section
    });
});

document.querySelectorAll('.campus:nth-of-type(4) .next').forEach(function(button) {
    button.addEventListener('click', function() {
        plusSlides(1, 3); // Call plusSlides with the index of the Belgium section
    });
});

// Function to handle arrow key presses
document.addEventListener('keydown', function(event) {
    let direction = event.key === 'ArrowLeft' ? -1 : 1;
    let slideshow;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        if (slideIndexGermany > 1) {
            slideshow = 'Germany';
            plusSlides(direction, 1);
        } else if (slideIndexFrance > 1) {
            slideshow = 'France';
            plusSlides(direction, 2);
        } else if (slideIndexBelgium > 1) {
            slideshow = 'Belgium';
            plusSlides(direction, 3);
        }
    }
});

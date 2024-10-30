// Wait until the entire page is loaded
window.addEventListener("load", function() {
    // Hide the loading screen
    document.getElementById("loading-screen").style.display = "none";
    // Show the main content
    document.getElementById("main-content").style.display = "block";
});




// Get allValues using querySelectorAll
let allValues = document.querySelectorAll(".value");

// Start the forEach loop for displaying the values
allValues.forEach((singleValue) => {  
    let startValue = 0;  
    let endValue = parseInt(singleValue.getAttribute("data-value"));  
    let duration = Math.floor(2000 / endValue);  
    
    // Counter for increasing the values & display  
    let counter = setInterval(function () {    
        startValue += 1;    
        singleValue.textContent = startValue;    
        
        // Clearing the interval    
        if (startValue == endValue) {      
            clearInterval(counter);    
        }  
    }, duration);
});



// Get Scroll the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {        
        mybutton.style.display = "block";    
    } else {        
        mybutton.style.display = "none";    
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {    
    document.body.scrollTop = 0; // For Safari    
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

//cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // Setting cursorDot position
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Animating cursorOutline
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});


// Function to check if an element is in the viewport
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Add scroll event listener
function scrollAnimation() {
    const elements = document.querySelectorAll('.scroll-animation');

    elements.forEach(el => {
        if (isElementInView(el)) {
            el.classList.add('show');
        }
    });
}

// Trigger animation on scroll and load
window.addEventListener('scroll', scrollAnimation);
window.addEventListener('load', scrollAnimation);
const links = document.querySelectorAll('.nav-link, .dropbtn');
links.forEach(link => {
    // Set active class on page load based on current URL
    if (window.location.pathname === link.getAttribute('href')) {
        link.classList.add('active');
    }
    
    link.addEventListener('click', function(e) {
        // Only prevent default for dropdown button
        if (this.classList.contains('dropbtn')) {
            e.preventDefault();
        }
        
        // Remove 'active' class from all links
        links.forEach(l => l.classList.remove('active'));
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

// Handle dropdown content links separately
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
dropdownLinks.forEach(link => {
    if (window.location.pathname === link.getAttribute('href')) {
        link.classList.add('active');
    }
});

// Glitch effect for header text
const glitchText = document.querySelector('.glitch');
let glitchInterval;

function startGlitchEffect() {
    glitchInterval = setInterval(() => {
        glitchText.style.transform = 'translate(${Math.random() * 10 - 5}px, ${Math.random() * 5 - 2.5}px)';
        setTimeout(() => {
            glitchText.style.transform = 'translate(0, 0)';
        }, 50);
    }, 3000);
}

function stopGlitchEffect() {
    clearInterval(glitchInterval);
    glitchText.style.transform = 'translate(0, 0)';
}

glitchText.addEventListener('mouseenter', startGlitchEffect);
glitchText.addEventListener('mouseenter', stopGlitchEffect);

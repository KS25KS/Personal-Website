// Select all navigation links including dropdown button
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Only prevent default for non-dropdown links
        if (!this.classList.contains('dropbtn')) {
            e.preventDefault();
        }
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link if it's not a dropdown button
        if (!this.classList.contains('dropbtn')) {
            this.classList.add('active');
        }
    });
});
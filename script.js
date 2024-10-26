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
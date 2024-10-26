const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        // Don't prevent default for dropdown parent
        if(!this.parentElement.classList.contains('dropdown')) {
            e.preventDefault();
            // Remove 'active' class from all links
            links.forEach(l => l.classList.remove('active'));
            // Add 'active' class to clicked link
            this.classList.add('active');
        }
    });
});
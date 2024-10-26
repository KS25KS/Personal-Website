const links = document.querySelectorAll('.nav-link, .dropbtn');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove 'active' class from all links
        links.forEach(l => l.classList.remove('active'));
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});
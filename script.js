const links = document.querySelectorAll('.nav-link');
const dropBtn = document.querySelector('.dropbtn');

// Handle regular navigation links
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove 'active' class from all links
        links.forEach(l => l.classList.remove('active'));
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

// Handle dropdown button separately
if (dropBtn) {
    dropBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove 'active' class from all links
        links.forEach(l => l.classList.remove('active'));
    });
}
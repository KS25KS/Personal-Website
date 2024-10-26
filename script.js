document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(link => {
        // Set active class based on current page
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }

        // Add click handler for hash links
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').slice(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
                
                links.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        }
    });
});
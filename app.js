// App.js - Main application logic
document.addEventListener('DOMContentLoaded', function() {
    console.log('Assignment-1 App loaded successfully');

    // Hotfix: Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Hotfix: Add current year to copyright dynamically
    var copyrightEl = document.querySelector('.footer-bottom p');
    if (copyrightEl) {
        var year = new Date().getFullYear();
        copyrightEl.textContent = '\u00A9 ' + year + ' Assignment-1. All rights reserved.';
    }
});

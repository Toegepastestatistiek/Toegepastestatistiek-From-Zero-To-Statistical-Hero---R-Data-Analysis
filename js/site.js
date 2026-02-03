/**
 * Site-wide JavaScript for From Zero To Statistical Hero
 */

// Back to top button functionality
window.addEventListener('scroll', function () {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// Back to top click handler
const backToTopButton = document.getElementById('backToTop');
if (backToTopButton) {
    backToTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Skip link functionality (ensure it focuses main content)
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
    skipLink.addEventListener('click', function (e) {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade in elements on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// Apply the observer to all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add an event listener to the "VG" button to refresh the page
document.querySelector('.logo').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    window.location.reload(); // Reload the current page
});

document.getElementById('about.html').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    window.location.href = 'about.html'; // Redirect to the about page
});




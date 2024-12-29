document.addEventListener('DOMContentLoaded', () => {
// __________________________



// ___________________________
    // Handle project thumbnail display
    const projectLinks = document.querySelectorAll('.project-link');
    const thumbnailDisplay = document.getElementById('thumbnail-display');

    projectLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            const thumbnailSrc = link.getAttribute('data-thumbnail');
            thumbnailDisplay.src = thumbnailSrc;
            thumbnailDisplay.style.opacity = '1';
            thumbnailDisplay.style.transform = 'translate(-50%, -50%) scale(1)';
        });

        link.addEventListener('mouseout', () => {
            thumbnailDisplay.style.opacity = '0';
            thumbnailDisplay.style.transform = 'translate(-50%, -50%) scale(0.9)';
        });
    });

    // Handle contact popup display
    const contactButton = document.getElementById('contactButton');
    const popup = document.getElementById('popupContact');
    const closeButton = document.querySelector('.popup .close');

    contactButton.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Smooth scrolling for navigation buttons
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Theme switcher
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Lightbox functionality for gallery images
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.classList.add('lightbox');
            modal.innerHTML = `<div class="lightbox-content">
                                    <span class="close">&times;</span>
                                    <img src="${item.src}" alt="${item.alt}">
                               </div>`;
            document.body.appendChild(modal);

            // Close button functionality
            const closeButton = modal.querySelector('.close');
            closeButton.addEventListener('click', () => {
                modal.remove();
            });

            // Ensure clicking outside the image closes the modal
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });
});



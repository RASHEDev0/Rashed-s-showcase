document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.timeline-container');
    const checkVisibility = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    };
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});

document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');

    const animateProgress = (bar, percentage) => {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= percentage) {
                clearInterval(interval);
            } else {
                width++;
                bar.style.width = width + '%';
            }
        }, 15); // Adjust the interval time for animation speed
    };

    const showProgress = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        progressBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const percentage = bar.getAttribute('data-percentage');

            if (barTop < triggerBottom) {
                if (!bar.classList.contains('animated')) {
                    bar.classList.add('animated');
                    animateProgress(bar, percentage);
                }
            }
        });
    };

    window.addEventListener('scroll', showProgress);
    showProgress(); // Initial check
});

document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = document.querySelectorAll('.blog-post');

    const showPosts = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        blogPosts.forEach(post => {
            const postTop = post.getBoundingClientRect().top;

            if (postTop < triggerBottom) {
                post.classList.add('show');
            } else {
                post.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', showPosts);
    showPosts(); // Initial check
});


// support button
document.getElementById('supportButton').addEventListener('click', function() {
    window.location.href = 'https://www.paypal.me/YourUsername'; // Replace with your PayPal.me link
});

// scroll to up and down button
document.addEventListener('DOMContentLoaded', function() {
    const scrollUpButton = document.getElementById('scrollUpButton');
    const scrollDownButton = document.getElementById('scrollDownButton');

    // Add event listener to the buttons for scrolling
    scrollUpButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    scrollDownButton.addEventListener('click', function() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    // Function to handle button visibility based on scroll position
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;

        // Show the scroll up button when near the end of the page
        if (scrollPosition + windowHeight >= documentHeight - 100) {
            scrollUpButton.classList.add('visible');
        } else {
            scrollUpButton.classList.remove('visible');
        }

        // Show the scroll down button when near the top of the page
        if (scrollPosition <= 100) {
            scrollDownButton.classList.add('visible');
        } else {
            scrollDownButton.classList.remove('visible');
        }
    };

    // Add scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Initial check to set button visibility
    handleScroll();
});

function showWebsite() {
    document.getElementById('cv-container').style.display = 'none';
    document.getElementById('website-content').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
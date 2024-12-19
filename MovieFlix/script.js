// Get elements
const videoPopup = document.getElementById('videoPopup');
const introVideo = document.getElementById('introVideo');
const mainContent = document.getElementById('mainContent');
const heroSection = document.getElementById('heroSection');
const watchNowBtn = document.getElementById('watchNowBtn');
const carouselSection = document.getElementById('carouselSection');
const exclusiveCarouselSection = document.getElementById('exclusiveCarouselSection');
const navbar = document.querySelector('.navbar');
const profilePicture = document.querySelector('.profile-picture');
const dropdownMenu = document.getElementById('dropdownMenu'); // Get Navbar

// Initially hide the main content and carousel, show video popup
document.addEventListener("DOMContentLoaded", function() {
    // Initial state: Hide main content and carousel, show video popup
    mainContent.style.display = 'none';
    carouselSection.style.display = 'none';
    exclusiveCarouselSection.style.display = 'none';
    navbar.style.display = 'none';
    videoPopup.style.display = 'block'; // Show the video popup initially
});

// When the video ends, hide the video popup and show the hero section
introVideo.addEventListener('ended', function () {
    videoPopup.style.display = 'none'; // Hide the video popup
    mainContent.style.display = 'block'; // Show main content
    heroSection.style.display = 'flex'; // Show hero section
    navbar.style.display = 'none'; // Initially hide navbar after video ends
});

// When "Watch Now" button is clicked, transition to carousel and show navbar
watchNowBtn.addEventListener('click', function () {
    heroSection.style.display = 'none'; // Hide hero section
    navbar.style.display = 'flex'; // Show Navbar
    carouselSection.style.display = 'block'; // Show trending section
    exclusiveCarouselSection.style.display = 'block'; // Show Only on Stream Time section
});

// Profile picture click event to toggle dropdown
profilePicture.addEventListener('click', function () {
    // Toggle the display property of the dropdown
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'block'; // Show dropdown
    } else {
        dropdownMenu.style.display = 'none'; // Hide dropdown
    }
});

// Close dropdown if clicked outside
document.addEventListener('click', function(event) {
    if (!profilePicture.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none'; // Hide dropdown if clicked outside
    }
});

// Correcting the event listener for next and previous buttons.
document.getElementById("nextBtn").addEventListener("click", function () {
    const carouselItems = document.querySelector(".carousel-items");
    carouselItems.scrollBy({
        left: 220, // Scroll to the right by 220px
        behavior: 'smooth'
    });
});

document.getElementById("prevBtn").addEventListener("click", function () {
    const carouselItems = document.querySelector(".carousel-items");
    carouselItems.scrollBy({
        left: -220, // Scroll to the left by 220px
        behavior: 'smooth'
    });
});

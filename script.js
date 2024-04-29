const imgs = document.querySelectorAll('.carousel .carousel-images img');
let n = 0;
let direction = 1; // Initial direction: forward
const width = imgs[0].clientWidth; // Get the width of the first image

function change() {
    const displacement = -n * width;
    imgs.forEach((img) => img.style.transform = `translateX(${displacement}px)`);
}

setTimeout(() => {
    setInterval(() => {
        n += direction;
        if (n >= imgs.length || n < 0) {
            direction *= -1; // Reverse direction
            n = Math.max(0, Math.min(n, imgs.length - 1)); // Ensure n stays within bounds
        }
        change();
    }, 1200);
}, 2000);

document.addEventListener("DOMContentLoaded", function() {
    // Show intro overlay initially
    document.getElementById("intro-overlay").style.display = "block";
    
    // Hide intro overlay after some time (e.g., 3 seconds)
    setTimeout(function() {
      document.getElementById("intro-overlay").style.display = "none";
      document.getElementById("content").style.display = "block"; // Show content
    }, 3000); // 3000 milliseconds = 3 seconds
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navContent = document.querySelector('.nav-content');

    hamburger.addEventListener('click', function() {
        navContent.classList.toggle('active'); // Toggle the 'show' class on navContent
    });
});

  
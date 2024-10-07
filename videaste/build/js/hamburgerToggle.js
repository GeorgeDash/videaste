document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById("navbar");
    const navbar = document.getElementById("main-nav");
    const hamburger = document.querySelector(".bx-menu");
    const close = document.querySelector(".bx-x");

    // Initial state
    hamburger.style.display = "flex"; 
    close.style.display = "none"; 

    const updateNavbarDisplay = () => {
        let w = window.innerWidth;
        if (w >= 768) {
            navbar.style.display = "flex"; 
            header.style.height = "64px";
            close.style.display = "none";   
            hamburger.style.display = "none"; 
        } else {
            navbar.style.display = "none";
            hamburger.style.display = "flex"; 
            close.style.display = "none"; 
        }
    };

    function showNavbar() {
        navbar.style.display = "flex"; 
        header.style.height = "425px"; 
        close.style.display = "flex";  
        hamburger.style.display = "none"; 
    }

    function hideNavbar() {
        navbar.style.display = "none"; 
        header.style.height = "64px"; 
        hamburger.style.display = "flex"; 
        close.style.display = "none"; 
    }

    updateNavbarDisplay();

    window.addEventListener('resize', function() {
        updateNavbarDisplay();
    });

    document.getElementById('showButton').addEventListener('click', showNavbar);
    document.getElementById('hideButton').addEventListener('click', hideNavbar);

    // Close the navbar on mobile only when a link is clicked
    const menuLinks = document.querySelectorAll('#main-nav a'); 
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                hideNavbar(); // Hide only on mobile
            } 
            // No action needed for desktop links
        });
    });
});

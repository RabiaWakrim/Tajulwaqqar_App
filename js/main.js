// Function to load external HTML
function includeHTML(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    });
}

// Load navbar and set active link
includeHTML('navbar', "nav.html", () => {
  const current = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll('#navbar a');

  links.forEach(link => {

          if (link.getAttribute("href") === current && link.getAttribute("href") != 'main2.html') {
      link.parentElement.classList.add("active");
    }

  });



  // Select the navigation bar and home icon elements
const navbar = document.querySelector('nav');
/**
 * Handles scroll behavior for the navigation bar:
 * - Changes navbar background and home icon color when scrolled past 50px
 * - Reverts to original styles when at top of page
 */
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    // Scrolled state styles
    navbar.classList.remove('lg:bg-transparent');
    navbar.classList.add('lg:bg-[#ef5689]'); 

  }  else {
    // Top-of-page state styles
    navbar.classList.remove('lg:bg-[#ef5689]');
    navbar.classList.add('lg:bg-transparent');
  } 
});

/**
 * Toggles mobile menu visibility and icon:
 * - Switches between hamburger and close icon
 * - Shows/hides the dropdown menu
 */
 document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('menu');
  // Toggle menu visibility (assuming 'top-[50px]' shows the menu)
  menu.classList.toggle('top-[50px]');
  
  // Toggle between hamburger and close icon
  const faSolid = document.querySelector('.menu-sym');
  if (faSolid.classList.contains("fa-bars")) {
    // Switch to close icon
    faSolid.classList.remove('fa-bars');
    faSolid.classList.add('fa-xmark');
  } else {
    // Switch back to hamburger icon
    faSolid.classList.remove('fa-xmark');
    faSolid.classList.add('fa-bars');
  }
}); 
});

// Load footer
includeHTML('footer', "footer.html");




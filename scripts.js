// interchange of lunch and dinner menu
function showMenu(menuType) {
    // Get all elements with class 'menu-list'
    const menus = document.querySelectorAll('.menu-list');
    
    // Remove the 'active' class from all menu lists
    menus.forEach(menu => menu.classList.remove('active'));
    
    // Select the menu to show based on 'menuType'
    const menuToShow = document.getElementById(menuType + '-menu');
    
    // Add the 'active' class to the selected menu to display it
    menuToShow.classList.add('active'); 

    
}



/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


/* REVIEW / CHEF NOTES */ 

let currentSlide = 0;
const slides = document.querySelectorAll('.review-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

// Automatically advance to the next slide every 5 seconds (5000 milliseconds)
setInterval(nextSlide, 5000);

// Show the first slide initially
showSlide(currentSlide);

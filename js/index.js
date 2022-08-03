
// Navbar toggling code

const toggleBtn = document.querySelector(".toggle-button");
const navbarItems = document.querySelector(".navbar_items");

toggleBtn.addEventListener("click", () => {
    navbarItems.classList.toggle("active");
});


// Slider code
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 4.5,
    spaceBetween: 25,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.nav-btn-next',
      prevEl: '.nav-btn-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

//   Menu Section Code


// Review Section Code
const othSwiper = new Swiper('.othswiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween: 40,
    slidesPerView: 3,
    // centeredSlides: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.othswiper-pag',
    //   type: 'fraction'
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.othswiper-nav-next',
      prevEl: '.othswiper-nav-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
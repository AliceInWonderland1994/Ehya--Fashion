let menuButton = document.querySelector(".header-button");
menuButton.addEventListener("click", function () {
    document
        .querySelector(".mobile")
        .classList.toggle("mobile--visible");
});

let menuLinks = document.querySelector(".menu__link--down");
menuLinks.addEventListener("click", function () {
    document
        .querySelector(".menu__items")
        .classList.toggle("menu__items--active");
});

$(document).ready(function () {
    let itemsLi = $(".items__li");
    let itemsCards = $(".items__cards");

    itemsLi.on("click", function (event) {
        let activeContent = $(this).attr('data-target');
        itemsLi.removeClass("items__li--active");
        itemsCards.removeClass("items__cards--active");
        $(activeContent).toggleClass("items__cards--active");
        $(this).addClass("items__li--active");
    });
});

let mySwiper = new Swiper('.slider1', {
    // Optional parameters
    loop: true,
    speed: 500,
    autoplay: true,
    delay: 6000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
        init() {
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });
    
          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }
      },
});

const closeButton = $(".mobile__close");
closeButton.on("click", closeModal);

function closeModal(event) {
  event.preventDefault();
  let mobileMenu = $(".mobile");
  mobileMenu.removeClass("mobile--visible");
  event.stopPropagation();
}
document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode === 27) {
      closeModal(evt)
  }
};

let mySwiper2 = new Swiper('.slider2', {
  // Optional parameters
  loop: true,
  keyboard: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
});
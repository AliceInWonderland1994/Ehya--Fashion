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

let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    keyboard: true,
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
$(document).ready(function () {
  $(".slider__inner").slick({
    speed: 1000,
    slidesToShow: 1,
    prevArrow:
      '<button type="button" class="slider__prev"><img src="img/slider_img/chevron left solid.png"alt="arrow"/></button>',
    nextArrow:
      '<button type="button" class="slider__next"><img src="img/slider_img/chevron right solid.png"alt="arrow"/></button>',
    autoplay: true,
    autoplaySpeed: 10000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 574,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  // function toggleSlide(item) {
  //   $(item).each(function (i) {
  //     $(this).on("click", function (e) {
  //       e.preventDefault();
  //       $(".catalog-item__main-content")
  //         .eq(i)
  //         .toggleClass("catalog-item__main-content_active");
  //       $(".catalog-item__list-content")
  //         .eq(i)
  //         .toggleClass("catalog-item__list-content_active");
  //     });
  //   });
  // }

  // toggleSlide(".catalog-item__link");
  // toggleSlide(".catalog-item__back");
});

const tabs = document.querySelector(".catalog__tabs");
const tab = document.querySelectorAll(".catalog__tab");
tabs.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("catalog__tab") ||
    e.target.classList.contains("catalog__tab_div")
  ) {
    tab.forEach((btn) => {
      if (btn !== e.target.closest(".catalog__tab"))
        btn.classList.remove("catalog__tab_active");
      e.target.closest(".catalog__tab").classList.add("catalog__tab_active");
    });
    document.querySelectorAll(".catalog__items").forEach((elem) => {
      elem.classList.remove("catalog__items_active");
    });
    document
      .querySelector(
        `.catalog__items--${e.target.closest(".catalog__tab").dataset.tab}`
      )
      .classList.add("catalog__items_active");
  }
});

const link = document.querySelectorAll(".catalog-item__link");
const link_back = document.querySelectorAll(".catalog-item__back");

link.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    e.preventDefault();
    e.target
      .closest(".catalog-item__main-content")
      .classList.remove("catalog-item__main-content_active");

    e.target
      .closest(".catalog-item__main-content")
      .nextElementSibling.classList.add("catalog-item__list-content_active");
  });
});
link_back.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    e.preventDefault();
    e.target
      .closest(".catalog-item__list-content")
      .classList.remove("catalog-item__list-content_active");
    e.target
      .closest(".catalog-item__list-content")
      .previousElementSibling.classList.add(
        "catalog-item__main-content_active"
      );
  });
});

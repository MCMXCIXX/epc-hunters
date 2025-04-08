import Swiper from "swiper";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import "swiper/css";
import "../scss/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const headerBurger = document.querySelector(".header__burger");
  

  headerBurger.addEventListener("click", () => {
    header.classList.toggle("is-active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    "(max-width: 1140px)",
    ".swiper-container",
    {
      modules: [Navigation],
      loop: true,
      spaceBetween: 32,
      slidesPerView: 2,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.roadmap__button-next',
        prevEl: '.roadmap__button-prev',
        clickable: true,
      },
    },
    someFunc
  );
  resizableSwiper(
    "(max-width: 768px)",
    ".swiper-container",
    {
      modules: [Navigation],
      loop: true,
      spaceBetween: 32,
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.roadmap__button-next',
        prevEl: '.roadmap__button-prev',
        clickable: true,
      },
    },
    someFunc
  );
});
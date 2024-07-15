$(document).ready(function () {
  //================================================================================================burger
  (function () {
    const burgerItem = document.querySelector(".burger");
    const menu = document.querySelector(".menu-wrap");
    const menuCloseItem = document.querySelector(".header_nav-close");
    const menuLinks = document.querySelectorAll(".menu-item-link");
    burgerItem.addEventListener("click", () => {
      menu.classList.toggle("menu-active");
    });
    menuCloseItem.addEventListener("click", () => {
      menu.classList.remove("menu-active");
    });
    if (window.innerWidth <= 980) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener("click", () => {
          menu.classList.remove("menu-active");
        });
      }
    }
  })();
  //================================================================================================base

  (function () {
    const btnOpen = document.querySelector(".card-info_read-more-btn");
    const contentMore = document.querySelector(".cards-info__text-more");
    const contentMore2 = document.querySelector(".cards-info__text-more-2");
    const btnClose = document.querySelector(".card-info-hidden-btn");

    btnOpen.addEventListener("click", () => {
      contentMore.classList.remove("hidden");
      contentMore2.classList.remove("hidden");
      btnClose.classList.remove("hidden");
      btnOpen.classList.add("hidden");
    });
    btnClose.addEventListener("click", () => {
      contentMore.classList.add("hidden");
      contentMore2.classList.add("hidden");
      btnClose.classList.add("hidden");
      btnOpen.classList.remove("hidden");
    });
  })();

  //================================================================================================swiper
  let fotogallerySlider = new Swiper(".photogallery-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    watchOverflow: true,
    loop: true,
    touchRatio: 0,
    watchSlidesVisibility: true,
    slideVisibleClass: "visibleSlide",

    // fadeEffect: {
    //   crossFade: true,
    // },

    //   pagination: {
    //     el: ".history-custom-pagination.swiper-pagination",
    //     clickable: true,
    //     dynamicByullets: true,
    //     renderBullet: function (index, className) {
    //         let year = [
    //             "1921",
    //             "1922",
    //             "1923",
    //             "1926",
    //             "1928",
    //             "1930",
    //             "1931",
    //             "1933",
    //             "1937",
    //             "1938",
    //             "1940",
    //             "1942",
    //         ];
    //         return '<span class="' + className + '">' + year[index] + "</span>";
    //     },
    // },

    //остановка видео
    // on: {
    //   slideChange: function () {
    //     $(".swiper-slide").each(function () {
    //       jQuery("iframe").each(function () {
    //         jQuery(this)[0].contentWindow.postMessage(
    //           '{"event":"command","func":"pauseVideo","args":""}',
    //           "*"
    //         );
    //       });
    //     });
    //   },
    // },

    // миниатюры
    // thumbs: {
    //   swiper: {
    //     el: ".thumbs-slider",
    //     slidesPerView: 4,
    //     spaceBetween: 8,
    //   },
    // },

    // centeredSlides: true,
    // initialSlide: 1,

    // allowTouchMove: false,

    //эффект перекрывания?? фслайдер инстаграм
    // effect: "coverflow",
    // coverflowEffect: {
    //   stretch: 10,
    //   rotate: 0,
    // },

    // autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clicable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1100: {
        spaceBetween: 90,
        touchRatio: 1,
        speed: 1000,
        autoplay: true,
        slidesPerView: 2,
        centeredSlides: true,
        initialSlide: 1,
      },
    },
    // breakpoints: {
    //   900: {
    //     // effect: "fade",
    //     // fadeEffect: { crossFade: true },

    //   },
    // },
  });
});

// swiper with video with thumbs

let bigPhotoSlider = new Swiper(".photos-slider", {
  loop: true,
  loopedSlides: 4,
  slidesPerView: 1,
  effect: "slide",
  thumbs: {
    swiper: {
      el: ".thumbs-slider",
      slidesPerView: 4,
      spaceBetween: 8,
    },
  },
  // function to stop youtube video on slidechange
  on: {
    slideChange: function (el) {
      $(".swiper-slide").each(function () {
        var youtubePlayer = $(this).find("iframe").get(0);
        if (youtubePlayer) {
          youtubePlayer.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
      });
    },
  },
});

// if ($(".profitable-slide").length < 3) {
//   $(".profitable-slider .swiper-wrapper").css({ "justify-content": "center" });
//   $(".profitable-slide.swiper-slide-next .profitable-slide__link").css({
//     transform: "scale(1)",
//   });
//   $(".profitable-slide:last-child").css({ "margin-right": "0" });
// }

// if ($(".profitable-slide").length < 4) {
//   $(".profitable-slider__pagination").css({ display: "none" });
// }

//динамический элемент

//===============================================================================================popup
(function () {
  const popuphBtn = document.querySelector(".popup-btn");
  const popup = document.querySelector(".popup");
  const popupCloseItem = document.querySelector(".popup-close");

  popuphBtn.addEventListener("click", () => {
    popup.classList.toggle("popup-active");
  });
  popupCloseItem.addEventListener("click", () => {
    popup.classList.remove("popup-active");
  });
})();

//==============================================================================================закрытие попап по оверлей
document.addEventListener("click", function (e) {
  let target = e.target;
  console.log(target.classList);
  if (
    target.classList.contains("popup-close") ||
    target.classList.contains("popup__inner")
  ) {
    $(".popup").removeClass("is-active");
    $("body").removeClass("modal-open");
  }
});
//==============================================================================================клик вне
const div = document.querySelector("#popup");

document.addEventListener("click", (e) => {
  const withinBoundaries = e.composedPath().includes(div);

  if (!withinBoundaries) {
    div.style.display = "none"; // скрываем элемент т к клик был за его пределами
  }
});
//===============================================================================================accordion
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//===============================================================================================замена текста  с анимацией
if (document.querySelector(".read-more-btn")) {
  let acc = document.getElementsByClassName("read-more-btn");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.innerHTML =
        this.innerHTML === "Показать всё"
          ? (this.innerHTML = "Свернуть")
          : (this.innerHTML = "Показать всё");
      this.classList.toggle("hidden-btn");

      let panel = this.previousElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

$(document).on("click", ".remove-coauthor", function () {
  $(this).parent(".step__coauthor").remove();
});

//importamt! pathname оптимизация
// if (location.pathname.includes("/newCardPageDetail3/"))

//// =============================================================================================== mobile-menu повторности
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".menu-wrap");
  const menuCloseItem = document.querySelector(".header_nav-close");

  const phonesBtn = document.querySelector(".tel-icon-wrap");
  const phones = document.querySelector(".phones-content");
  const phoneCloseItem = document.querySelector(".phone-close");

  const searchBtn = document.querySelector(".search-icon-wrap");
  const search = document.querySelector(".search-wrap");
  const searchCloseItem = document.querySelector(".search-close");

  const list = document.querySelectorAll(".header-top");
  const dataAll = [
    { id: 1, data: [menu, burgerItem] },
    { id: 2, data: [phones, phonesBtn] },
    { id: 3, data: [search, searchBtn] },
  ];

  const dataHandlerClick = [
    { id: 1, data: [burgerItem, menuCloseItem] },
    { id: 2, data: [phonesBtn, phoneCloseItem] },
    { id: 3, data: [searchBtn, searchCloseItem] },
  ];

  const func = (val) =>
    dataAll.forEach(({ id, data }) => {
      if (val === id) {
        data[0].classList.toggle("active");
        data[1].classList.toggle("highlight");
      } else {
        data[0].classList.remove("active");
        data[1].classList.remove("highlight");
      }
    });

  dataHandlerClick.forEach((el) =>
    el.data.forEach((item) => item.addEventListener("click", () => func(el.id)))
  );
})();
// mobile-menu end

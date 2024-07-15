$(document).ready(function () {
  $('input[type="tel"]').mask("+375 (99) 999-99-99");

  //burger
  if ($(window).width() > 960) {
    $(".burger").click(function () {
      $(".burger").toggleClass("opened");
      $(".menu-dropdown").toggleClass("menu-active");
      // $("body").toggleClass("modal-open");
    });
  } else {
    $(".burger").click(function () {
      $(".menu-dropdown--mobile").toggleClass("menu-active");
      // $("body").toggleClass("modal-open");
    });
  }

  $(".header-close").click(function () {
    $(".menu-dropdown--mobile").removeClass("menu-active");
    $("body").removeClass("modal-open");
  });

  // tab
  $(".custom-tab").click(function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .parent(".custom-tabs-wrap")
      .next(".custom-tabs-content-wrap")
      .find(".custom-tabs-content")
      .removeClass("opened")
      .eq($(this).index())
      .addClass("opened");
  });

  $(".tariff-tabs-wrap .btn").click(function () {
    $(".filter-btn--cloud").toggleClass("opened");
  });

  //select
  $(".select").each(function () {
    const _this = $(this),
      selectOption = _this.find("option"),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(":selected"),
      duration = 200; // длительность анимации

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $("<div>", {
      class: "new-select",
      text: _this.children("option:disabled").text(),
    }).insertAfter(_this);

    const selectHead = _this.next(".new-select");
    $("<div>", {
      class: "new-select__list",
    }).insertAfter(selectHead);

    const selectList = selectHead.next(".new-select__list");
    for (let i = 1; i < selectOptionLength; i++) {
      $("<div>", {
        class: "new-select__item",
        html: $("<span>", {
          text: selectOption.eq(i).text(),
        }),
      })
        .attr("data-value", selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find(".new-select__item");
    selectList.slideUp(0);
    selectHead.on("click", function () {
      if (!$(this).hasClass("on")) {
        $(this).addClass("on");
        selectList.slideDown(duration);

        selectItem.on("click", function () {
          let chooseItem = $(this).data("value");

          $("select").val(chooseItem).attr("selected", "selected");
          selectHead.text($(this).find("span").text());

          // style fo 1 word
          $(".new-select").each(function () {
            var title = $(this);
            title.html(
              title
                .text()
                .replace(/(^\w+)/, "<span class='tariff__text-l'>$1</span>")
            );
          });

          selectList.slideUp(duration);
          selectHead.removeClass("on").addClass("new-select__checked");
        });
      } else {
        $(this).removeClass("on");
        selectList.slideUp(duration);
      }
    });

    //style fo 1 word
    $(".new-select").each(function () {
      var title = $(this);
      title.html(
        title.text().replace(/(^\w+)/, "<span class='tariff__text-l'>$1</span>")
      );
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".element-animation-toscroll")) {
    const elements = document.querySelectorAll(".element-animation-toscroll");

    function checkVisibility() {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          element.classList.add("animate");
        } else {
          element.classList.remove("animate");
        }
      });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
  }

  // logo-animatiom - первое посещение сайта
  // const block = document.getElementById("company-logo");

  // if (!localStorage.getItem("visited")) {
  //   block.style.display = "block";
  //   localStorage.setItem("visited", "true");
  // } else {
  //   block.style.display = "none";
  // }

  //popup
  if (document.querySelector(".popup")) {
    const popups = document.querySelectorAll("[data-popup-id]");

    popups.forEach((popup) => {
      const popupId = popup.getAttribute("data-popup-id");
      const openPopupButton = document.querySelector(
        `[data-popup-open="${popupId}"]`
      );

      if (openPopupButton) {
        openPopupButton.addEventListener("click", () => {
          popup.classList.add("is-active");
          document.body.classList.add("modal-open");
        });
      }
    });

    document.addEventListener("click", function (e) {
      let target = e.target;
      if (
        target.classList.contains("popup-close") ||
        target.classList.contains("popup__inner")
      ) {
        document.querySelectorAll(".popup").forEach((popup) => {
          popup.classList.remove("is-active");
        });
        document.body.classList.remove("modal-open");
      }
    });
  }

  //sliders
  if (document.querySelector(".swiper-container")) {
    let projectsSlider = new Swiper(".projects-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      touchRatio: 1,
      watchOverflow: true,
      watchSlidesVisibility: true,
      slideVisibleClass: "visibleSlide",

      navigation: {
        nextEl: ".swiper-btn-projects-next",
        prevEl: ".swiper-btn-projects-prev",
      },
      pagination: {
        el: ".swiper-pagination-progects",
        type: "progressbar",
      },
    });

    let clientsSlider = new Swiper(".clients-slider", {
      // slidesPerView: "auto",
      // slidesPerGroup: 6,
      // loop: true,
      // spaceBetween: 90,
      // autoplay: {
      //   enabled: true,
      //   delay: 0,
      //   stopOnLastSlide: false,
      // },
      // allowTouchMove: false,
      // speed: 30000,

      // slidesPerView: 6,
      // slidesPerGroup: 21,
      // autoplay: {
      //   delay: 1,
      //   disableOnInteraction: !1,
      // },
      // loop: !0,
      // centeredSlides: !1,
      // speed: 3900,
      // freeMode: !0,
      // grabCursor: !0,

      //slidesPerView: "auto",
      slidesPerView: 6,
      slidesPerGroup: 21,
      loop: !0,
      //spaceBetween: 90,
      centeredSlides: !1,
      autoplay: {
        delay: 1,
        // stopOnLastSlide: false,
        disableOnInteraction: !1,
      },
      // pauseOnClick: true,
      // resumeOnMouseLeave: true,
      // allowTouchMove: true,
      speed: 30000,
      freeMode: !0,
      grabCursor: !0,
    });

    let reviewsSlider = new Swiper(".reviews-swiper", {
      slidesPerView: 2,
      spaceBetween: 28,
      touchRatio: 0,
      watchOverflow: true,
      watchSlidesVisibility: true,
      slideVisibleClass: "visibleSlide",

      navigation: {
        nextEl: ".swiper-btn-rewiews-next",
        prevEl: ".swiper-btn-rewiews-prev",
      },
      pagination: {
        el: ".swiper-pagination-rewiews",
        type: "progressbar",
      },
      breakpoints: {
        800: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });

    let sectionSlider = new Swiper(".section-slider__slider-wrap", {
      slidesPerView: 2,
      spaceBetween: 30,
      touchRatio: 1,
      centeredSlides: true,
      initialSlide: 1,
      watchOverflow: true,
      watchSlidesVisibility: true,
      slideVisibleClass: "visibleSlide",

      navigation: {
        nextEl: ".section-slider__button-next",
        prevEl: ".section-slider__button-prev",
      },
      pagination: {
        el: ".section-swiper__swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        500: {
          spaceBetween: 16,
        },
      },
    });

    let teamSlider = new Swiper(".team-swiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      touchRatio: 1,
      watchOverflow: true,
      watchSlidesVisibility: true,
      slideVisibleClass: "visibleSlide",

      navigation: {
        nextEl: ".swiper-btn-team-next",
        prevEl: ".swiper-btn-team-prev",
      },
      pagination: {
        el: ".swiper-pagination-team",
        type: "progressbar",
      },
      breakpoints: {
        500: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });

    let tariffsSlider = new Swiper(".tariffs-swiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      touchRatio: 0,
      watchOverflow: true,
      watchSlidesVisibility: true,
      slideVisibleClass: "visibleSlide",

      navigation: {
        nextEl: ".swiper-btn-tariff-next",
        prevEl: ".swiper-btn-tariff-prev",
      },
      breakpoints: {
        1300: {
          touchRatio: 1,
          slidesPerView: 5,
          spaceBetween: 0,
        },
      },
    });

    let formSwiper = new Swiper(".form-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      touchRatio: 0,
      watchOverflow: true,
      watchSlidesVisibility: true,
      slideVisibleClass: "visibleSlide",
      autoHeight: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },

      navigation: {
        nextEl: ".swiper-btn-form-next",
        prevEl: ".swiper-btn-form-prev",
      },
      pagination: {
        el: ".swiper-pagination-form",
        type: "progressbar",
      },
      on: {
        init() {
          document.querySelector(
            ".swiper-counter"
          ).innerHTML = `<div class="counter__inner"><span class="counter__current">1</span> / <span class="counter__total"> ${this.slides.length} </span></div>`;
        },
        slideChange() {
          let currentSlide = this.activeIndex + 1;
          document.querySelector(
            ".swiper-counter"
          ).innerHTML = `<div class="counter__inner"><span class="counter__current"> ${
            currentSlide < 10 ? currentSlide : currentSlide
          } </span> / <span class="counter__total"> ${
            this.slides.length
          } </span></div>`;
        },
      },
    });

    const nextButtons = document.querySelectorAll(".swiper-btn-form-next");
    const formStepActive = document.querySelector(".form-swiper .swiper-slide");
    const radioButtons = formStepActive.querySelectorAll('input[type="radio"]');

    nextButtons.forEach((btn) => {
      btn.classList.add("swiper-button-disabled");
      btn.addEventListener("click", (e) => {
        btn.classList.add("swiper-button-disabled");
      });
    });

    const inputFields = document.querySelectorAll(
      ".form-step__content-inner input,.form-step__content-inner textarea"
    );

    inputFields.forEach((inputField) => {
      inputField.addEventListener("input", () => {
        formSwiper.updateAutoHeight();
      });
    });

    // radioButtons.forEach((radio) => {
    //   radio.addEventListener("change", (e) => {
    //     console.log(1);
    //     nextButtons.forEach((btn) => {
    //       console.log(2);
    //       btn.classList.remove("swiper-button-disabled");
    //     });
    //   });
    // });

    // переписать на  js !!!!
    $('input[type="radio"]').on("change", function () {
      console.log(1);
      $(".swiper-btn-form-next").each(function () {
        console.log(2);
        $(this).removeClass("swiper-button-disabled");
      });
    });

    nextButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let isChecked = false;
        radioButtons.forEach((radio) => {
          if (radio.checked) {
            isChecked = true;
          }
        });

        if (!isChecked) {
          alert("Выберите опцию");
        }
      });
    });
  }

  if (document.querySelector(".accordion")) {
    // accordion
    let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

  //tariff-cloud select
  const selectValuesArr = {
    month: {
      250: 1,
      500: 2,
      1000: 3,
    },
    year: {
      250: 4,
      500: 5,
      1000: 6,
    },
  };
  const priceSaleArr = {
    250: "span4",
    500: "span5",
    1000: "span6",
  };
  const select = document.querySelector("select");
  const price = document.querySelector(
    "#tariff-cloud-price-second .tariff__price.tariff__text-l"
  );
  const span = document.querySelector(
    "#tariff-cloud-price-first .tariff__text-xs.sale"
  );

  function selectChangeValue() {
    price.innerText = selectValuesArr[dataAtrBtn][select.value] + " BYN/мес";
    span.innerText = priceSaleArr[select.value] + " BYN/мес";
    // console.log(filterBtn.data("period"));
    // console.log(select.value);
    // console.log(dataAtrBtn);
  }

  $(".new-select__item").on("click", function () {
    this.click(); //doubleclick;
    selectChangeValue();
  });

  //filter-btns tariff-cloud
  const buttons = document.querySelectorAll(".filter-btn");
  const tariffElements = document.querySelectorAll(
    ".tariff__price.tariff__text-l"
  );
  const tariffElementsPriceSale = document.querySelectorAll(
    ".tariff__text-xs.sale"
  );
  const tariffElementsPercent = document.querySelectorAll(
    ".tariff__price-percent.tariff__text"
  );

  let dataAtrBtn = document.querySelector(".filter-btn.active").dataset.period;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((siblingButton) =>
        siblingButton.classList.remove("active")
      );
      button.classList.add("active");

      dataAtrBtn = document.querySelector(".filter-btn.active").dataset.period;

      if (dataAtrBtn === 2) {
        span.innerText = priceSaleArr[select.value];
      }

      selectChangeValue();

      tariffElements.forEach((element) => element.classList.remove("show"));

      tariffElements.forEach((element) => {
        if (
          button.classList.contains("no-sale") &&
          element.classList.contains("no-sale")
        ) {
          element.classList.add("show");
          tariffElementsPriceSale.forEach((elementSale) =>
            elementSale.classList.remove("show")
          );
          tariffElementsPercent.forEach((elementSale) =>
            elementSale.classList.remove("show")
          );
        } else if (
          !button.classList.contains("no-sale") &&
          !element.classList.contains("no-sale")
        ) {
          element.classList.add("show");
          tariffElementsPriceSale.forEach((elementSale) =>
            elementSale.classList.add("show")
          );
          tariffElementsPercent.forEach((elementSale) =>
            elementSale.classList.add("show")
          );
        }
      });
    });
  });

  // box tariff
  if (document.querySelector(".tariff-box-item")) {
    const userNums = document.querySelectorAll(".tariff-box-item__user-num");
    const prices = document.querySelectorAll(".tariff-box-item__price");

    userNums.forEach((userNum, index) => {
      userNum.addEventListener("click", () => {
        userNums.forEach((userNum) => {
          userNum.classList.remove("active");
        });

        prices.forEach((price) => {
          price.classList.remove("show");
        });

        userNum.classList.add("active");

        prices[index].classList.add("show");
      });
    });
  }

  // if (document.querySelector(".new-select")) {
  //   const tariffTextXs = document.querySelectorAll(
  //     "#tariff-cloud-price-first .tariff__text-xs"
  //   );
  //   const tariffPrice = document.querySelectorAll(
  //     "#tariff-cloud-price-second .tariff__price.show"
  //   );

  //   //create array of data-value text
  //   const selectItems = document.querySelectorAll(".new-select__item");
  //   const dataValueArray = [];
  //   selectItems.forEach((item) => {
  //     const dataValue = item.dataset.value;
  //     dataValueArray.push(dataValue);
  //   });

  //   //catch event
  //   $(".new-select__item").on("click", function () {
  //     this.click();
  //     const newSelectChecked = $(".new-select span");
  //     console.log(newSelectChecked.text());
  //     const selectedText = newSelectChecked.text();
  //     // console.log(selectedText);
  //     const selectedIndex = dataValueArray.indexOf(selectedText);
  //     // console.log(selectedIndex);

  //     tariffTextXs.forEach((textXs, i) => {
  //       if (i == selectedIndex) {
  //         textXs.classList.add("opened");
  //       } else {
  //         textXs.classList.remove("opened");
  //       }
  //     });
  //     tariffPrice.forEach((price, i) => {
  //       if (i == selectedIndex) {
  //         price.classList.add("opened");
  //       } else {
  //         price.classList.remove("opened");
  //       }
  //     });
  //   });
  // }

  if (document.querySelector("#feedback-form")) {
    // email input validate
    const emailInput = document.querySelector('input[name="email"]');

    emailInput.addEventListener("blur", () => {
      if (emailInput.value.trim() !== "") {
        const errorMessage = emailInput.nextElementSibling;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = emailRegex.test(emailInput.value);

        if (!isValid) {
          errorMessage.textContent =
            "Пожалуйста, введите корректный email адрес.";
        } else {
          errorMessage.textContent = "";
        }
      }
    });

    //phone input validate on format
    const phoneInput = document.querySelector('input[type="tel"]');
    const phoneError = phoneInput.nextElementSibling;

    phoneInput.addEventListener("blur", () => {
      if (phoneInput.value.trim() === "") {
        phoneError.textContent = "Это поле обязательно для заполнения.";
      } else {
        const phoneRegex =
          /^\+\d{2} \((\d{2})|(25)|(29)|(33)|(44)\) \d{3}-\d{2}-\d{2}$/;
        if (!phoneRegex.test(phoneInput.value)) {
          phoneError.textContent = "Неверный формат номера телефона.";
        } else {
          phoneError.textContent = "";
        }
      }
    });

    //file add
    const fileInputs = document.querySelectorAll(
      ".input-item-file input[type=file]"
    );

    fileInputs.forEach((input) => {
      input.addEventListener("change", () => {
        const file = input.files[0];

        const inputFile = input.closest(".input-item-file");
        const inputFileBtn = inputFile.querySelector(".input-item-file__btn");
        inputFileBtn.textContent = file.name;
      });
    });

    //form
    const form = document.getElementById("feedback-form");
    const inputs = form.querySelectorAll('input[type="text"]');
    const consentCheckbox = document.querySelector('input[name="consent"]');

    form.addEventListener("submit", (event) => {
      event.preventDefault(event);

      // validate form inputs with "req"
      let isValid = true;
      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const error = input.nextElementSibling;
        if (
          input.previousElementSibling &&
          input.previousElementSibling.classList.contains("req") &&
          input.value.trim() === ""
        ) {
          isValid = false;
          error.textContent = "Это поле обязательно для заполнения.";
        } else {
          error.textContent = "";
        }
      }

      // validate phone
      if (phoneInput.value.trim() === "") {
        phoneInput.nextElementSibling.textContent =
          "Это поле обязательно для заполнения.";
      } else {
        phoneInput.nextElementSibling.textContent = "";
      }

      // validate consent-checkbox
      if (!consentCheckbox.checked) {
        consentCheckbox.nextElementSibling.classList.add("error");
        isValid = false;
      } else {
        consentCheckbox.nextElementSibling.classList.remove("error");
      }

      // send form to server
      if (isValid) {
        const formData = new FormData(form);
        const data = {};

        for (const [key, value] of formData.entries()) {
          data[key] = value;
        }

        // выводим данные в консоль  в виде массива !!!
        console.log(data);

        const successPopup = document.querySelector(".popup-success");
        fetch("/submit", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              successPopup.classList.add("is-active");
            } else {
              console.log(data.message);
            }
          })
          .catch((error) => console.error(error));
      }
    });
  }
});

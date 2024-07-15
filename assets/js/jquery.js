// $(window).scroll(function () {
//   if ($(window).scrollTop() > 0) {
//     $("header").addClass("fixed");
//   } else {
//     $("header").removeClass("fixed");
//   }
// });

if ($(window).width() < 640) {
  $(".burger").click(function () {
    $(".menu_mobile").addClass("opened");
    $("body").addClass("modal-open");
  });
}

$(document).ready(function () {
  $("#menu-closer").click(function () {
    $(".menu_mobile").removeClass("opened");
    $("body").removeClass("modal-open");
  });

  $('input[type="tel"]').mask("+375 (99) 999-99-99");

  // /================================================================================================popup
  $(".popup__btn-close").click(function () {
    $(".popup").removeClass("is-active");
    $("body").removeClass("modal-open");
  });

  $(".popup-btn").click(function (e) {
    $(".popup").addClass("is-active");
    $("body").addClass("modal-open");
  });

  //open-popup2
  $("#mobile-bank-person").click(function (e) {
    $("#custom-overlay_full").addClass("opened");
    $("#mobile-bank__popup").addClass("opened");
    $(".dropdown-mobile-bank__list").toggleClass(
      "dropdown-mobile-bank__list_show"
    );
  });
  //popup - close2
  $(".custom-popup-closer, #custom-overlay_full, .popup__btn-close").click(
    function () {
      $(".custom-popup").removeClass("opened");
      $("#custom-overlay_full").removeClass("opened");
    }
  );

  $(".popup__btn-close").click(function () {
    $(".popup").removeClass("is-active");
    $("body").removeClass("modal-open");
  });

  // /================================================================================================accordion
  $(".accordion-item__title").click(function () {
    $(this).toggleClass("active");
    $(this).parent(".accordion-item").toggleClass("active");
  });

  // /================================================================================================tab
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

  // /================================================================================================открытие попапа по якорю с уловием  contais + добавление в url --- ниже очистка
  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
    window.location.href = $.attr(this, "href");
    $($.attr(this, "href")).addClass("opened");
    if (this.classList.contains("partners__anchor")) {
      $("#custom-overlay_full").addClass("opened");
    }
    $(".dropdown-mobile-bank__list").toggleClass(
      "dropdown-mobile-bank__list_show"
    );
  });

  $(".custom-popup-closer, #custom-overlay_full, .popup__btn-close").click(
    function () {
      $(".custom-popup").removeClass("opened");
      $("#custom-overlay_full").removeClass("opened");
      if (location.pathname.includes("/newCardPageDetail3/")) {
        history.pushState(null, null, "/newCardPageDetail3/");
      }
    }
  );

  // /================================================================================================ замена текста
  $(".card-info_read-more-btn").on("click", function (event) {
    let btn = $(this),
      text = btn.text();

    if (text == "Показать пример") {
      btn.text("Скрыть пример");
    } else {
      btn.text("Показать пример");
    }

    btn.toggleClass("card-info-hidden-btn");
    $(this).prev(".cards-info__text-more").toggleClass("hidden");
    $(this).next(".cards-info__text-more").toggleClass("hidden");
  });

  //select https://ru.stackoverflow.com/questions/1102043/%D0%98%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-select-%D0%BD%D0%B0-js
  $(".select").each(function () {
    const _this = $(this),
      selectOption = _this.find("option"),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(":selected"),
      duration = 150; // длительность анимации

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $("<div>", {
      class: "new-select",
      //text: _this.children('option:disabled').text()
      text: _this.children("option:selected").text(),
    }).insertAfter(_this);

    const selectHead = _this.next(".new-select");
    $("<div>", {
      class: "new-select__list",
    }).insertAfter(selectHead);

    const selectList = selectHead.next(".new-select__list");
    //for (let i = 1; i < selectOptionLength; i++) {
    for (let i = 0; i < selectOptionLength; i++) {
      //
      //
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

          selectList.slideUp(duration);
          selectHead.removeClass("on");
        });
      } else {
        $(this).removeClass("on");
        selectList.slideUp(duration);
      }
    });
  });

  //  ================================================================================================ подстчёт слов в инпуте
  if (document.querySelector("textarea.minlength")) {
    $("textarea.minlength").on("change keyup keydown", function () {
      let currentLength = parseInt($.trim($(this).val()).split(" ").length) - 1; // Подсчет слов
      const maxlength = 300;
      $(this)
        .next(".counter-text")
        .children(".counter-text__current")
        .html(currentLength);
      $(this)
        .next(".counter-text")
        .children(".counter-text__total")
        .html(maxlength);
      if (currentLength > 300) {
        $(this)
          .next(".counter-text")
          .children(".counter-text span")
          .css("color", "red");
        if (!$("p.warning").length) {
          $(this)
            .parent()
            .after(
              $(
                '<p class="warning">Обратите внимание, количество слов превысило допустимое значение. Ознакомьтесь подробнее с <a href="">Правилами для авторов</a></p>'
              )
            );
        } else {
        }
      } else {
        $(this)
          .next(".counter-text")
          .children(".counter-text span")
          .css("color", "#1A2442");
        $(this).parent().next(".warning").remove();
      }
    });
  }

  //input-file add
  $(".input-file input[type=file]").on("change", function () {
    let file = this.files[0];
    let fileName = file.name;
    $(this)
      .next()
      .html(fileName)
      .addClass("doc-name")
      .removeClass("btn_step-default")
      .removeClass("btn");
    $(this).parent().after($('<span class="btn-del remove">Удалить</span>'));
  });

  //input-file delete
  $(document).on("click", "span.remove", function () {
    $(this).prev(".input-file").children(".file-author")[0].value = "";
    $(this)
      .prev(".input-file")
      .children("span.doc-name")
      .addClass("btn")
      .addClass("btn_step-default")
      .removeClass("doc-name")
      .html("Oбзор");
    $(this).detach();
  });

  //input-password
  $("body").on("click", ".password-control", function () {
    if ($(".password-input").attr("type") == "password") {
      $(this).addClass("view");
      $(".password-input").attr("type", "text");
    } else {
      $(this).removeClass("view");
      $(".password-input").attr("type", "password");
    }
    return false;
  });

  //input textarea validate
  let $input = $("input");
  let baseValue = $input.val();

  let $textarea = $("textarea");
  let textareaValue = $textarea.val();

  $input.on("input", function () {
    $input.toggleClass("invalid", $input.val() !== baseValue);
    if ("input[type=file]") {
      $(this).parent().prev(".warning").remove();
    }

    if ("input[name=keywordEn]" || "input[name=keywordRu]") {
      $(this).parent(".keywords-input-wrap").removeClass("invalid");
    }
  });

  $textarea.on("input", function () {
    $textarea.removeClass("invalid", $textarea.val() !== textareaValue);
  });

  // (фиксированная навигация на странице Доставка ) + скролл  меню + клик + плавный скролл к якорям
  let sections = $(".step"),
    nav = $(".stepsNav__content"),
    nav_height = nav.outerHeight();

  $(window).on("scroll", function () {
    let cur_pos = $(this).scrollTop();

    sections.each(function () {
      let top = $(this).offset().top - nav_height - 20,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("active");
        sections.removeClass("active");

        $(this).addClass("active");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });

  nav.find("a").on("click", function () {
    let $el = $(this),
      id = $el.attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - nav_height,
      },
      500
    );

    return false;
  });

  //scroll

  let allStepsStart = $(".all-steps").offset().top;
  let allStepsEnd = $(".all-steps").outerHeight();
  let allSteps = allStepsStart + allStepsEnd;

  $(window).scroll(function () {
    if (
      ($(window).scrollTop() > allStepsStart) &
      ($(window).scrollTop() < allSteps)
    ) {
      $(".stepsNav").addClass("stepsNav-active");
    } else {
      $(".stepsNav").removeClass("stepsNav-active");
    }
  });

  //scroll2
  if (document.querySelector(".stepsNav")) {
    (function () {
      const stepsNav = document.querySelector(".stepsNav");
      window.onscroll = () => {
        if (window.pageYOffset > 670) {
          stepsNav.classList.add("stepsNav-active");
        } else {
          stepsNav.classList.remove("stepsNav-active");
        }
      };
    })();
  }

  // меню + клик + плавный скролл к якорям
  if ($(".fly-block").length > 0) {
    let flySections = $(".fly-section"),
      flyNav = $(".fly-block__list"),
      flyBlock = $(".fly-block"),
      flyNav_height = 79;

    $(window).on("scroll", function () {
      let cur_pos = $(this).scrollTop();
      if (cur_pos > 50) {
        flyBlock.addClass("fly-block_active");
      } else {
        flyBlock.removeClass("fly-block_active");
      }
      flySections.each(function () {
        let top = $(this).offset().top - flyNav_height,
          bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          flyNav.find("a").removeClass("active");
          flySections.removeClass("active");
          $(this).addClass("active");
          flyNav
            .find('a[href="#' + $(this).attr("id") + '"]')
            .addClass("active");
        }
      });
    });

    flyNav.find("a").on("click", function () {
      let $el = $(this),
        elemId = $el.attr("href");

      $("html, body").animate(
        {
          scrollTop: $(elemId).offset().top - flyNav_height,
        },
        100
      );

      return false;
    });
  }
});

// ymaps.ready(init);

// function init() {
//   var myMap = new ymaps.Map("map", {
//       center: [53.863646, 27.489292],
//       zoom: 15,
//       // Тип покрытия карты: "Гибрид".
//       type: "yandex#hybrid",
//     }),
//     // Создаем метку с помощью вспомогательного класса.
//     myPlacemark1 = new ymaps.Placemark(
//       [53.863646, 27.4892929],
//       {
//         // Свойства.
//         // Содержимое хинта.
//         // hintContent: "Надпись, которая всплаывет при наведении на метку",
//       },
//       {
//         // Опции
//         // Своё изображение иконки метки.
//         iconImageHref: "assets/images/icons/map-marker.svg",
//         // Размеры метки.
//         iconImageSize: [106, 86],
//         // Смещение левого верхнего угла иконки относительно
//         // её "ножки" (точки привязки).
//         iconImageOffset: [-22, -70],
//       }
//     );
//   // Добавляем все метки на карту.
//   myMap.geoObjects.add(myPlacemark1);

//   //Minsk
//   var myMapBy = new ymaps.Map("mapBy", {
//       center: [53.863646, 27.489292],
//       zoom: 15,
//       type: "yandex#hybrid",
//     }),
//     myPlacemark1 = new ymaps.Placemark(
//       [53.863646, 27.4892929],
//       {},
//       {
//         iconImageHref: "assets/images/icons/map-marker.svg",
//         // Размеры метки.
//         iconImageSize: [106, 86],
//         iconImageOffset: [-22, -70],
//       }
//     );
//   myMapBy.geoObjects.add(myPlacemark1);

//   //Smolensk
//   var myMapRu = new ymaps.Map("mapRu", {
//       center: [54.783103, 32.053075],
//       zoom: 15,
//       type: "yandex#hybrid",
//     }),
//     myPlacemark1 = new ymaps.Placemark(
//       [54.783103, 32.053075],
//       {},
//       {
//         iconImageHref: "assets/images/icons/map-marker.svg",
//         // Размеры метки.
//         iconImageSize: [106, 86],
//         iconImageOffset: [-22, -70],
//       }
//     );
//   myMapRu.geoObjects.add(myPlacemark1);
// }


$(document).ready(function () {
  ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
      center: [53.863646, 27.489292],
      zoom: 15,
      // Тип покрытия карты: "Гибрид".
      type: "yandex#hybrid",
    });

    // Создаем метку с помощью вспомогательного класса.
    myPlacemark1 = new ymaps.Placemark(
      [53.863646, 27.4892929],
      {
        // Свойства.
        // Содержимое хинта.
        // hintContent: "Надпись, которая всплаывет при наведении на метку",
      },
      {
        // Опции
        // Своё изображение иконки метки.
        iconImageHref:
          "assets/images/icons/map-marker.svg",
        // Размеры метки.
        iconImageSize: [106, 86],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-22, -70],
      }
    );
    // Добавляем все метки на карту.
    myMap.geoObjects.add(myPlacemark1);

    //Minsk
    var myMapBy = new ymaps.Map("mapBy", {
        center: [53.863646, 27.489292],
        zoom: 15,
        type: "yandex#hybrid",
      }),
      myPlacemark1 = new ymaps.Placemark(
        [53.863646, 27.4892929],
        {},
        {
          iconImageHref:
            "assets/images/icons/map-marker.svg",
          // Размеры метки.
          iconImageSize: [106, 86],
          iconImageOffset: [-22, -70],
        }
      );
    myMapBy.geoObjects.add(myPlacemark1);

    //Smolensk
    var myMapRu = new ymaps.Map("mapRu", {
        center: [54.783103, 32.053075],
        zoom: 15,
        type: "yandex#hybrid",
      }),
      myPlacemark1 = new ymaps.Placemark(
        [54.783103, 32.053075],
        {},
        {
          iconImageHref:
            "assets/images/icons/map-marker.svg",
          // Размеры метки.
          iconImageSize: [106, 86],
          iconImageOffset: [-22, -70],
        }
      );
    myMapRu.geoObjects.add(myPlacemark1);
  });
});

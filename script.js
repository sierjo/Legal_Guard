// Выбираем элемент с идентификатором "top"
let element = document.getElementById("top");

let color_text_scroll = document.querySelectorAll(".ferst-color_text");

// Устанавливаем расстояние для появления фонового изображения (например, 200px)
let scrollDistance = 338;

// Добавляем прослушиватель события прокрутки страницы
window.addEventListener("scroll", function () {
  // Получаем текущее положение прокрутки страницы
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Проверяем, достигнуто ли расстояние для появления размытия
  if (scrollTop > scrollDistance) {
    // Добавляем класс для размытия
    element.classList.add("background-on-scroll");
    // Добавляем ко всем элементам а новый сласс
    color_text_scroll.forEach(function (ncol) {
      ncol.classList.add("next-color_text");
    });
  } else {
    // Удаляем класс, если прокрутка вернулась обратно
    element.classList.remove("background-on-scroll"),
      // Удаляем у всех элементов а этот класс
      color_text_scroll.forEach(function (ncol) {
        ncol.classList.remove("next-color_text");
      });
  }
});

// window.addEventListener("resize", () => {
//   if (window.innerWidth <= 600) {
//     element.classList.remove("add_menu_style");
//   } else {
//     main_menu.classList.add("add_menu_style");
//   }
// });

document.getElementById("valid").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form); // собираем данные из формы

  const values = {};
  formData.forEach((value, key) => {
    values[key] = value;
    // console.log(`Key: ${key}, Value: ${value}`);
  });
  console.log("Forma: ", values);
  alert("Forma odeslana.");
});

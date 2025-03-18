// let titleProject = "Оценка стоимости";
// let screensValue = "Шаблонные, с уникальным дизайном, с анимациями";
let screenPrice = 10000;
// let percentage = 10;
// let fullPrice = 1500;
// let responsive = true;

// console.log(titleProject);

//alert("Привет");

// let age = prompt("Укажите ваш возраст");

let titleProject = prompt("Название проекта?");
let screensValue = prompt("шаблонные, с уникальным дизайном, с анимациями");
let responsive = prompt("Нужен ли респонсивный сайт?");

let service1 = prompt("Какой сервис нужен?");
let servicePrice1 = prompt("Сколько это будет стоить?");
let service2 = prompt("Какой еще сервис нужен?");
let servicePrice2 = prompt("Сколько стоит второй сервис?");

let fullPrice = screenPrice + +servicePrice1 + +servicePrice2;

let servicePercentPrice = fullPrice - fullPrice * 0.1;

console.log(Math.round(servicePercentPrice));

if (servicePercentPrice > 50000 || servicePercentPrice === 50000) {
  alert("Вы получаете скидку 10%");
}
if (50000 > servicePercentPrice > 20000) {
  alert("Вы получаете скидку 5%");
}
if (servicePercentPrice < 20000 || servicePercentPrice === 20000) {
  alert("Скидка не предусмотрена");
}
if (servicePercentPrice < 0 || servicePercentPrice === 0) {
  alert(
    "Что-то пошло не так, попробуйте перезагрузить сайт и ввести значения еще раз"
  );
}

"use strict";


const showTypeOf = function(variable) {
  console.log(variable, typeof variable);
};


const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const rollback = 50;
const adaptive = confirm("Нужен ли адаптив на сайте?");


const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
let discount;


const getAllServicePrices = function() {
  return servicePrice1 + servicePrice2;
};
const allServicePrices = getAllServicePrices();


function getFullPrice() {
  return screenPrice + allServicePrices;
}
const fullPrice = getFullPrice();


function getTitle(projectTitle) {
  const trimmed = projectTitle.trim().toLowerCase();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}
const formattedTitle = getTitle(title);


function getServicePercentPrices(totalPrice, rollbackPercent) {
  return Math.ceil(totalPrice - (totalPrice * (rollbackPercent / 100)));
}
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);


console.clear();


showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);


console.log(screens.toLowerCase().split(/\s*(?:;|$)\s*/));


switch(true) {
  case fullPrice > 30000: 
    discount = "Даем скидку в 10%";
    break;
  case fullPrice > 15000: // автоматически <= 30000
    discount = "Даем скидку в 5%";
    break;
  default: // все остальные случаи (<= 15000)
    discount = "Скидка не предусмотрена";
}
console.log(discount);


console.log(servicePercentPrice);
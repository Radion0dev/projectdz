"use strict";

const showTypeOf = function(variable) {
  console.log(variable, typeof variable);
};


const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?") ;


let screenPrice;
do {
  const input = prompt("Сколько будет стоить данная работа?");
  screenPrice = parseFloat(input);
} while (isNaN(screenPrice) || screenPrice <= 0);

const rollback = 50;
const adaptive = confirm("Нужен ли адаптив на сайте?");


const getValidatedPrice = (question) => {
  let price;
  do {
    const input = prompt(question);
    price = parseFloat(input);
  } while (isNaN(price) || price < 0);
  return price;
};

const service1 = prompt("Какой дополнительный тип услуги нужен?") ;
const servicePrice1 = getValidatedPrice("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?") ;
const servicePrice2 = getValidatedPrice("Сколько это будет стоить?");

let discount;


const getAllServicePrices = function() {
  return Number(servicePrice1) + Number(servicePrice2);
};
const allServicePrices = getAllServicePrices();

function getFullPrice() {
  return Number(screenPrice) + Number(allServicePrices);
}
const fullPrice = getFullPrice();

function getTitle(projectTitle) {
  return String(projectTitle).trim().charAt(0).toUpperCase() + 
         String(projectTitle).trim().slice(1).toLowerCase();
}
const formattedTitle = getTitle(title);

function getServicePercentPrices(totalPrice, rollbackPercent) {
  totalPrice = Number(totalPrice);
  rollbackPercent = Number(rollbackPercent);
  return Math.ceil(totalPrice - (totalPrice * (rollbackPercent / 100)));
}
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

console.clear();


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("Типы экранов:", screens.toLowerCase().split(/\s*(?:;|,|$)\s*/));


switch(true) {
  case fullPrice > 30000: 
    discount = "Даем скидку в 10%";
    break;
  case fullPrice > 15000:
    discount = "Даем скидку в 5%";
    break;
  default:
    discount = "Скидка не предусмотрена";
}
console.log(discount);

console.log("Итоговая цена с учетом отката:", servicePercentPrice);
let title ='Алтай';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 40;
let rollback = 55;
let fullPrice = 70;
let adaptive = true;

let screensArray = screens.toLowerCase().split(",");



alert("lesson JavaScript");

console.log("lesson JavaScript");


console.log(typeof(title));

console.log(typeof(fullPrice));

console.log(typeof(adaptive));

console.log(screens.length);

console.log(`Стоимость верстки экранов ${screens} ${screenPrice} рублей, Стоимость разработки сайта ${fullPrice} рублей`);



console.log(screensArray);

console.log(`Процент отката посреднику за работу ${fullPrice * (rollback/100)} `);


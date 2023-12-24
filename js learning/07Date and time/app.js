const currentDate = new Date();
console.log(currentDate);


//year , month , hour , day , seconds , mintue , miliseconds

const currentDate1 = new Date(2024 , 2 , 24 , 12 , 30 , 0 , 0);
console.log(currentDate1);

const date = new Date();

console.log(date);
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());


//to increment date
date.setDate(date.getDate() + 1);
console.log(date);

date.setDate(date.getDate() - 1);
console.log(date);




const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const miliseconds = date.getMilliseconds();



console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(miliseconds);
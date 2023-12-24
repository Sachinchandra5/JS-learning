// array method

//array is mutable sot changes will happen in real array

const fruits = [
    "apples",
    "Pomegranate",
    "Mango",
];

const newFruits = ["Strawberries",
    "pineapple",
    "grapefruit"];


console.log(fruits);



// add array in end (push)
fruits.push('banana');
console.log(fruits);

//add in start (unshift)
fruits.unshift('orange');
console.log(fruits);


// pop remove array from end (pop)
fruits.pop();
console.log(fruits);


//remove array from start(shift)
fruits.shift();
console.log(fruits);



//concat
const totalFruits = fruits.concat(newFruits);
console.log(totalFruits);



const pl = ['Javascript' , 'Golang' , 'Python' , 'Php'];
const numbers = [3 , 5 , 2 , 4 , 1];

//includes
// console.log(pl.includes('Golang'));

//join
// console.log(pl.join('_Sachin_'));

//reverse
console.log(pl);
// console.log(pl.reverse());

//slice
// console.log(pl.slice(0 , 2));

//sort
console.log(numbers);
console.log(numbers.sort());

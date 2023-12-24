//objects

const person = {
    firstName: "Sachin",
    lastName: "Chandra",
    age: 18,
    location: ['Planet', 'Earth'],
    isProgrammer: true
};

console.log(person);
console.log(typeof person);

const arr = [1 , 2,3 ,4];
console.log(typeof arr);

//accesing items from objects

console.log(person.firstName);
console.log(person.lastName);
console.log(person['location']);
console.log(person['age']);


//in these case we have to use bracket notation
const hello = {
    10 :'sachin'
}
// console.log(hello.10);
console.log(hello['10']);

//to add
hello.firstName = "Sachin";
console.log(hello);
hello.planetName = "Earth";
console.log(hello);

// to delete
delete hello[10];
console.log(hello);




//practice que

const car = {
    type :"Fait",
    model:500,
    color:"blue",
}

console.log(typeof car);

car.type = "Toyota";
console.log(car);

car.wheels = 4;
console.log(car);





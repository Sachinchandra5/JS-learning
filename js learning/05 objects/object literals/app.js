//Enhanced object literals

//it was come in Es6

//they are set of enhancememnt to the syntax for defining ojects in js . These enhancementas make it more convenient and concies to define object properties and methods.


function user(name, age, work) {
    return {
        name,
        age,
        work,
        intro: () => {
            console.log(`My name is ${name}`);
        },
    };
}

const sachin = user("Sachin", 18, "Programmer");


console.log(sachin);
console.log(sachin.intro());


const alex = user("Alex", 19, "Designer");
console.log(alex);





//practice que
const a = 1;
const b = 2;
const c = 3;

const object = {
    a, b, c
}
console.log(object);

//2

const addMul = {
    sum: () => a + b,
    mul: () => a * b,
}

console.log(addMul.sum());
console.log(addMul.mul());

//3
getPersionEs6 = (name, age, height) => {
    return {
        name,
            age,
            height,
    }
}
const res = getPersionEs6("Sachin", 18, 5.6);
console.log(res);




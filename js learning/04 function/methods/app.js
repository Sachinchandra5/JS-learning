//methods

//first way to make  method
function greet(){
    return `Hello my name is ${person.name} & I am ${person.age} year old`
}

const person ={
    name :'John',
    age : 30,
    greet,
}

console.log(person.greet());


//seond way to mske method

const person1={
    name:'Sachin',
    age:18,
    greet1: function(){
        return `Heloo my name is ${person1.name} and I am ${person1.age} year old`
    }
}

console.log(person1.greet1());




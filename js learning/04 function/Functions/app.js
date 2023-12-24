//fjunction

// function name(parameterIfAny){.....}

//function declaration
function great() {
    console.log("hello from a function");
}
 
//call , run , execute
great();

//parameter or lovcal variables
function sayHello(name){
    console.log(`Hello ${name}`);
}

sayHello('Sachin');
sayHello('Yasodar');


function add(x , y) {
    return x + y ;
}

// console.log(add(10 , 20));
const res = add(10 , 20);
console.log(res);




//practiec que

function myFunction(x , y){
    return x * y ;
}

let result = myFunction(4 , 5);  // arguments
console.log(result);


//deifference between function declaration and function expression

//function declaration✅

//you can use it before intialization
heyHello('Sachin');

function heyHello (userName){
    console.log(`hello ${userName}`);
}


//function expression✅

//you cannot use it before initialization

const greetings = function(user){
    console.log(`hello ${user}`);
}

greetings('John');






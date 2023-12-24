//arrow function

// also known as fat arrow , it is concise and shoeter way to write a fnc

function greet(userName) {
    return `Hello ${userName}`;
}

console.log(greet("Sachin"));

const greet1 = (userName) => {
    return `Hello ${userName}`;
}

console.log(greet1("Sachin 1"));

const greet2 = (userName) => `Hello ${userName}`;
console.log(greet2("Sachin2"));

const double = (number) => `${number * 2}`;
console.log(double(12));



// anonymous function (fumction without name)
//  setTimeout(function(){
//    console.log(`THis fnc will be excuyted after 3 seconds`);
//  } , 3000);



//practice que

setTimeout(() => {
    console.log('hello');
    setTimeout(() => {
        console.log("hey");
        setTimeout(() => {
            console.log("Namste");
            setTimeout(() => {
                console.log("hi");
                setTimeout(() => {
                    console.log("Bonjour");
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}, 2000);



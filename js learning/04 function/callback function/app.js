//callback function

//when we provide function as an (argument) to other function is known as callback function

function showCallFunc(fn){
    const value = 10;
    fn(value);
}

showCallFunc(function(value){
    console.log(value);
});





function greet(name , cb){
    console.log(`Hello ${name}`);
    cb();
}

function cb(){
    console.log(`Iam a callback function`);
}

greet('John' , cb);





function fName(name , namelg){
   return console.log(name , namelg());
}

function namelg(){
    console.log(`I am a callback fnc`);
}

fName('sachin' , namelg);




//write it like upper one or like down one


function hey(name , ab){
    console.log(`Hello ${name}`);
    ab();
}

hey('Sachin' , function ab(){
    console.log(`Iam a callback function`);
});





//practice que

function showCallFunc(fn){
    let va = 'something else';
    fn(va);
}


showCallFunc(function fn(va){
    console.log(va);
});



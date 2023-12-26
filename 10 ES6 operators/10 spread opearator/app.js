//sprea opeartor 

//it is a new addition in set of js in ES6
//its take an iterable like array and expands itinto individual elements
//its commanly used to make shallow coples of js objects 
//using this operators make the code concise and enhances its readability


function giveMe4(a , b, c ,d){
    console.log(`a : ${a}`);
    console.log(`b : ${b}`);
    console.log(`c : ${c}`);
    console.log(`d : ${d}`);
}

const colr = ['red', 'green' , 'blue' , 'teal'];

// giveMe4(colr); ❌

giveMe4(...colr);



//for arrays

const strNums = ['one' , 'two' , 'three'];
const morestrNums = ['four' , 'five' , 'six'];
const concat = [...strNums , ...morestrNums];
console.log(concat);


//with spread operators
let people = ['sachin' , 'huxn' , 'alex'];
const allpeps = ['kumar' , ...people , 'John'];
console.log(allpeps);

//without spread operators
const all1peps = ['kumar' , people , 'John'];
console.log(all1peps);



//using objects

//it is also a shalow colpse
const obj1 = {x:1,y:2,}
const obj2 = {z:3}
const obj3 = {...obj1 , ...obj2}
console.log(obj3);

//without spread we will get nested object

let person = {
    name : 'sachin',
    age : 18,
    gender : "male"
}

const clone = {...person  , work : "programmer" , location : "Inida"}
console.log(clone);





// practice que


//1
let arr1 = [1 , 2, 3];
let arr2 = [4 , 5];
let cloneArr =  [...arr1 , ...arr2];
console.log(cloneArr);

//2
const user = {
    name : " Jen",
    age : 22,
};

const cloneUser = {...user , work : "designer"}
console.log(cloneUser); 

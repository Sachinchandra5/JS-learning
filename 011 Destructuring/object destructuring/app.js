//object destructuring

//in these name matter but order dosen't matters

const student = {name:"Sachin" , position:"first" , rollNo : "19"}
const {color , name , position , rollNo} = student;
console.log(name , position , rollNo);
console.log(color);

// how to rename variables in objects 

const num = {x:100 , y:200}
const {x:new1 , y:new2} = num;
console.log(new1 , new2);
// console.log(x , y);



//objects destructuring and rest operator

let {a , b , ...rest} = {a:100 , b:200 , c:300 , d:400 , e:500}
console.log(a);
console.log(b);
console.log(rest);





//practice que


const person = {
    fname : "John Doe" ,
    age : 30,
    gender : "male" , 
    country : "USA"
}

const {fname:personName , age:personAge , country:personCountry} = person;
// console.log(fname , age , country);
console.log(personName , personAge , personCountry);


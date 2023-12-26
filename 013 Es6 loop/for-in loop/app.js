//for in loop

//it give keys in solution

let person = {
    name : "Sachin" , 
    age : 18 , 
    gender  : "Male"
}

for (let keys in person){
    console.log(keys , person[keys]);
}


let list = ["one" , "two" , "three"];
for (let indx in list){
    console.log(indx , list[indx]);
}



//practice que


const obj = {
    a :1 ,
    b : 2, 
    c : 3,
};
for (let i in obj){
    console.log(`${i} : ${obj[i]}`);
}



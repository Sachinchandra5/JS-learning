//restn  opeartors


//rest operator syntax allows a fnc to accept an indefinite no. of arguments 
//as an array, providing a way to represent variadic fnc in js.


//varadic fnc are those which accept unlimited ammount of parameters


function users(x , ...usersDta){
    console.log(x);
    console.log(usersDta);
}

users('Sachin' , 19 , "Programming" , "football");


function peraon(firstName , lastName , ...hobbies){
    console.log(firstName);
    console.log(lastName);
    console.log(hobbies);
}

peraon('Sachin' , "Chandra" , "Programming , cricket");



//practice que

function name(...about){
    console.log(about);
}

name("Sachin Chandra" , "Web developer" , "18" ,);

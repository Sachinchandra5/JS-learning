// switch statements

// switch (expression){
// case x
//print
//break;
// case y 
//print 
//break;
//}


let x = 3;
let text;

switch (x) {
    case 0:
        text = "off";
        console.log(text);
        break;
    case 1:
        text = "on";
        console.log(text);
        break;
    default:
        text = "no value found";
        console.log(text);
}

let day = "Saturday";

switch (day) {
    case "Monday":
        console.log("Today is monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Don't know what day");
}





//practice que

let fruit = "Apple";

switch(fruit){
    case "banana":
        console.log("banan is good");
        break;
    case "orange":
        console.log("I am not a fan of orange");
        break;
    case "Apple":
        console.log("how you like theem apples?");
        break;
    default:
        console.log("i have never heard abnou that fruit");
}







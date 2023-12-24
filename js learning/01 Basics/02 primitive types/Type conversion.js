// type conversion

let money = "50";

// convert string to num ✅

// money = parseInt(money);
// money = +money;
money = Number(money);
console.log(typeof money);





// num to string ✅

let money1 = 50;

// money1 = money1.toString();
money1 = String(money1);

console.log(typeof money1);




// string to decimal

let money3 = "50.456";

money3 = parseFloat(money3);

console.log(typeof money3);


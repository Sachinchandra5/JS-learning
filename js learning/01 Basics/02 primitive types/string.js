// string is immutable

let firstName = '         Sachin         ';
let secondName = " Chandra";

//1. string concatenation
let fullName = firstName + secondName;
let fullNameConcat = firstName.concat(secondName);

let hello = `hello`;
console.log(fullName);
console.log(fullNameConcat);


//2. append (means adding value in variables)

// firstName += " Bhatt";
// console.log(firstName);



//3. length
console.log(firstName.length);


//4. cases
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());


//5. slice
console.log(firstName.slice(0, 15));


// 6. split and join (split for break  and join for joining)
let split = console.log(firstName.split(' '));


// 7. Includes
console.log(firstName.includes('i'));
console.log(firstName.includes('l'));


// 8. Trim
console.log(firstName.trim());

// backticks
let desc = `this is a random 
Text 
1
2
`

console.log(desc);
console.log(`${firstName} ${secondName}`);







// practice que

let favActorFirstName = "Siddharth ";
let favActorLastName = "Nigam";
let favActfullName = favActorFirstName.concat(favActorLastName);
let upperCase = favActfullName.toUpperCase();
let msg = `My favourite actor is ${upperCase}`;
msg += ` his best show is Aladdin naam toh suna hoga`;

console.log(msg);




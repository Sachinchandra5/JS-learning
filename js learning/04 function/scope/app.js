//scope is js refres to the curremnt context of code, which determmines the accessibility of variables to js

// two type of scope

//global scope 

//it cxan use at any place because it was global
let textmessage = 'hi';
console.log(textmessage);

//braces scope or local scope

//its only accessible inside these braces 
function showMassage(){
    let textmessage = 'hello';
    console.log(textmessage);
}

showMassage();




//you understand all thing by these code

function heyMassage(){
    // let textmessage = 'hello';
    console.log(textmessage);
}

heyMassage();


//another example

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// console.log(i);



//ternary opeartors

//it is concide way of writing conditional expression , it is only js operator take three operands
//it is short way to write if-else 

//condition ? exprIfTrue : exprIfFalse

let password = 4;
function passwordChecker(ps){

    // if(ps === 8){
        // return `Strong password`;
    // } else {
        // return `It should be of 8 characters`;
    // }

    return ps === 8 ? `Strong password` : `It should be 8 character`;

}

const res = passwordChecker(password);
console.log(res);


const age = 18;
const isAdult = age>=18 ? `Adult` : `Not Adult`;
console.log(isAdult);


//practie que

const money = false;
const isMoney = money === true ? "Buy Produuct" : "Thay should bring money";
console.log(isMoney);




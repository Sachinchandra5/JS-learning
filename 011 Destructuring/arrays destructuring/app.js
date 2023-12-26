//array destructuring


const num = ['one' , 'two' ];

// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);

const [sachin , two , three] = num;
console.log(sachin);
console.log(two);
console.log(three);



//we can specify default value of array
let a , b ;
[a = 5 , b = 8];
console.log(a);

let c , d ;
[c = 7 , d =5 ] = ["sachin" , "chandra"];
console.log(c);




function fun(){
    return [1 , 2]
}

let e ,f ;
[e , f] = fun()
console.log(e);
console.log(f);





// ignoring some return value from func

function f2(){
    return [1 , 2,3];
}
const [i , , j] = f2()
console.log(i);
console.log(j);


// for-each helper


const colors = ["teal" , "blue" , "red" , "green"];


colors.forEach(color => console.log(color));

const words = ["hello" , "bord" , "table" , "footaball" , "pipe"];
const capWords = words.forEach((word , index , arr)=>{
    arr[index] = word[0].toUpperCase() + word.substring(1);
});
console.log(words);




//practice que

const numbers = [1 , 2,3 ,4 ,5];
let sum = 0;
function adder(numbers){
    sum += numbers;
}

numbers.forEach(adder);
console.log(sum);




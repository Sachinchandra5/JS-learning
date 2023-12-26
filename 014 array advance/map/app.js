//map 

//creates a new array populated with the results of calling a provided func on evey eelement in the calling array


let numbers = [1, 2, 3, 4, 5];
let double = numbers.map(num => num * 2);

console.log(numbers);
console.log(double);

// it not effect exiting array it will make a new array


//practice que

let randomNum = [4, 5, 7, 2, 8, 3];
let randomDub = randomNum.map(dbNum => dbNum * 10);
console.log(randomDub);
console.log(randomNum);



//its allow to create a new array containing element that pass a certain condition . it provides a clean and concise way too filter out elements from an array based on a specified creteria.


const songs = [
    { name: "Lucky You", singer: "Joyner", duration: 4.34 },
    { name: "Just like you", singer: "NF", duration: 3.23 },
    { name: "Humble signer", singer: "Kendrick Lamar", duration: 2.33 },
    { name: "Old town road", singer: "Lil Nas X", duration: 1.43 },
    { name: "Cold sHolder", singer: "Central Cee", duration: 5.23 },
];

console.log(songs.filter(song => song.duration > 3));



const computers = [
    { ram: 4, hdd: 100 },
    { ram: 8, hdd: 200 },
    { ram: 16, hdd: 300 },
    { ram: 32, hdd: 400 },
];

console.log(computers.filter(comp => comp.ram >= 16));



//practice que


//1
const ages = [32, 33, 16, 15, 40];
console.log(ages.filter(age => age >= 18));
// console.log(ages);


//2
const words =["spray" , "limit" , "elite" , "exuberant" , "destruction" , "present"];
console.log(words.filter(word=>word.length > 6));



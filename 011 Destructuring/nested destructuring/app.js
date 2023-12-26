//nested destructuring

const songs = [
    {name : "Lucky You" , singer : "Joyner" , duration : 4.34 } ,
    {name : "Just like you" , singer : "NF" , duration : 3.23} ,
    {name : "Humble signer" , singer : "Kendrick Lamar" , duration : 2.33} ,
    {name : "Old town road" , singer : "Lil Nas X" , duration : 1.43 } ,
    {name : "Cold sHolder" , singer : "Central Cee" , duration : 5.23 } ,
];

const [, , , {singer:s}] = songs;
console.log(s);


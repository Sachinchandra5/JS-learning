//find method

// ..it is also a built-in array helper in js that allows you to find the first element in an array that matches a specific cond. it returns the value of first element that satisfy testing function, or undefined if no element is found.


const peoples = [
    { name: "Sachin", age: 18 },
    { name: "HuXn", age: 19 },
    { name: "Alex", age: 25 },
    { name: "John", age: 19 },
    { name: "Jimmy", age: 20 },
    { name: "Alex", age: 20 },
];

const res = peoples.find(person => person.name === "Alex");
console.log(res);

const res2 = peoples.find(person => person.name === "Sachin");
console.log(res2);

//by filter
const res3 = peoples.filter(person => person.name === "Alex");
console.log(res3);

//find
const posts = [
    { id: 1, content: "Good Post" },
    { id: 2, content: "Funny Post" },
    { id: 3, content: "Sad Post" },
];

const post = posts.find(post => post.content === "Funny Post");
console.log(post);


//practice que

const ages = [3 , 10 , 18 , 20];
const grt = ages.find(great=>great > 18);
console.log(grt);


//2
let products = [
    {name : "Checkers" , category : "Toys"},
    {name : "Harry Poter" , category : "Books"},
    {name : "iPhone" , category : "Electronics"},
    {name : "Learn Goland" , category : "Books"},
];

let product = products.find(product=>product.category === "Books");
console.log(product);

let product1 = products.filter(product1=>product1.category === "Books");
console.log(product1);


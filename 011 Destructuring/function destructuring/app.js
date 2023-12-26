//function dtructuring

const person = {
    name: "John Doe",
    age: 20,
    country: "USA",
}

function pritnPersongInfo({ name, age, country }) {
    console.log(`Name ${name}`);
    console.log(`Age ${age}`);
    console.log(`Country ${country}`);
}

pritnPersongInfo(person);


let options = {
    title: "My Menu",
    items: ["item1", "item2"]
}

function showMenu({ title, name = "Sachin", width: w = 100, height: h = 200, items: [item1, item2] }) {
    console.log(`${title} , ${w} , ${h}`);
    console.log(item1);
    console.log(item2);
    console.log(name);
}

showMenu(options);





//JSON (Javascript Object Notion)

const person = {
    "name":"John Doe",
    "age": 20,
    "email": "John@gmail.com",
    "isSubscribed":true,
    "hobbies":["readings" , "Running" , "Cooking"],
    "address":{
        "city":"New York",
        "idk":true
    }
}

//convert object to json
const jsonString = JSON.stringify(person);
console.log(jsonString);

//convert json to object
const parseObject = JSON.parse(jsonString);
console.log(parseObject);


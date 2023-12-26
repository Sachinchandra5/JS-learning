const data = {
    user: {
        id: 123,
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com",
        address: {
            city: "New York",
            country: "USA",
        },
        hobbies: ["Reading", "Painting", "Cooking"],
        scores: {
            math: 95,
            science: 88,
            history: 75,
        },
    },
    products: [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Phone", price: 800 },
        { id: 3, name: "Tablet", price: 500 },
    ],
    settings: {
        darkMode: true,
        notifications: {
            email: true,
            sms: false,
            push: true,
        },
        language: "English",
    },
};


//destructuring 

const {
    user: {
        name, age, address: { city, country },
    hobbies,
    scores: { math, science, history },
    email
    },
products: [product1, product2, product3],
    settings: {
    darkMode,
        notifications : {
        email: emailNotification,
            sms: smsNotification,
                push: pushNotification,
        },
    language,
    },
  } = data;



  
  // console .log all destructuring
  console.log(name);
  console.log(age);
  console.log(city);
  console.log(country);
  console.log(hobbies);
  console.log(math);
  console.log(science);
  console.log(history);
  console.log(email);
  console.log(product1);
  console.log(product2);
  console.log(product3);
  console.log(darkMode);
  console.log(emailNotification);
  console.log(smsNotification);
  console.log(pushNotification);
  console.log(language);









// setInterval(code will repeat untill do not gi)

// setInterval(function) 

// setInterval(()=>console.log(`This function will be excuted every 2 seconds`) , 2000);


//stop interval after 10s

const intervalId = setInterval(function(){
    console.log(`This functio is beingexcuted in that interval `);
},1000);


//to stop use clear interval
setTimeout(function(){
    clearInterval(intervalId);
    console.log(`Interval stop`);
}, 10000);



// setTimeout (code will excute after delay)

//anonymous function (fumction without name)

// setTimeout(function(){
    // console.log(`THis fnc will be excuyted after 3 seconds`);
// } , 3000);
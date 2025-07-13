// basic syntax for promises
let promise = new Promise(function(resolve,reject){
    let success = true;  
    if(success)
    {
        resolve("operation successful");
    }
    else{
        reject("something went wrong");
    }
});
promise.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});

// Example 1
let takkalBook = new Promise(function(resolve,reject){
    let bookingSuccess= false;
    if(bookingSuccess)
    {
        resolve("Ticket booked successfully");
    }
    else{
        reject("Ticket booking failed");
    }
    });
    takkalBook.then(function(success){
        console.log("Thanks for booking.I will transfer the amount");
    })
    takkalBook.catch(function(failure){
        console.log(" Thanks for trying. I will book bus ticket" );
    });



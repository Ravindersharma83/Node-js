const Emitter = require("events");

const myEmitter = new Emitter();

// creating an event
// myEmitter.on("some-event", (data) => {
//     console.log('data---',data);
// })


// // run/emit an event
// myEmitter.emit("some-event", {
//     name: "Ravinder Sharma",
//     age: 27
// })

// Real-life Example

class Auth extends Emitter {
    register(username) {
        console.log("Registered Successfully...");

        // call event to send mail at a time of user registration
        this.emit("registered", username);
        
    }
}

const auth = new Auth();

// Listen registered event
auth.on('registered', (data) => {
    console.log(`Sending verify mail to ${data}`);
})

auth.on('registered', (data) => {
    console.log(`Sending welcome mail to ${data}`);
})

auth.register("Ravinder")
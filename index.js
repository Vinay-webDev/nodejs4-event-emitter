//////////////////////////////////////////////////
// this is little confusing so practice more!
// import logEvents from ./logEvents.js
const logEvents = require('./logEvents');
// we also need to import the 'events' common core module 
const EventEmitter = require('events');

//according to the documentation
//we need to define a class 
class MyEmitter extends EventEmitter {};

//initialize the object or instance👇
const myEmitter = new MyEmitter();

// we need to add event listener for the log event
myEmitter.on('log', (msg) => {
    logEvents(msg);
} );

//setTimeout to have delayed log events
setTimeout(() => {
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);
/* as we can see we got our logData logged to the console
however we got into an error if you observe there's no directory called 'logs' in the file tree
the appendFile just create a new file but can't able to create a directory or folder for us */













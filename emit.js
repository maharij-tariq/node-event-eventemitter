import EventEmitter from "node:events"
const Event =  new EventEmitter();

Event.on('greet',()=>{
    console.log('Hello Maharij')
});
Event.emit('greet')
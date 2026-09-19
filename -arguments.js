import EventEmitter  from "node:events";
const Event = new EventEmitter();
Event.on('greet',(name,age)=>{
    console.log(`I am ${name} and ${age} years age`)
})

Event.emit('greet',"Maharij",21)
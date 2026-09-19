import EventEmitter from "node:events";
const event = new EventEmitter();
event.on('login',()=>{
    console.log('login')
})
event.on('logout',()=>{
    console.log('logout')
})
console.log(event.eventNames())
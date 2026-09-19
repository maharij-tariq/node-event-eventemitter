import EventEmitter from "node:events";
const event = new EventEmitter();
event.on('message',()=>{
    console.log('Listener 1')
}) 
event.on('message',()=>{
    console.log('Listener 2')
}) 
event.on('message',()=>{
    console.log('Listener 3')
}) 
event.emit('message')
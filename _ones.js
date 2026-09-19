import EventEmitter from "node:events";
const event = new EventEmitter();
 event.once('login', ()=>{
    console.log("Users Logged in ")
 })
 event.emit('login')
 event.emit('login')
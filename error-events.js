import EventEmitter  from "node:events";
const event = new EventEmitter();
 event.on('error',(error)=>{
    console.log('Error',error.message)
 })
 event.emit('error', new Error ('Something went wrong') )
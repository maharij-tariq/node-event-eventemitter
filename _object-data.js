import EventEmitter from "node:events";
const event = new EventEmitter();
event.on('profile',(user)=>{
    console.log('Name :', user.name)
    console.log("city  :" ,user.city)
})

event.emit('profile',{
    name : 'Mahairj',
    city: 'islamabad'
})
import EventEmitter from "node:events";
const event = new EventEmitter()
function logout(){
    console.log('Users logged out')
}
event.on('logout',logout)
event.emit('logout')
event.off('logout', logout)
event.emit('logout')
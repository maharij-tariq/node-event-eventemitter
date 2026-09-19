import EventEmitter from "node:events";
const app = new EventEmitter();
app.on('login',(name)=>{
    console.log("Login: ",name)
})
app.on('logout',(name)=>{
    console.log('Logout: ', name)
})

app.emit('login','Mahairj')
app.emit('logout','Maharij')

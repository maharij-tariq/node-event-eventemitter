import EventEmitter from "node:events";
import test from "node:test";
const event = new EventEmitter();
 function firstListener(){
    console.log('Firstlistener 1')
 }
 function secondListerner(){
    console.log('secondListener')
 }
 event.on('test',firstListener)
 event.on('test', secondListerner)

 console.log(event.listenerCount('test'))
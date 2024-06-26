import throttle from "./throttle";

console.log('throttled function: (param:any)=>{console.log(`testing debounce${param}`)} with a delay of 5 seconds')
const f = throttle((param:any)=>{console.log(`testing debounce${param}`)}, 5)

f(1)
f(2)
setTimeout(()=>{f(3)},5)
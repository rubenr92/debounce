import throttle from "./throttle";

const f = throttle((param:any)=>{console.log(`testing debounce${param}`)}, 5)

f(1)
f(2)
setTimeout(()=>{f(3)},5)
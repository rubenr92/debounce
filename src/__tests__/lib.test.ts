
import throttle from '../throttle'


describe('Throttled', () => {
  it('should not execute a function call if it happens within a time interval', () => {
    let value:string
    value =''
    const throttled = throttle((param:string)=> value += param, 2000);
    throttled('a')
    throttled('b')
    setTimeout(()=>expect(value).toBe('a'), 3000);
  });

  it('should execute the function call if the waiting period has expired', () => {
    let value:string
    value =''
    const throttled = throttle((param:string)=> value += param, 2000);
    throttled('a')
    setTimeout(()=> throttled('b'), 2100)
    setTimeout(()=>expect(value).toBe('ab'), 4000);
  });

});

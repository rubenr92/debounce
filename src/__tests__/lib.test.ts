
import throttle from '../throttle'

jest.useFakeTimers()

describe('Throttled', () => {
  it('should not execute a function call if it happens within a time interval', () => {
    let value:string
    value =''
    const throttled = throttle((param:string)=> value += param, 2000);
    throttled('a')
    throttled('b')
    jest.runAllTimers()
    expect(value).toBe('a')
  });

  it('should execute the function call if the waiting period has expired', () => {
    let value:string
    value =''
    const throttled = throttle((param:string)=> value += param, 2000);
    throttled('a')
    jest.runAllTimers()
    throttled('b')
    expect(value).toBe('ab')
  });

});

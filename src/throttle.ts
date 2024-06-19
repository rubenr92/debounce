export default function throttle(mainFunction:any, delay:number) {
    let timerFlag:any;
    timerFlag = null 
  

    return (...args:any[]) => {
      if (timerFlag === null) { 
        mainFunction(...args); 
        timerFlag = setTimeout(() => { // Set a timer to clear the timerFlag after the specified delay
          timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
        }, delay);
      }
      //console.log(timerFlag)
    };
  }
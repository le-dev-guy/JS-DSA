function myCustomThrottle (cb) {
    let shouldWait = false;
    let waitingArgs;
    const timeOutFunc = () => {
        if(waitingArgs == null) {
            shouldWait = false;
        } else {
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeOutFunc, delay);
        }
    }
    return (...args) => {
        if(shouldWait) {
         waitingArgs = args;
         return
        }
        cb(...args);
        shouldWait = true;

        setTimeout(timeOutFunc, delay);
    }
}
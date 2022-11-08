const input = ["flower", "flow", "fly"]
// output => fl;

let getCommonPrefix = (input) => {
    let prefix = "";
    if(input == null || input.length == 0) return prefix;
    for(let i=0; i<input[0].length; i++){
        for(let s of input) {
            if(s[i] !== input[0][i]) {
                return s.slice(0,i);
            }
        }
    }
}

let getCommonPrefixWithoutSlice = (str) => {
    let prefix = "";
    if(str == null || str.length == 0) return prefix;
    if(str.length === 1) {
        return str[0];
    }
    let mxLength = 0;
    for(let i=0; i<str.length; i++) {
        mxLength = str[i].length;
    }
    let currIndex = 0;
    let currentChar = "";
    let shouldContinue = true;
    while(currIndex < mxLength && shouldContinue) {
        for(let i=0; i<str.length; i++){
            if(str[i][currIndex] == undefined) {
                shouldContinue = false;
                break;
            } if(i>0) {
                if(currentChar === str[i][currIndex]){
                    if(i === str.length - 1) {
                        prefix += currentChar;
                    } else {
                        shouldContinue = false;
                        break;
                    }
                } else {
                    currentChar = str[i][currIndex];
                }
            }
        }
        currIndex++;
    }
    return prefix;
}


console.log(getCommonPrefixWithoutSlice(input));

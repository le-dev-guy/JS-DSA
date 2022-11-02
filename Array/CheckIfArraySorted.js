const inputArray = [10,2,30,40,50]

function checkIfArrayIsSorted(inputArray) {
    let result = inputArray;
    for(let i=0; i<inputArray.length; i++) {
        if(result[i] > result[i+1]) {
            return false
        }
    }
    return true;
}

console.log(checkIfArrayIsSorted(inputArray));

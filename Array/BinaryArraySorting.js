const input = [1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0]

function binaryArraySorting(input) {
    let j = -1;
    for(let i=0; i<input.length; i++) {
         // if number is smaller than 1
        // then swap it with j-th number
        if(input[i] < 1) {
            j++;
            let temp = input[i];
            input[i] = input[j];
            input[j] = temp;
        }
    }
    return input;
}
console.log(binaryArraySorting(input));
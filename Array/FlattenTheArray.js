const arr = [[1,2], 3, 4, [5,6]];

// let withConcat = [].concat(...arr);
// console.log(withConcat);

function customFlat(arr, depth = 1) {
    let result = [];
    arr.forEach(ar => {
        if(Array.isArray(ar) && depth > 0) {
            result.push(...customFlat(ar, depth - 1));
        } else {
            result.push(ar);
        }
    });
    return result;
}

console.log(customFlat(arr));
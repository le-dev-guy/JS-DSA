const arr = [1,2,3,4,5];

function reverseArray (input) {
    let arr = [...input];
    let left = 0;
    let right = input.length -1;
    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

console.log(reverseArray(arr));
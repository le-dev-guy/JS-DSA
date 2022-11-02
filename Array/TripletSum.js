const arr = [1, 4, 45, 6, 10, 8];

[1,4,6,8,10,45]

function tripletSum(arr, key) {
    let left, right;
    arr.sort((a,b) => a-b);
    for(let i=0; i<arr.length - 2; i++) {
        left = i+1;
        right = arr.length - 1;
        while(left < right) {
            if(arr[i] + arr[left] + arr[right] == key) {
                return true;
            }
            else if(arr[i] + arr[left] + arr[right] < key)
                left++;
            else
                right--;
        }
    }
    return false;
}

console.log(tripletSum(arr, 13));


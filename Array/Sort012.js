const arr = [0,2,1,2,0]

function sort012(arr) {
    let left = 0;
    let mid = 0;
    let right = arr.length - 1;
    while(mid <= right ) {
        switch (arr[mid]) {
            case 0: {
                let temp = arr[mid];
                arr[mid] = arr[left];
                arr[left] = temp;
                left++;
                mid++;
            }
                break;
            case 1: {
                mid++;
            }

            case 2: {
                let temp = arr[mid];
                arr[mid] = arr[right];
                arr[right] = temp;
                right--;
            }
        }
    }
    return arr;
}

console.log(sort012(arr));
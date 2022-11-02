const arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

function sortColors(input) {
  let arr = [...input];
  let left = 0;
  let mid = 0;
  let right = arr.length - 1;
  while (mid <= right) {
    switch (arr[mid].toString()) {
      case '0': {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = arr[temp];
        left++, mid++;
        break;
      }
      case '1':
        mid++;
        break;
      case '2': {
        let temp = arr[mid];
        arr[mid] = arr[right];
        arr[right] = arr[temp];
        right--;
      }
      default:
        break;
    }
  }
  return arr;
}

console.log(sortColors(arr));

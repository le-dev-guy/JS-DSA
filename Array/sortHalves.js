const arr = [35, 68];

function sortHalves(arr) {
  let half;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      half = i + 1;
      break;
    }
  }

  if (half == 0) return;

  let i = 0,
    j = half;
  let k = 0;
  let temp = [];
  while (i < half && j < arr.length) {
    if (arr[i] > arr[j]) {
      temp[k++] = arr[j++];
    } else if (arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    }
  }
  while (i < half) {
    temp[k++] = arr[i++];
  }
  while (j < arr.length) {
    temp[k++] = arr[j++];
  }
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
  return arr;
}

console.log(sortHalves(arr));

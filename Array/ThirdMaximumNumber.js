const a = [3,2,1];

function thirdMaximumNumber(nums) {
    let max = -Infinity;
  let mid = -Infinity;
  let min = -Infinity;

  for (x of nums) {
    if (x > max) {
      min = mid;
      mid = max;
      max = x;
    }  else if (x > mid  && x < max) {
      min = mid;
      mid = x;
    } else if (x > min && x < mid) {
      min = x;
    }
  }

  return (min > -Infinity) ? min : max;

}

console.log(thirdMaximumNumber(a));
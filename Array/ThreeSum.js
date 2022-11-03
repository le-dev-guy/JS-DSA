const nums = [ 1, 4, 45, 6, 10, 8 ]

function threeSum(A, arr_size,sum) {
    let l, r;
    A.sort((a,b) => a-b);
    const result = [];
    for (let i = 0; i < arr_size - 2; i++) {
        l = i + 1;
        r = arr_size - 1;
        while (l < r) {
            if (A[i] + A[l] + A[r] == sum)
            {
                result.push([A[i], A[l], A[r]]);
            }
            else if (A[i] + A[l] + A[r] < sum)
                l++;
            else
                r--;
        }
    }

    // If we reach here, then no triplet was found
    return false;
}

console.log(threeSum(nums, nums.length, 0));
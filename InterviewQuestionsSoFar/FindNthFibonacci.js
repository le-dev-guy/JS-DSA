const input  = 2;
// [0, 1, 1, 2, 3, 5];
function findNthFibonacci(nums) {
    if(nums < 2)
        return nums;
    return findNthFibonacci(nums-1) + findNthFibonacci(nums-2);
}

console.log(findNthFibonacci(input));

let findNthFibonacci = (nums) => {
    let a=0;
    let b=1;
    let sum=0;
    for(let i=2; i<=nums; i++) {
        sum = a+b;
        a = b;
        b = sum;
    }
    if(nums) {
        return b;
    }
    return a;
}

console.log(findNthFibonacci(3));
const a = 'Goyal';

function reverseString(input) {
    if(!input.length) return '';
    let splittedString = input.split('');
    let left = 0;
    let right = input.length - 1;
    while(left <= right) {
        let temp = splittedString[left];
        splittedString[left] = splittedString[right];
        splittedString[right] = temp;
        left++;
        right--;
    }
    return splittedString.join('');
}

console.log(reverseString(a));
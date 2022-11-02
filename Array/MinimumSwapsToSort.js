const arr = [4,3,2,1];

function countSwaps(arr) {
    const referenceArray = [];
    for(let i=0; i<arr.length; i++) {
        referenceArray.push({elem: arr[i], index: i});
    }
    referenceArray.sort((a,b) => a.elem - b.elem);
    console.log(referenceArray);
    let swapCount = 0;
    for(let i=0; i<arr.length; i++) {
        // console.log(referenceArray[i].index, i);
        if(referenceArray[i].index == i) continue;
        else {
            swapCount++;
            console.log(referenceArray[i]);
            let temp = referenceArray[i];
            referenceArray[i] = referenceArray[referenceArray[i].index];
            referenceArray[referenceArray[i].index] = temp;
            i--;
        }
    }
    return swapCount;
}

console.log(countSwaps(arr));
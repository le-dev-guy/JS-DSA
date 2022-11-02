const arr = [9,9,9,2,5]

function sortingElementsByFreq(arr) {
    let elementCount = {};
    arr.forEach((element) => {
        if(elementCount[element]) {
            elementCount[element]++;
        }
        else {
            elementCount[element] = 1;
        }
    })
    let countArray = []
    for(let count in elementCount) {
        countArray.push({element: count, Count: elementCount[count]});
    }
    console.log(countArray);
    countArray.sort((a,b) => {
        return (a.element - b.element) && (b.Count - a.Count)
    })
    console.log(countArray);
}

sortingElementsByFreq(arr);
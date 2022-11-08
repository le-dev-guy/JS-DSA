const arr = [2, 5, 2, 6, -1, 9999999, 5, 8, 8, 8]

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
        return (b.Count - a.Count);
    })
    let result = []
    for(let i=0; i<countArray.length; i++){
        while(countArray[i].Count--){
            result.push(countArray[i].element);
        }
    }

    console.log(result);
}

sortingElementsByFreq(arr);
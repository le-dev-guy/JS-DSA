const array = [1,2,3,4,5]

const result = array.map((elem) => elem * 2);
console.log('Built-in Map', result);

// Polyfill for array
Array.prototype.myCustomMap = function (cb) {
    let temp = [];
    for(let i=0; i<this.length; i++){
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

const customArrayResult = array.myCustomMap((elem) => elem * 3);
console.log('customMapArrayResult', customArrayResult)

// Polyfill for filter
Array.prototype.myCustomFilter = function (cb) {
    let temp = [];
    for(let i=0; i<this.length; i++){
        if(cb(this[i], i, this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

const myCustomFilerResult = array.myCustomFilter((elem) => elem % 2 === 0);
console.log('mycustomfilter', myCustomFilerResult);


// Polyfill for reduce
Array.prototype.myCustomReduce = function (cb, intialValue) {
    var accumulator = intialValue
    for(let i=0; i<this.length; i++){
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}

console.log('myCustomReduce', array.myCustomReduce((accumulator, initialValue) => {
    return accumulator + initialValue;
}, 0));

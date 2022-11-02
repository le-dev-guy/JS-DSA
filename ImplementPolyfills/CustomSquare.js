const a = [1,2,3];

Array.prototype.myCustomSquare = function () {
    let result = [];
    for(let i=0; i<this.length; i++) {
        result.push(this[i]*this[i]);
    }
    return result;
}


console.log(a.myCustomSquare());
console.log(a);
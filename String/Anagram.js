const stringOne = 'geek';
const stringTwo = 'keeg';

function BasicApproach(s1, s2) {

    if(s1.length !== s2.length)
        return false;

    let stringOne = s1.split("");
    let stringTwo = s2.split("");
    stringOne.sort();
    stringTwo.sort();

    for(let i=0; i<stringOne.length; i++) {
        if(stringOne[i].toString() !== stringTwo[i].toString()) {
            return false;
        }
    }
    return true;
}

// console.log(BasicApproach(stringOne, stringTwo));


let NO_OF_CHARS = 256;

function optimizedApproach(s1, s2) {
    if(s1.length !== s2.length)
        return false;

    // Using an reference array
    let count1 = new Array(NO_OF_CHARS);
    let count2 = new Array(NO_OF_CHARS);

    count1.fill(0);
    count2.fill(0);

    let stringOne = s1.split("");
    let stringTwo = s2.split("");

    for(let i=0; i<stringOne.length && i<stringTwo.length; i++) {
        count1[stringOne[i].charCodeAt(0)]++;
        count2[stringTwo[i].charCodeAt(0)]++;
    }

    for(let i=0; i<NO_OF_CHARS; i++){
        if(count1[i] != count2[i]) {
            return false;
        }
    }
    return true;
}

console.log(optimizedApproach(stringOne, stringTwo))
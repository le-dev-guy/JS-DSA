const roman = 'V';

function value(r){
    if(r == 'I')
        return 1;
    if(r == 'V')
        return 5;
    if(r == 'X')
        return 10;
    if(r == 'L')
        return 50;
    if(r == 'C')
        return 100;
    if(r == 'D')
        return 500;
    if(r == 'M')
        return 1000;
}

function romanToDecimal(str) {
    let res = 0;
    for(let i=0; i<str.length; i++) {
        let s1 = value(str[i]);
        if(i+1 < str.length) {
            let s2 = value(str[i+1]);
            if(s1 >= s2) {
                res = res + s1;
            }
            else {
                res = res + s2 - s1;
                i++;
            }
        }
        else {
            res = res + s1;
        }
    }
    return res;
}

console.log(romanToDecimal(roman));
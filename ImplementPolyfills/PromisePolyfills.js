function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, time);
    })
}

const result = Promise.race([showText('Hello', 1000), Promise.resolve('Hi')]);

function myCustomePromiseAll(promises) {
    let result = [];
    promises.forEach((element, index) => {
        element.then((res) => {
            result.push(res);
            if(index === promises.length - 1) {
                resolve(result)
            }
        }).catch((err) => reject(err));
    });
}

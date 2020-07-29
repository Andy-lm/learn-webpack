let arr = [1, 2, 3];

let sum = arr.reduce(function (initValue, curValue) {
    console.log(initValue, curValue);
    return initValue + curValue;
}, 1000);
console.log(sum);
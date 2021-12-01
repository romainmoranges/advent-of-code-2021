const fs = require('fs');

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split(/\n/);

const response = input.reduce((prevValue, currentValue, index, array) => {
    const a = parseInt(currentValue);
    const b = parseInt(array[index - 1])
    if (index !== 0 && a > b ) {
        prevValue++;
    }

    return prevValue;
}, 0)

console.log(response);
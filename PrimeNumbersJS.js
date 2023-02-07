const prompt = require("prompt-sync")({sigint:true});
const lowerLimit = parseInt(prompt('Enter lower limit: '));
const higherLimit = parseInt(prompt('Enter higher limit: '));

console.log(`The prime numbers between ${lowerLimit} and ${higherLimit} are:`);

for (let i = lowerLimit; i <= higherLimit; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++){
        if (i % j === 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag === 0){
        console.log(i);
    }
}
// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lookAndSay = function(n) {
    console.log(n);
    let numString = n.toString();
    let result = "";

    let currentCount = 1;
    let currentDigit = numString[0];
    for (let i=1; i <= numString.length; i++) {
        let digit = numString[i];

        if (digit === currentDigit){
            currentCount++;
        } else {
            result += currentCount;
            result += currentDigit;
            console.log(`currentDigit ${currentDigit}`);
            console.log(`currentCount ${currentCount}`);
            currentCount = 1;
            currentDigit = digit;
        }
    }
    console.log(result);
    return parseInt(result);

};

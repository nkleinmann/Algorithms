// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lookAndSay = function(n) {
    console.log(n);
    n.toString();
    console.log(n.toString().split(""));
    let newArray = n.toString().split("");
    for (let i=0; i<newArray.length; i++) {
        newArray.forEach( element =>
            console.log(newArray[i].indexOf(element)));
    }

};

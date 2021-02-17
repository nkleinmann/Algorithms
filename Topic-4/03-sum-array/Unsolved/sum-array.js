// Write code to add all the numbers in `arr` and return the total
let sum = 0

var sumArray = function(arr) {
    console.log(arr);
    for (let i=0; i<arr.length; i++) {
        sum = sum + arr[i];
        // console.log(sum);
    }
    return(sum);
};

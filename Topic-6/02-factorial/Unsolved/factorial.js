// Write code to create a function that returns the factorial of `num`

// var factorial = function(num) {
//     let number = num;
//     // console.log("number" + number);
//     for (let i=0; i<num-1; i++) {
//         number = number * (num-1-i);
//         // console.log(number);    
//     }
//     if (number === 0) {
//         number = 1;
//     }
//     return number;
// };

var factorial = function(num) {
    var result = 1;
  
    for (var i = num; i > 1; i--) {
      result = result * i;
    }
  
    return result;
  };
  
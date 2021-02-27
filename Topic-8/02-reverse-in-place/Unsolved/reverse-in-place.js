// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverseInPlace = function(arr) {
    // console.log(arr);
    let left = 0;
    let right = arr.length-1;
    while (left < right){
        let temp = arr[left];
        // console.log(`left ${left}`);
        // console.log(`right ${right}`);
        arr[left] = arr[right];
        //gets the other half of the array so it doesn't replace with new values such as [5, 4, 3, 4, 5] instead of [5, 4, 3, 2, 1]
        arr[right]=temp;

        left ++;
        right --;
    }
        // console.log(arr);
        // newArray.push(newElement);
  
    return arr;
};

// var reverseInPlace = function(arr) {
//     var left = 0;
//     var right = arr.length - 1;
  
//     while (left < right) {
//       var temp = arr[left];
//       console.log(`left ${left}`);
//       console.log(`right ${right}`);
//       console.log(`temp ${temp}`);
//       arr[left] = arr[right];
//       arr[right] = temp;
  
//       console.log(`new temp ${temp}`);

//       left++;
//       right--;
//     }
  
//     return arr;
//   };
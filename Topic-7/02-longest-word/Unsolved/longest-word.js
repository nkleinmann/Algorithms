// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
    // console.log(str);
    let newStringArray=str.split(" ");
    let strLength = 0;
    let longestWord = "";
    for (let i=0; i<newStringArray.length; i++){
        if (newStringArray[i].length > strLength) {
            strLength = newStringArray[i].length;
            longestWord = newStringArray[i];
        }
    }
    return longestWord;
};

// var longestWord = function(str) {
//     var words = str.split(" ");
//     var longestWord = words[0];
  
//     for (var i = 1; i < words.length; i++) {
//       var currentWord = words[i];
  
//       if (currentWord.length > longestWord.length) {
//         longestWord = currentWord;
//       }
//     }
  
//     return longestWord;
//   };
  

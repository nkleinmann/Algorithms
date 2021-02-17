// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
    // console.log(str);
    let stringArray = str.split(" ");
    let finalString="";
    // console.log(stringArray);
    for (let i=0; i<stringArray.length; i++) {
        let letters = stringArray[i].split("");
        // console.log(letters);
        letters[0] = letters[0].toUpperCase();
        // console.log(letters);
        finalString += letters[0];
        // console.log(finalString);
    }
    return finalString;
};

// var acronymBuilder = function(str) {
//     var words = str.split(" ");
//     var result = "";
  
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       result += word[0].toUpperCase();
//     }
  
//     return result;
//   };
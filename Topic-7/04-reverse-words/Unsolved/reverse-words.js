// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

// var reverseWords = function(str) {
//     console.log(str);  
//     let words = str.split(" ");
//     let finalString = "";
//     console.log(words);
//     for (let i = words.length-1; i>=0; i--){
//         finalString += words[i] + " "; 
//         // finalString.push(words);
//         console.log(finalString);
//     }
//     return finalString;
// };

var reverseWords = function(str) {
    let words = str.split(" ");
    let finalString = words.reverse();
    // console.log(finalString);
    return finalString.join(" ");
    // console.log(finalString.join(" "));
};
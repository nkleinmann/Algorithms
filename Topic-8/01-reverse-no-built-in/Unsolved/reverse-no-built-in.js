// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverse = function(str) {
    // console.log(str);
    let finalWord="";
    // console.log(newArray);
    for (i=str.length-1; i>=0; i--) {
        finalWord += str[i];
    }
    return finalWord;
    

};

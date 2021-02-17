// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function(str) {
    // console.log(`original: ${str}`);
    let finalString = "";
    for (let i=0; i<str.length; i++) {
        let letter = str[i];
            if (letter === letter.toUpperCase()) {
                finalString += letter.toLowerCase();
            }
            else {
                finalString += letter.toUpperCase();
            }
        }
        // console.log(finalString);
        return finalString;
};

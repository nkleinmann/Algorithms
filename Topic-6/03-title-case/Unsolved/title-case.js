// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    let finalString = [];
    // console.log(str);
    let newString = str.split(" ");
    // let letters = str.split("");
    // console.log(newString);
    // console.log(letters);
    for (let i = 0; i<newString.length; i++) {
        let letters = newString[i].split("");
        // console.log(letters);
        letters[0] = letters[0].toUpperCase();
        finalString.push(letters.join(""));
        // console.log(finalString.join(" "));
        // console.log(finalString);
    }
    return finalString.join(" ");
};
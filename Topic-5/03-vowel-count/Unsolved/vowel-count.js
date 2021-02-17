// Write code to return the the number of vowels in `str`

let vowels = ["a", "e", "i", "o", "u"];

var vowelCount = function(str) {
    let result = 0;
    for (let i=0; i < str.length; i++) {
        // console.log(str[i]);
        let letter = str[i].toLowerCase();
        if (vowels.indexOf(letter) !== -1) {
            result += 1;
        }
        // console.log(result);
    }
    return result;
};

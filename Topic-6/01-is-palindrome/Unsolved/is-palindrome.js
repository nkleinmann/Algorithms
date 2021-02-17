// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    for (let i=0; i<str.length; i++) {
        let firstLetter=str[i];
        let secondLetter=str[str.length-1-i];
        if (firstLetter !== secondLetter) {
            return false;
        }
    }
    return true;
};

// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

var isNumeric = function(str) {
    // console.log(str);
    let nums = {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
    }

    let hasNum = false;
    let hasDecimal = false;

    for (let i=0; i<str.length; i++){
        let char = str[i];
        if (nums[char]){
            hasNum = true;
            continue;     
        } 
       
       if (i === 0){
           if (char ==="-" || char ==="+"){
               continue;
           }
       } 

       if (char === "."){
           if(hasDecimal === true){
               return false;
           }
           hasDecimal = true;
           continue;
       }
       return false;
    }
    if (hasNum){
        return true;
    }
    return false;
};

const palindromes = function(string) {
    let reversedString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }

    return (reversedString === string) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;

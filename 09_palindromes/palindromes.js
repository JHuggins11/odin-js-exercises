const palindromes = function(string) {
    let reversedString = "";
    // Remove characters that aren't letters and set to lowercase
    string = string.replace(/[^a-z]/g, "").toLowerCase();

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }

    return (reversedString === string) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;

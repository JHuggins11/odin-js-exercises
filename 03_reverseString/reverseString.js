const reverseString = function(string) {
    text = "";

    for (let i = string.length - 1; i >= 0; i--) {
        text += string[i];
    }

    return text;
};

// Do not edit below this line
module.exports = reverseString;

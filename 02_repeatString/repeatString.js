const repeatString = function(string, num) {
    let text = string;

    for (let i = 1; i < num; i++) {
        text += string;
    }

    return text;
};

// Do not edit below this line
module.exports = repeatString;

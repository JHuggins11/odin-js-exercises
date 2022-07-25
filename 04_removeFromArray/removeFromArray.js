// ...items - rest parameter to allow multiple args
const removeFromArray = function(array, ...items) {
    for (const value of items) {
        if (!array.includes(value)) {
            continue;
        }
        else {
            let index = array.indexOf(value);
            array.splice(index, 1);
        }
    }    

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

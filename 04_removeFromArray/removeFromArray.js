const removeFromArray = function(array, ...items) {
    console.log(array);
    console.log(items);

    for (const value of items) {
        console.log(value);
        let index = array.indexOf(value);
        console.log(index);
        array.splice(index, 1);
    }    
    console.log(array);

    return array;
};

removeFromArray([1, 2, 3, 4], 2, 3, 4);

// Do not edit below this line
module.exports = removeFromArray;

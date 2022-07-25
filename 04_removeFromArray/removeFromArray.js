const removeFromArray = function(array, item) {    
    let index = array.indexOf(item);
    let deletedItems = array.splice(index, 1);
    
    return array;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;

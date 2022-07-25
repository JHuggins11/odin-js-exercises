const sumAll = function(start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        //console.log(`Current: ${i}`);

        sum += i;
        //console.log(`Current sum: ${sum}`);
    }

    return sum;
};

//console.log(`Final sum: ${sumAll(1, 4)}`);

// Do not edit below this line
module.exports = sumAll;

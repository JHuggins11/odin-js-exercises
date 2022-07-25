const sumAll = function(num1, num2) {
    let start, end;
    let sum = 0;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else if (num1 > num2) {
        start = num2;
        end = num1;
    }
    else {
        start = num1;
        end = num2;
    }

    for (let i = start; i <= end; i++) {
        //console.log(`Current: ${i}`);

        sum += i;
        //console.log(`Current sum: ${sum}`);
    }

    return sum;
};

//console.log(`Final sum: ${sumAll(123, 1)}`);

// Do not edit below this line
module.exports = sumAll;

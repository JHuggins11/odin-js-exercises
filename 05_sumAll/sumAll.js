const sumAll = function(num1, num2) {
    let start, end;
    let sum = 0;

    //console.log(typeof(num1) === "string");
    //console.log(typeof(num2) === "string");

    if ((typeof(num1)) === "string" || (typeof(num2) === "string") 
        || (num1 < 0) || (num2 < 0)) {
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

//console.log(`Final sum: ${sumAll(10, "90")}`);

// Do not edit below this line
module.exports = sumAll;

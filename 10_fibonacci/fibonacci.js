const fibonacci = function(index) {
    const sequence = [0, 1];
    
    for (let i = 2; i <= index; i++) {
        let a = sequence[i - 1];
        let b = sequence[i - 2];
        sequence.push(a + b);
    }

    return sequence[index];
};

// Do not edit below this line
module.exports = fibonacci;

const fibonacci = function(x) {
    if (x < 0) return 'OOPS';
    
    let sum = 0;
    let currentNum = 1;
    let lastNum = 0;
        
    for (let i = 2; i <= x; i++) {
        sum = currentNum + lastNum
        lastNum = currentNum;
        currentNum = sum;
    }

    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;

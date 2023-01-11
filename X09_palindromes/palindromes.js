const palindromes = function (string) {
    debugger;
    let arr = string.toLowerCase().split('');

    arr = arr.filter(c => c.match(/[a-z]/));

    for (let i = 0; i <= (arr.length / 2); i++) {
        if (arr[i] === arr[arr.length - 1 - i]) continue
        else return false
    }

    return true
};


// Do not edit below this line
module.exports = palindromes;

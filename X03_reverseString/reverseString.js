const reverseString = function(string) {
    let stringArray = string.split('');

    let returnString = '';
    
    for (i = stringArray.length - 1; i >= 0; i--) {
        returnString += stringArray[i];
    }

    return returnString;

};

// Do not edit below this line
module.exports = reverseString;

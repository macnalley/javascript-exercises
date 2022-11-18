const caesar = function(message, shift) {
    let encodedMessage = '';

    // Gets the unicode value of each letter in the message and shifts it if it's a letter. 
    for (let i = 0; i < message.length; i++) {
        codeValue = message.charCodeAt(i);
        let newValue = codeValue

        // If unicode value is a capital letter
        if (codeValue >= 65 && codeValue <= 90) {
            newValue = codeValue + shift;

            if (newValue > 90) newValue -= 26;
            else if (newValue < 65) newValue += 26;
        } 
        
        // If unicode value is a lowercase letter
        if (codeValue >= 97 && codeValue <= 122) {
            newValue = codeValue + shift;

            if (newValue > 122) newValue -= 26;
            else if (newValue < 97) newValue += 26;
        }
        
        encodedMessage += String.fromCharCode(newValue)

    }

    return encodedMessage;
};

// Do not edit below this line
module.exports = caesar;

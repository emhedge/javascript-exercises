const reverseString = function(text) {
    text = '';
    let textArray = text.split(''); 
    let reversedText = '';

    for (i = textArray.length - 1; i >= 0; i--) {
        reversedText += textArray[i];
    }
    return reversedText;
};

reverseString();

// Do not edit below this line
module.exports = reverseString;

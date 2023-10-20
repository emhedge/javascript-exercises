const leapYears = function(givenYear) {
    // returns true if first and either part of second condition are met;
    // returns false otherwise
    return givenYear % 4 === 0 && (givenYear % 100 !== 0 || givenYear % 400 === 0); 
};

leapYears(700);

// Do not edit below this line
module.exports = leapYears;

const leapYears = function(givenYear) {
    if (givenYear % 400 == 0) return true;
    else if (((givenYear % 4) == 0) && ((givenYear % 100) == 0)) return false;
    else if ((givenYear % 4) == !0) return false;
    else if (givenYear % 4 == 0) return true;
};

leapYears(700);

// Do not edit below this line
module.exports = leapYears;

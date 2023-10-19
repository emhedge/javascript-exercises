const sumAll = function(first, second) {

    let finalSum = Number('');
    let args = [first, second];
    args.sort(function(a, b){return a - b});
    
    if ((Math.sign(first) < 0) || (Math.sign(second) < 0)) {
        return "ERROR"
    } 

    if (((typeof(first) === "string")) || ((typeof(second) === "string"))) {
        return "ERROR"
    }

    if ((typeof(first) === "object") || (typeof(second) === "object")) {
        return "ERROR"
    }

    
    let i = args[0];

    while (i <= args[1] && i  ) {
        finalSum += i;
        i++
}; return finalSum;
}


sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;

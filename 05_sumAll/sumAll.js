const sumAll = function(first, second) {

    let finalSum = 0;
    let args = [first, second];
    args.sort(function(a, b){return a - b});
    
    if ((first < 0) || (second < 0)) return "ERROR";

    if (((typeof(first) === "string")) || ((typeof(second) === "string"))) {
        return "ERROR"
    }

    if ((typeof(first) === "object") || (typeof(second) === "object")) {
        return "ERROR"
    }

    
    let i = first;

    while (i <= second) {
        finalSum += i;
        i++
}; return finalSum;
}


sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;

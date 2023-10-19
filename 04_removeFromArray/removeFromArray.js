const removeFromArray = function(array, ...args) {

    let newArray = [];

    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    }); return newArray;
    
    // let removedItems = Array.from(args);
    
    // for (i = 0; i < array.length; i++){
    //     if (removedItems === array[i]) {
    //         array.slice(args[i - 1], 1);
    //         return newArray;
    //     }  else continue;
        
    // }
    
    
    
};

removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray;

const removeFromArray = function(arr, ...args) {
    
    let ans = arr.filter(d => !args.includes(d));
    return ans
};

// Do not edit below this line
module.exports = removeFromArray;

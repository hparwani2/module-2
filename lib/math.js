let sum = function(a, b) {
    return a+b;
}

let subtract = function(a, b) {
    return a-b;
}

module.exports = { 
    sumExported: sum, 
    subtractExported: subtract 
};

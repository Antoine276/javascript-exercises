const fibonacci = function(param) {
    let array = [1, 1];
    const number = Number(param);

    if (number < 1 || number === NaN) {
        return "OOPS";
    }
    else if (number === 1) {
        return array[0];
    }

    for (i = 2; i < number; i++) {
        let tmp = array[0] + array[1]
        
        array[0] = array[1];
        array[1] = tmp;
    }

    return array[1];
};

// Do not edit below this line
module.exports = fibonacci;

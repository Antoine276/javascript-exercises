const removeFromArray = function(array) {
    /*return array.filter((element) => {
        for (let i = 1; i < arguments.length; i++) {
            if (element === arguments[i]) {
                return false;
            }
        }
        return true;
    });*/

    for (i = 1; i < arguments.length; i++) {
        while (array.indexOf(arguments[i]) !== -1) {
            array.splice(array.indexOf(arguments[i]), 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

const repeatString = function(string, number) {
    let Res = "";

    if (number < 0) {
        return "ERROR";
    }

    for (i = 0; i < number; i++) {
        Res += string;
    }

    return Res;
};

// Do not edit below this line
module.exports = repeatString;

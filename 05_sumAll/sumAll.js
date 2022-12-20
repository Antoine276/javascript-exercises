const sumAll = function(a, b) {
    if ((typeof(a) !== 'number') || (a < 0) || (typeof(b) !== 'number') || (b < 0)) {
        return 'ERROR';
    }

    if (a > b) {
        const tmp = a;
        a = b;
        b = tmp;
    }

    let Res = 0;

    for (i = a; i <= b; i++) {
        Res += i;
    }

    return Res;
};

// Do not edit below this line
module.exports = sumAll;

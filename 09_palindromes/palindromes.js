const palindromes = function (string) {
    let array = string.toLowerCase().split("").filter((char) => (char.toLowerCase() !== char.toUpperCase()));

    for (let i = 0; i < (array.length / 2); i++) {
        if (array[i] !== array[(array.length - 1) - i]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;

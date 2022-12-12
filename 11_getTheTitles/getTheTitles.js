const getTheTitles = function(array) {
    return array.map((object) => (object.title));
};

/*const getTheTitles = function(array) {
    return array.reduce((accumulator, object) => {
        accumulator.push(object.title);
        return accumulator;
    }, []);
}*/

// Do not edit below this line
module.exports = getTheTitles;

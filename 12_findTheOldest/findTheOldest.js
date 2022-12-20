const findTheOldest = function(tabObj) {
    const currentTime = new Date();

    const oldest = tabObj.reduce((oldest, obj) => {
        const age = "yearOfDeath" in obj ? obj.yearOfDeath - obj.yearOfBirth : currentTime.getFullYear() - obj.yearOfBirth;

        return age > oldest[1] ? [obj, age] : [oldest[0], oldest[1]];
    }, [{}, 0]);

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;

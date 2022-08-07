const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    people.reduce((oldestPerson, currentPerson) => {
        if (oldestPerson.yearOfDeath === undefined) {
            oldestPerson.yearOfDeath = currentYear;
        }
        else if (currentPerson.yearOfDeath === undefined) {
            currentPerson.yearOfDeath = currentYear;
        }
        
        let oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        let currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

        return currentAge > oldestAge ? currentPerson : oldestPerson;
    });
};

// See solution in solutions branch

// Do not edit below this line
module.exports = findTheOldest;

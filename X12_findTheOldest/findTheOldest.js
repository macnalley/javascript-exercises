const findTheOldest = function(people) {
    for (person of people) {
        let age = 0;

        // Calculate age
        if (person.yearOfDeath == null) {
            age = new Date().getFullYear() - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        
        person.age = age;
    }
    
    let oldestPerson = people.reduce(
        (prev, current) => {
            return (prev.age > current.age) ? prev : current});

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

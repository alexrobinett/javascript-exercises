const findTheOldest = (people = []) =>
  people.reduce
    ( ([ oldest, oldestAge ], person) => {
        const age = getAge(person) // only compute age of current person
        return age > oldestAge 
          ? [ person, age ]
          : [ oldest, oldestAge ]
      }
    , [ undefined, -Infinity ] // initial value
    )
    [0] // reduce returns [ <person>, <age> ], [0] gets the person out


const getAge = ({ yearOfBirth = 0, yearOfDeath = 0 }) =>
  yearOfDeath
    ? yearOfDeath - yearOfBirth
    : (new Date).getFullYear() - yearOfBirth
  
// Do not edit below this line

module.exports = findTheOldest;

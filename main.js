//mixed message project from CC

/*
OUTLINE:

I plan to make an add libs kind of creator talking about....

1. a person (array 1)
2. that does something (array 2)
3. in a certain location (array 3)

Display those three pieces of data in a sentance 

*/



const adLib = () => {

    const person = ['Bill', 'John', 'Sam', 'Pam'];
    const sport = ['racketball', 'tennis', 'basketball', 'soccer'];
    const location = ['California', 'San Diego', 'Florida', 'a Swamp Somewhere'];

    const randPerson = person[Math.floor(Math.random() * person.length)];
    const randSport = sport[Math.floor(Math.random() * sport.length)];
    const randLocation = location[Math.floor(Math.random() * location.length)];

    //console.log(randPerson);
    //console.log(randSport);
    //console.log(randLocation);

    return `Once upon a time, there was grinch named ${randPerson}. ${randPerson} loved to play ${randSport} in ${randLocation}. \n Thanks for playing!`


}; //end of adLib

console.log(adLib());

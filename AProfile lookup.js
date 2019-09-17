'use strict';
/*
We have an array of objects representing different people in our contacts lists.
A lookUpProfilefunction that takes nameand a property (prop) as arguments has been pre-written for you.
The function should check if nameis an actual contact's firstNameand the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If namedoes not correspond to any contacts then return "No such contact"
If propdoes not correspond to any valid properties of a contact found to match namethen return "No such property"
*/

var contacts = [
  {
    'firstName': 'Akira',
    'lastName': 'Laine',
    'number': '0543236543',
    'likes': ['Pizza', 'Coding', 'Brownie Points']
  },
  {
    'firstName': 'Harry',
    'lastName': 'Potter',
    'number': '0994372684',
    'likes': ['Hogwarts', 'Magic', 'Hagrid']
  },
  {
    'firstName': 'Sherlock',
    'lastName': 'Holmes',
    'number': '0487345643',
    'likes': ['Intriguing Cases', 'Violin']
  },
  {
    'firstName': 'Kristian',
    'lastName': 'Vos',
    'number': 'unknown',
    'likes': ['JavaScript', 'Gaming', 'Foxes']
  }
];


function lookUpProfile(name,prop){
// Only change code below this line
  for(let i = 0; i < contacts.length; i++){
    if( name === contacts[i].firstName){
      if (contacts[i].hasOwnProperty === (prop)){
        return contacts[i][prop];
      } else {
        console.log('No such property.');
      }
    }
  }
  console.log('No such name.');
}

// Only change code above this line


// Change these values to test your function
//lookUpProfile('Harry','likes');













const name = (name) => { return name[0] === 'R';};

function filter(arr,fn) {
  // TASK: Define your function here
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(fn(arr[i])){
      newArray.push(arr[i]);
    }
  }
  /*function firstLetter(arr){
    return arr.map((arr) => arr[0]).join('');
  }
  return newArray;
  */
  return newArray;
}




// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

//console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


console.log(filter(myNames,name));








// THis is the next set of drills
console.log('im working');

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;

  return function(location) {
    warningCounter += 1;
    if(warningCounter === 1){
      console.log(`DANGER! There is a ${typeOfWarning} hazard at/in ${location}!`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    } if (warningCounter > 1){
      console.log(`DANGER! There is a ${typeOfWarning} hazard at/in ${location}!`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
    return warningCounter;
  };
  
}

const rockWarning = hazardWarningCreator('Rock on the Road');
rockWarning('texas');
const flashFloods = hazardWarningCreator('High rushing waters');
flashFloods('Alaska');
flashFloods('Alaska');
flashFloods('Alaska');










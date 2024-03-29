'use strict';
/* Use the reduce function to iterate through an array of words and construct a decoded 
sentence (string) based on the following criteria:

If the array element is exactly three characters in length, 
add a space character to your accumulator

Otherwise, capitalize the LAST character of the array element and add it to your accumulator

Your input is 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'
You will need to convert the input to an array before using .reduce()

HINT: When you invoke reduce() you will need to set the initialValue parameter to an empty string 
so that future iterations can concatenate more string characters*/


//const sourceCode = ['noggin', 'oreo', 'the', 'moon', 'time', 'tele', 'steed', 'his', 'tent', 'apollo', 'her', 'lives', 'though', 'shoo', 'tofu', 'budapest'];
function reverseString(str) {
  let change = str.split("").reverse().join('');
  return change.charAt(0).toUpperCase() + change.slice(1);
}

console.log(reverseString('is this working'));

const sourceCode = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let breakUp = sourceCode.split(' ');
//console.log(breakUp);

let deCode = breakUp.reduce(function(accumulator, currentValue, currentIndex, array, initialValue = ''){
  for( let i = 0; i < breakUp.length; i++){   
    if (breakUp[i] === 3){
      return accumulator += ' ';
    } else {
      return accumulator = reverseString(accumulator);
    }
  }
   
});


//console.log(deCode);
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

//Reverse with ternary operator
/*
return (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);
*/


//Turn to array and reverse
/*
const array = str.split('');
array.reverse();
return array.join('');
*/


//Reverse helper
/*
return str
  .split('')
  .reverse()
  .join('');
  */


//Loop
/* 
let reversed = '';

for (let character of str)


{
  reversed = character + reversed;
}

return reversed;
*/


//Reduce method
  return str.split('').reduce((reversed, character) => character + reversed, '');
  debugger;
}
reverse('asassa');

module.exports = reverse;

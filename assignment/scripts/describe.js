// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable named number and set it equal to the number 1.
// We increment the variable by 1. number now equals 2.
// We create an if statement to check if the number variable is greater than or equal to 2.
// Since the number variable does equal 2 we console.log 'yes'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable named name and set it equal to 'Dane'
// We create an if / else statement to check if the name variable equals 'Mary'.
// If the name equals Mary the console.log will say 'Hi, Mary!' otherwise it will console.log 'How do you do?'.
// The name variable does not equal 'Mary' so we console.log 'How do you do?'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create  2 variables. One named secret that has no value yet. Another named code and set it equal to 123.
// We create an if statement that checks if the variable code equals 123. If it does it makes the variable secret equal 'super' along with setting the varible code equal to the code multiplied by 2.
// We create another if statment to check is the variable code is greater than 250. If true is sets the variable code equal to 'duper'. Lastly we log secret.
// Our code is 123 so our secret now equals 'super' and our code now equals 246. we console.log 'super'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX- colorOne should equal 'blue' and colorTwo should equal 'red' as the instrctions state.
//Should be let colorOne = 'blue' and let colorTwo = 'red'.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  //FIX- colorTwo should also equal 'purple' in this if statement.
  // should also have colorTwo = 'purple' below colorOne = 'purple'.
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
//FIX- the current if statment is checking if the temp is greater than 39 or time is greater than or equal to 4, this means only one would need to be true to log the statment. Should be checking if both are true statments.
//In the parentheis of the if statment is should be like this - (temp > 39 && time >=4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
//FIX - This current if staement would let anyone 21 or under enter. We need it to let everyone 21 and over to enter.
// the if stament should be like this -- if (age >= minAge) {
  console.log('enter');
} else {
  console.log('no entry');
}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/


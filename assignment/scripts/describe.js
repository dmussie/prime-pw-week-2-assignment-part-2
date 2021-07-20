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
// We make a variable called name and set it to Dane.
// Then we create an if... else statement to compare our name value (Dane) to a new value (Mary).
// We check to see if our inital name value (Dane) does indeed equal 'Mary'.
// Since our name value (Dane) does NOT equal 'Mary', we console.log 'How do you do?'.

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
// We create a variable called secret without a value to start.
// We created another variable called code with a value of 123.
// We have an if statment which checks if our code value equals 123. If the statement evaluates to true, the secret value will now equal 'super' and our code value will be multiplied by 2.
// We have a second if statement which checks if our code value is greater than 250. If true, the secret value will equal 'duper'.
// We console.log secret which will log from the first if statement since it is true: secret equals 'super'.

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
// We have three variable: isStudent which equals true, age which equals 34, and zip which equals 55407.
// We have an assortment of else... if statements which will compare each of our variables to the conditions set in parenthesis.
// To start, we see if BOTH the isStudent variable equals true and zip is greater than 80000.
// If both conditions are true, "You're a student on the West Coast!" is logged to the console.
// If either one or both conditions are false, we move on to the first else if statement.
// In the first else if statement, if one or both conditions are true, 'What are your hobbies?' is logged into the console.
// If both conditions are false in the first else if statement, the next else if statement is checked.
// In the next else if, we examine if isStudent equals true. If true, 'Welcome to Prime' is logged into the console.
// The final else statement will come into play if every previous statement evaluates to false.
// 'How about the weather?' will be logged into the console if all conditions described prior yield false.
// We console.log 'Welcome to Prime' because isStudent in fact does equal true.

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

// FIX - the instructions say that colorOne = 'blue' and colorTwo = 'red'. The variables are flipped in the example below.
// Change the colorOne and colorTwo values below.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - the instructions asks us to check if temp is higher than 39 AND if time is greater or equal to 4.
// the || symbol only checks for one condition to be true.
// change the || symbol to && to check for both conditions.
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

// FIX - the instuctions ask to determine if age is greater than or equal to min age.
// should read if (age <= minAge) so the console.log will show 'no entry' for those less than or equal to the min age and 'enter' to those above the min age.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

/*
Javascript for the functions of the calculator 
 
Created by: Rebecca Jackson as part of Dev Academy Sprint 5 challenges
*/

/*User Story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.

User Story #8: As I input numbers, I should be able to see my input in the element with the id of display.

User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.

User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.

User Story #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered.

User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

User Story #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).*/

document.addEventListener('DOMContentLoaded', runCalculator)
// Event listeners

function runCalculator(){
  //stores the input from the user
  var input = [""];
  //string that stores current inputs
  var totalString;
  // validation checks
  var validationOp = ['+', '-', '/', '*'];
  var validationDot = ['.'];
  //numbers for validation
  var nums = [0,1,2,3,4,5,6,7,8,9];

  function getValue(input){

  }

  function update(){
    totalString =input.join('');
    $('#display').html(totalString);
  }

  function getTotal(){
    totalString = input.join('');
    $('#display').html(eval(totalString));
  }

  

}




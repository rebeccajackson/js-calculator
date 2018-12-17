/*
Javascript for the functions of the calculator 
 
Created by: Rebecca Jackson as part of Dev Academy Sprint 5 challenges

  User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.

User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.

User Story #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered.

User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

User Story #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).*/

document.addEventListener('DOMContentLoaded', runCalculator)

//global variables
//stores the input from the user
var input = "";
//string that stores current inputs
//var totalString;
// validation checks
var validationOp = ['+', '-', '/', '*'];
var validationDec = ['.'];
//numbers for validation
//var nums = [0,1,2,3,4,5,6,7,8,9];


function runCalculator(){
  input = "0";
}

// Event listeners
$('button').on('click', function(){
  if(input === '0'){
    input = '';
  }
 switch(this.id){
  case 'one':
    input = input + '1';
  break;
  case 'two':
    input = input + '2';
  break;
  case 'three':
    input = input + '3';
  break;
  case 'four':
   input = input + '4';
  break;
  case 'five':
    input = input + '5';
  break;
  case 'six':
    input = input + '6';
  break;
  case 'seven':
    input = input + '7';
  break;
  case 'eight':
    input = input + '8';
  break;
  case 'nine':
    input = input + '9';
  break;
  case 'zero':
    input = input + '0';
  break;
  case 'decimal':
    //validate decimal
    input = input + '.';
  break;
  case 'clearOne':
    input = input.slice(0, -1);
  break;
  case 'clearAll':
    input = '0';
  break;
  case 'add':
  //validate operators
    if(checkOperator(input) === true){
      return
    }else{
      input = input + '+';
    };
  break;
  case 'minus':
    if(checkOperator(this.id) === true){
      return
    }else{
      input = input + '-';
    };
  break;
  case 'divide':
    if(checkOperator(this.id) === false){
      input = input + '/';
    }else{
      return;
    };
  break;
  case 'multiply':
    if(checkOperator(this.id) === true){
      return
    }else{
      input = input + '*';
    };
  break;
  case 'equals':
    getTotal();
  break;
 }
update();
});

//if the operater passed in is the same as the previous operator then return
  // else update the display

function checkOperator(input){
//if the last element of totalstring is the same as the element passed in
  if(validationOp.includes(input[input.length-1]) === input){
    console.log('duplicate operator'); 
    return true;
  }else{
    return false;
  } 

}

function update(){
  $('#display').html(input);
}

function getTotal(){
  input = math.eval(input);
}
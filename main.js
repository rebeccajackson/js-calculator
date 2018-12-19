/*
  Javascript Calculator challenge
  Created by: Rebecca Jackson as part of Dev Academy Sprint 5 challenges
*/

document.addEventListener('DOMContentLoaded', setup())

//global variables
var input = ""; //stores the input from the user
var operators = ['+', '-', '/', '*']; //used to check duplicate operators

function setup(){
  input = '0';
}

//Keyboard event listeners
document.addEventListener("keydown", function(event) {
  console.log(event.which);
  // if(event.which == 48){
  //   input += 0;
  //   $("#display").text(input);
  // }
  if(input === '0'){
    input = '';
  }
 switch(event.which){
  case 49:
    input = input + '1';
  break;
  /*case 'two':
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
    appendZero();
  break;
  case 'decimal':
    appendDecimal();
  break;
  case 'clearOne':
    input = input.slice(0, -1);
  break;
  case 'clearAll':
    input = '0';
  break;
  case 'add':
    appendOperator('+'); 
  break;
  case 'minus':
    appendOperator('-');  
  break;
  case 'divide':
    appendOperator('/'); 
  break;
  case 'multiply':
    appendOperator('*'); 
  break;
  case 'equals':
    getTotal();
  break;*/
 }
update();
});
function processKeys(argument){
  if(input === '0'){
    input = '';
  }
 switch(argument){
  case 'one':
  case 48:
    input = input + '1';
  break;
 }
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
    appendZero();
  break;
  case 'decimal':
    appendDecimal();
  break;
  case 'clearOne':
    input = input.slice(0, -1);
  break;
  case 'clearAll':
    input = '0';
  break;
  case 'add':
    appendOperator('+'); 
  break;
  case 'minus':
    appendOperator('-');  
  break;
  case 'divide':
    appendOperator('/'); 
  break;
  case 'multiply':
    appendOperator('*'); 
  break;
  case 'equals':
    getTotal();
  break;
 }
update();
});

// Validation checks
function appendOperator(operator){
  if(operators.indexOf(input[input.length-1]) >=0 || input.length === 0){
    console.log('duplicate operator'); 
  }else{
    input = input + operator;
  } 
}

function appendDecimal(){
  var numbers = input.split(/[/*+-]/);
  console.log(numbers);
  if(numbers[numbers.length-1].includes('.')){
    console.log('duplicate decimal');
  } else {
    input = input + '.'; 
  }
}

function appendZero(){
  var numbers = input.split(/[/*+-]/);
  if(numbers[numbers.length-1]==='0'){
    console.log('Please add a decimal')
  } else {
    input = input + '0';
  } 
}

function update(){
  $('#display').html(input);
}

function getTotal(){
  input = math.eval(input);
}
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

//Event listeners
document.addEventListener("keydown", function(event) {
  processKeys(event.which, event.shiftKey);

});

$('button').on('click', function(){
  processKeys(this.id);
});

function processKeys(argument, shift){
  if(input === '0'){
    input = '';
  }
  console.log(argument);
  if(shift && argument === 187){
    argument = 'add'
  }
 switch(argument){
  case 'one':
  case 49:
  case 97:
    input = input + '1';
  break;
  case 'two':
  case 50:
  case 98:
    input = input + '2';
  break;
  case 'three':
  case 51:
  case 99:
    input = input + '3';
  break;
  case 'four':
  case 52:
  case 100:
    input = input + '4';
  break;
  case 'five':
  case 53:
  case 101:
    input = input + '5';
  break;
  case 'six':
  case 54:
  case 102:
    input = input + '6';
  break;
  case 'seven':
  case 55:
  case 97:
  case 103:
    input = input + '7';
  break;
  case 'eight':
  case 56:
  case 104:
    input = input + '8';
  break;
  case 'nine':
  case 56:
  case 105:
    input = input + '9';
  break;
  case 'zero':
  case 48:
  case 96:
    appendZero();
  break;
  case 'decimal':
  case 190:
  case 110:
    appendDecimal();
  break;
  case 'clearOne':
  case 8:
    input = input.slice(0, -1);
  break;
  case 'clearAll':
    input = '0';
  break;
  case 'add':
  case 107:
    appendOperator('+'); 
  break;
  case 'minus':
  case 109:
    appendOperator('-');  
  break;
  case 'divide':
  case 111:
    appendOperator('/'); 
  break;
  case 'multiply':
  case 112:
    appendOperator('*'); 
  break;
  case 'equals':
  case 187:
  case 13:
    getTotal();
  break;
  case 16:
  break;
  default:
    alert('Please press a valid key'); 
  }
  update();
}

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
  input = math.eval(input).toString();
}
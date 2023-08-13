//<!-- ============================================================================ -->//
//===============JAVASCRIPT FUNCTION MASTERCLASS=================//
//<!-- ============================================================================ -->//


//## what is function??
// Ans: In proggraming language, we need to create many functionality for make our application functionals. and some functionality we need to use multiple times. Suppose ! we have a application that will check people age to see abailablity for marraige. In this case we need to create a functionality that will check people age.

// example:
let name = "Kamal";
let age = 17;
let gender = "male";
let isAbleToMarraige;
if (gender === "male" && age >= 21) {
  isAbleToMarraige = true;
} else if (gender === "female" && age >= 18) {
  isAbleToMarraige = true;
} else {
  isAbleToMarraige = false;
}
console.log(isAbleToMarraige); //output : false

// -> now if we check 100 people age same as this ways, we need to write this code 100 timeS . That is horrible right ?
// we can make this task easy by making function and return this functionality. 

//example:
function marraigeAgeChecker(name, gender, age) {
  let isAbleToMarraige
  let msg
  if (gender === "male" && age >= 21) {
    isAbleToMarraige = true;
    msg = `Hi ${name} you are ready for Marraige`
  } else if (gender === "female" && age >= 18) {
    isAbleToMarraige = true;
    msg = `Hi ${name} you are ready for Marraige`
  } else {
    isAbleToMarraige = false;
    msg = `Hi ${name} you are not ready for Marraige`
  }
  return {
    isReady: isAbleToMarraige,
    resultMsg: msg,
  }
}
//now we can easily use this function for everyone just invoking the function
//example::
console.log(marraigeAgeChecker("Ripon", "male", 30).resultMsg);
//very very simple right ??
// this is the main fundamental concept for understanding functions

// Later part we will know details about functions and its types
/**
 * =========Javascript Functions Types =========
 * In JavaScript there are several types of functions avillable
 * 1.Function declaration
 * 2.Function Expression
 * 3.Arrow Function
 * 4.Curried Function
 * 5.Callback Function
 * 6.Closure Function
 * 7.Async Await Function
 * 8.Promise Function
 * 9.Constractor Function
 */

// WE WILL KNOW ALL THE FUNCTIONS BELOW

/**
 * 1.Function Declaration
 * defination: Function declaration is a first approch of javascript functional programming.its so much powerfull that it can be invoked before the function creation .
 * **In javascript, function declaration are hoisted. if you have a question , What does it mean by hoisted ? Answer: we will talk about hosting another day. now lets finished the function.
 */

//Function declaration Syntax:
// function creation
function myFunc() {
  console.log("hello world");
}
//function invocation
myFunc(); // output : hello world


/**
 * 2. Function Expression
 * Defination : function expression comes after Ecmascript 6. Its usage is same as function declaration. but it has little bit difference in its syntax. Function expressions is stored as value of a variable. thats why its called first class function as well.
 */

//Function Expression Syntax:
const myExpressFunc = function () {
  console.log("hello world , I am from function expression");
}
//invokation of function all are same except promise function
myExpressFunc(); //Output : hello world , I am from function expression



/**
 * Arrow Function Expression
 * Defination : Arrow function expression comes after Ecmascript 6. Its usage is same as function declaration. but it has little bit difference in its syntax. Arrow Function expressions is stored as value of a variable. thats why it also called first class function as well.
 */
//Arrow Function expression Syntax may vary depending on usecase

//normal useage
const myArrowFunc = () => {
  console.log("Hello world! I am from Arrow function expression");
}
//if have multiple parameters
const myArrowFunc2 = (username, age) => {
  console.log("Hello world! I am from Arrow function expression type 2");
};
//if have Single parameters
const myArrowFunc3 = username => {
  console.log("Hello world! I am from Arrow function expression type 3");
};
//Shorter from of Arrow function expression
const myArrowFunc4 = username => "Hello world! I am from Arrow function expression type 4"

// example usecase :
const myArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(myArr.find(item => item == "5"));

//invokation of function all are same except promise function
myArrowFunc(); //Output : Hello world! I am from Arrow function expression


/**
 * Curried Function
 * Defination : Curried function is a function that will return another function in its own function body. we can use this function as diclaration way and arrow function expression way as well. it will help us keep worflow chain synchronously. its can be called as Higher Order Function as well.
 */
//Example :
//Syntax of Curried Functions :
//Function declaration way :
function myCurriedFunction(task1) {
  console.log(`1st task ${task1} complete koro`);
  return function (task2) {
    console.log(`2nd task ${task2} complete koro`);
    return function (task3) {
      console.log(`3rd task ${task3} complete koro`);
    };
  }
}
//invocation of Curried Function
myCurriedFunction("Rise up from Bed")("Brush Your Teeth")("get ready and go to office");
//arrow function expression way :
const myCurriedFunction2 = (task1) => (task2) => (task3) => {
  console.log(`complete the task 1:  ${task1}`);
  console.log(`complete the task 2:  ${task2}`);
  console.log(`complete the task 3:  ${task3}`);
}
//invocation of Curried Function
myCurriedFunction2("Practice Previous Class Topic")("Make your Notes")("Implement to your Projects");
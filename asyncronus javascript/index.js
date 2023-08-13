//Curried Function

//callback function
//async await function
//promise function


/**
 * Curried function
 * Curried function is a function that will return another function into parent function, and its chain can be        multiple
 * its invocation system will be like : myfunction(value)(value)(value)
 */

// call as function declaration way
function myFunction(a) {
  return function (b) {
    return function (c) {

      return a + b + c;
    }
  }
}
//console.log(myFunction(10)(20)(30));

// call as arrow function way

const myFunctionArrow = (a) => (b) => (c) => {
  return a + b + c;
}
//console.log(myFunctionArrow(10)(20)(30));

//================================================================

/**
 * Callback function
 *  When we write asynchronous function there we used callback function as a parameter of the function and callback function will be called after the asynchronous functions process have finished
 * callback function always run after get result from async function and it is used as parameter of async function
 * example are given below:
 */

//setTimeout(function () {}, 10000);
//setTimeout(() => {}, 10000);
//setTimeout(callback, timeMs);

setTimeout(() => {
  console.log('Hello World');
}, 5000);

//another example 
setTimeout(mycallback, 4000);

function mycallback() {
  console.log("this is from callback");
}
//================================================================

//console.log("Hello World");
//console.log("Hello World2");
//setTimeout(() => {
//  console.log("Hello World4");
//}, 0)
//console.log("Hello World3");
//================================================================


/**
 * Promise constructor function
 * 
 */

const promise = new Promise((res, rej) => {

  return res("sabse pahle ghar par ao");

});
const promise2 = promise.then((res) => {
  console.log(res);
  return new Promise((res, rej) => {
    return res("gate khulo aur gate laaga0");
  });
})
const promise3 = promise2.then((res) => {
  console.log(res);
  return new Promise((res, rej) => {
    return res("khana pakao khana khaw");
  });
});
promise3.then((res) => {
  console.log(res);
  return new Promise((res, rej) => {
    console.log(res("Ghumao"));

  });
});



/**
 * async await function
 * comment-text:
 */




const myFunc = async () => {
  let txt = await "text"
  console.log(txt);
}

myFunc();
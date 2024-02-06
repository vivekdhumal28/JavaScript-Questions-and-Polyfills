// Call, Apply and Bind methid in javascript

// These are the explicit binding methods
// Call a function inside of an object,
// call method is avail for all functions in js
// call Args => 1st is (thisArgs)object rest are the indivisual params

var obj = { name: "Vivek" };

function sayHello(age) {
  return `Hello ${this.name} u r ${age}`;
}

console.log(sayHello.call(obj, 24));

// Apply
// This works same as the call
// Only diff is it takes argumnets as Object and Array([])

var obj1 = { name: "Vivek" };

function sayHello(age) {
  return `Hello ${this.name} u r ${age}`;
}

console.log(sayHello.apply(obj1, [24]));

// Bind
// Instead of calling fucntion immediately it returns us an object which we call later

var obj2 = { name: "Vivek" };

function sayHello(age) {
  return `Hello ${this.name} u r ${age}`;
}
const returnFunc = sayHello.bind(obj2);
console.log(returnFunc(25)); // [Function: bound sayHello]

// Polyfills of Call, Apply aand Bind
// WE want to invoke this function on this object

let object = {
  car: "BMW",
  color: "red",
};

function purchaseCar(curruncy, price) {
  console.log(
    `I have purchase ${this.color} color ${this.car} in ${curruncy} ${price}`
  );
}

// Polyfills of call

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this != "function") {
    throw new Error(this + " this is not a callable ");
  }
  context.fn = this;
  context.fn(...args);
};

//Polyfill of apply

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this != "function") {
    throw new Error(this + " this is not a callable ");
  }
  if (!Array.isArray(args)) {
    throw new Error("Argumnets are not an array");
  }
  context.fn = this;
  context.fn(...args);
};

// Polyfill for bind
// This will return a function which we called later

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this != "function") {
    throw new Error(this + " this is not a callable ");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const returnBind = purchaseCar.myBind(object, "$");
returnBind(800000);

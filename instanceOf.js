class Rabbit {}
let rabbit = new Rabbit();
console.log(rabbit instanceof Rabbit); //true
console.log(new Rabbit() instanceof Rabbit); //true

// constructor Way
function newPerson() {
	return 'hello';
}
function newGuy() {
	return 'Hola';
}

var john = new newPerson();

console.log(john instanceof newPerson); //true
console.log(john instanceof Object); //true
console.log(newPerson.prototype instanceof Object);

newPerson.prototype = {};
console.log(john instanceof newPerson); //false because newPerosn.prototype is no where in o's prototype chain anymore.

// String and Date objects are instanceof Object
let simpleStr = 'This is a simple string';
let myString = new String();
let newStr = new String('String created with constructor');
let myDate = new Date();
let myObj = {};
let myNonObj = Object.create(null);

console.log(simpleStr instanceof String); // returns false, string literal is not an object
console.log(myString instanceof String); // returns true
console.log(newStr instanceof String); // returns true
console.log(myString instanceof Object); // returns true

console.log(myObj instanceof Object); // returns true, every object literal has Object.prototype as prototype
console.log({} instanceof Object); // returns true, same case as above
console.log(myNonObj instanceof Object); // returns false, prototype is end of prototype chain (null)

console.log(myString instanceof Date); // returns false

console.log(myDate instanceof Date); // returns true
console.log(myDate instanceof Object); // returns true
console.log(myDate instanceof String); // returns false

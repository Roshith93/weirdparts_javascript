var person = {
	fName: 'roshith',
	lName: 'r',
	fullName() {
		return `${this.fName}  ${this.lName}`;
	}
};

var fullName = function(a, b) {
	return `${a} ${b}- ${this.fName}  ${this.lName}`;
};

console.log(fullName.call(person, 'Helllllo'));
// attach the function to the object and returns the result.

// apply will help to pass arguments as an array.

console.log(fullName.apply(person, [ 1, 2, 2 ]));

console.log(fullName.bind(person)('Hey', 'ther'));
// wraps the original function object.

// Function Borrowing
var person2 = {
	fName: 'John',
	lName: 'Doe'
};

console.log(person.fullName.call(person2));

// function currying

function addNumber(ab, c) {
	return ab + c;
}

let newVar = addNumber.bind(this, 2);
console.log(newVar(3));

function newVar(b) {
	var a = 2;
	return a * b;
}

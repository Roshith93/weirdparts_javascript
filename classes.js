// syntax
// class MyClass {
// class methods constructor() { ... }
// method1() { ... }
// method2() { ... }
// method3() { ... } ...
// }

class Person {
	constructor(fName, lName) {
		this.fName = fName;
		this.lName = lName;
	}
	fullName() {
		return `${this.fName} ${this.lName}`;
	}
}

var John = new Person('Roshi', 'R');
console.log(John.fullName());

// rewriting the class user in pure function
// 1.creating constructor function
function NewPerson(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}
// a function prototype has "constructor" property by default, so we dont need to create it
// 2.Adding a method to the prototype
NewPerson.prototype.greet = function() {
	console.log(this.firstName + this.lastName);
};
// Usage
var User = new NewPerson('Tom', 'Jerry');
User.newGreet = function() {
	console.log(this.firstName);
};

User.newGreet();

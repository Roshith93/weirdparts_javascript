function Person(firstName, lastName) {
	console.log(this); //Person {}
	this.firstName = firstName;
	this.lastName = lastName;
	console.log(this); //person {firstName: "Ro"}
}

var newPerson = new Person('John', 'doe');
var newPerson2 = new Person('James', 'Alies');
console.log(newPerson.firstName); //John

Person.prototype.getFullName = function() {
	return this.firstName + this.lastName;
};

console.log(newPerson.getFullName());

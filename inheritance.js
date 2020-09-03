var person = {
	firstName: 'Blank',
	secondName: 'Blank',
	fullName() {
		return this.firstName + this.lastName;
	}
};

var newPerson = {
	firstName: 'John',
	lastName: 'Doe'
};

// DON'T EVER DO THIS
newPerson.__proto__ = newPerson;

console.log(newPerson.fullName());

var person = {
	firstName: 'roshith',
	lastname: 'r',
	greet() {
		return `Hello ${this.firstName}`;
	}
};

// Inherited object
var john = Object.create(person);
console.log(john);

console.log(john.greet()); //Hello Roshith
john.firstName = 'Jonny';
console.log(john.firstName); //Jonny

var address = {
	newGreet: {}
};

address.greeting = 'Hello';

console.log(address);

// But We can do like this.

address.newGreet.greet = 'Hola';

console.log(address);

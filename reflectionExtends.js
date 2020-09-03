var obj = {
	firstName: 'Roh',
	lastName: 'R',
	getFullName() {
		return this.firstName + this.lastName;
	}
};

for (var key in obj) {
	console.log(`${key} : ${obj[key]}`);
}

// hasOwnProperty
var x = {
	y: 10
};
console.log(x.hasOwnProperty('y')); //true
console.log(x.hasOwnProperty('z')); //false

if (obj.hasOwnProperty('firstName')) {
	alert('Hola');
}
for (var newVar in obj) {
	if (obj.hasOwnProperty('lastName')) {
		console.log(`${newVar} - ${obj[newVar]}`);
	}
}

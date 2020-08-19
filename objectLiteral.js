var Tony = {
	firstName: 'Roshith',
	address: {
		street: '11',
		landmark: 'party office'
	}
};

function greet(person) {
	console.log(`Hi I am  ${person.firstName}`);
}

greet(Tony);

//  Also on the go we can pass oject, or any value into a function
greet({ firstName: 'ror' });

// We can add new property like this also. There are no litrelly no difference..
Tony.address.addressLine1 = 'Laka';
console.log(Tony.address.addressLine1);

var person = new Object();
// adding a primitive value
person['firstName'] = 'Tony'; //the object will get a reference to the address of the location in the memory. The operator is [...] computed member access
person['age'] = 26;

console.log(person.firstName); //member access operator
console.log(person['firstName']); //computed memory access operator

// adding a new object
person['address'] = new Object();
person.address.street = 'street 11 american junction';
person.address.landmark = 'Near party office';

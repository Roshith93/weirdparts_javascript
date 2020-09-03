Array.prototype.newTest = 'cool';

var a = [ 'red', 'orange', 'apple' ];
for (var key in a) {
	console.log(a[key]);
}

// enumerate only the objects own property
var a = [ 'red', 'orange', 'apple' ];
for (var key in a) {
	if (a.hasOwnProperty(key)) {
		console.log(a[key]);
	}
}

Array.prototype.last = function() {
	return this[this.length - 1];
};

for (var p in []) {
	// an empty array
	// last will be enumerated
	console.log(`p ${p}`);
}

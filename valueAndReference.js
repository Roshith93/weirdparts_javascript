// by value
var a = 3;
var b;
b = a;
//  here it knows that the value is primitive, so b will also be set into the memory.
// reference type

var x = {
	name: 'Roshith'
};

var y = x;
x.name = 'Rosh';
console.log(x); //Rosh
console.log(y); //Rosh

function changeGreet(par) {
	par.name = 'inside funcs';
}

changeGreet(x);
console.log(x); //inside funcs
console.log(y); //inside funcs

x = { name: 'roshithththththt' };
y = { name: 'RR' };
x = y;
console.log(x);
console.log(y);

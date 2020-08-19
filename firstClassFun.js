// function declaration and invocations
function saySomething(el) {
	console.log('Say somethig', el);
}

saySomething('dude');

// storing in a variable

var newSom = saySomething;
newSom('baby');

// Store in Data structure
var newarr = [ saySomething ];
newarr[0]('From array');

// Pass and argument to a function
// return from a function
function newFun(el) {
	return el;
}

var newVar = newFun(newSom);
newVar('i');

// own properties
newSom.a = 'Apple';
console.log(newSom.a);

// factory function
function makeGreeting(language) {
	return function(fn, ln) {
		if (language == 'en') {
			console.log(`Hello ${fn} ${ln}`);
		}
		if (language == 'es') {
			console.log(`Hola ${fn} ${ln}`);
		}
	};
}

var greetEnglish = makeGreeting('en'); // t
var greetSpanish = makeGreeting('es'); // d

// factory function

function createCircle(radius) {
	return {
		radius,
		draw() {
			console.log('draw');
		} //this is a new type of syntax. no need of key value pair thing.
	};
}
const circle1 = createCircle(2);
const circle2 = createCircle(24);
console.log(circle1);
console.log(circle2);

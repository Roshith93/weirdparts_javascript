function add(x) {
	return function(y) {
		return x + y;
	};
}

console.log(add(5)(2));

function newAdd() {
	let val = 'Hellllll';
	function disp() {
		alert(val);
	}
	return disp;
}

newAdd();

function greet(whattosay) {
	return function(name) {
		return `${whattosay} - ${name}`;
	};
}

let sayHi = greet('Hola');
sayHi('Rosh');

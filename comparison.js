console.log(1 < 2 < 3); // 1<2 == true, then true < 3. so when true converted to number its value is 1. finally its 1<3 which will be true .
console.log(3 < 2 < 1); // 3 < 2 === false.which converted it will be 0. finally 0<1 will be true

var a = true;
console.log(a == 1);

var abc = null;
console.log(Number(null)); //0
console.log(abc == 0); //false (weird)
console.log(abc < 1); // true

var ab = 0;
var b = false;
if (ab === b) {
	console.log('They are true');
} else {
	console.log('they are false');
}

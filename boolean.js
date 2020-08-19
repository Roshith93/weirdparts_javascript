var a;

if (a) {
	//a is undefined,and it convert to false.
	console.log('somethig');
}
a = 0; // here a shows it existence. but still it wont execute the if condition

if (a || a === 0) {
	// "===" have the higher precedence. so it will execute and the value wil be true. and a' value is false. `false || true  =  true`

	console.log('something');
}

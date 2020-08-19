// newFun();

// var newFun = function() {
// 	console.log('Hello');
// };

// newFun();

// function fun(and) {
// 	and();
// }

// fun(function() {
// 	console.log('Hello');
// });

// scenario 1
function foo() {
	function bar() {
		return 3;
	}
	return bar();
	function bar() {
		return 8;
	}
}
console.log(foo());

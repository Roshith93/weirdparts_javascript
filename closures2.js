// function looping() {
// 	var arr = [];

// 	for (var i = 0; i < 3; i++) {
// 		arr.push(function() {
// 			console.log(i);
// 		});
// 	}
// 	return arr;
// }
// console.log(looping());
// var abc = looping();
// abc[0](); //3
// abc[1](); //3
// abc[2](); //3

// let newArray = [
// 	function() {
// 		console.log(4);
// 	}
// ];
// newArray[0]();

function looping() {
	var arr = [];
	for (let i = 0; i < 3; i++) {
		// let j = i;
		arr.push(function() {
			console.log(i);
		});
	}
	return arr;
}
console.log(looping());
var abc = looping();
abc[0](); //0
abc[1](); //1
abc[2](); //2

function newFun() {
	var arr = [];
	for (var i = 0; i < 4; i++) {
		arr.push(
			(function(j) {
				return function() {
					console.log(j);
				};
			})(i)
		);
	}
	return arr;
}
const a = newFun();
a[0]();
a[1]();
a[2]();

// Can add new features into primitive values.
String.prototype.newFun = function() {
	return 1;
};

console.log('hello'.newFun());

Number.prototype.double = function(num) {
	return num * 2;
};
var a = new Number(2);
console.log(a.double());

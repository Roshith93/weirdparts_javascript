// function foo(){
//     console.log('foo');
// }

// function bar(){
//     console.log('bar');
// }

// var myFn = foo;

// myFn();

// setInterval(function(){
//     if(myFn === foo) myFn = bar;
//     else myFn = foo;
// }, 5000);

// setInterval(function(){
//     myFn()
// }, 6000);

// Gurard clause

function addNumbers(firstNum, secondNum) {
	if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) return parseInt(firstNum) + parseInt(secondNum);
	return parseInt(firstNum) + parseInt(secondNum);
}

const abc = addNumbers(1, '22w');

console.log(abc);

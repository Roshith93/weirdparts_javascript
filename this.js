// Method => inside object
// function  -> global(window, global)

// let user = {
// 	name: 'Ro',
// 	fullName: function() {
// 		function abc() {
// 			console.log(this); //here we are declaring a function which is a part of global object . so this refer to global/window..
// 		}
// 		abc();
// 		console.log(this);
// 	}
// };
// user.fullName();

function greet() {
	console.log(this);
	this.name = 'Jell';
}
greet();

console.log(name);

function checkType(val) {
	if (typeof val == 'string') {
		console.log('Yo!! this is string');
	} else {
		console.log('Oh no!! this is Not string');
	}
}

checkType(1); // Oh no!! this is Not string
checkType('dhs'); //Yo!! this is string


//check the operator is undefined 

function(x){
    if (typeof(x) === 'undefined') {
      console.log('variable x is not defined');
      return;
    }
    // continue with function here...
  }

//   While using number it can turn into NAN which's type is also number

var x = 1;
var y = { number: 2 };
console.log(x * y); // NaN
console.log(typeof (x * y)); // number

function b(){
    console.log(myVar)
}
function a(){
    var myVar = 1
    b()
}

var myVar = 2;
a()

// scenario 2

// function a(){
//     var myVar = 1
//     function b(){
//         console.log(myVar)
//     }
//     b()
// }

// var myVar = 2;
// a()

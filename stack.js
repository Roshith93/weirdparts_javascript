// function third(){
    // throw new Error("Error throwing")
// }
// function second(){
//     third()
// }

// function first(){
//     second()
// }

// first()

// Maximum call stack exceed
function foo(){
    foo()
}
foo()
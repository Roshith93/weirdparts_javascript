var a = "hello world";
// var c;

function func() {
    console.log("its b")
}

console.log(a)
func()

function hoist() {
    num = 20;
    var b = 100;
}

hoist();

console.log({
    num
}); //Output: 20
// console.log(c) //Output: ReferenceError: b is not defined

console.log({
    test
})

test = "Hello world"
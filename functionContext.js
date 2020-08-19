function b() {
    console.log("---bbefore",myVar) //undefined
    var myVar;
    console.log("---bafter",myVar) //undefined
}

function a() {
    console.log("---abefore", myVar)// undefined
    var myVar = 2;
    console.log("---aafter", myVar) // 2
    b();
}

var myVar = 1;
a();

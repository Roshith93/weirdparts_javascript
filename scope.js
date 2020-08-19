// Local Scope

//global scope
function foo1(){
    //local scope 1
    function foo2(){
        //local scope 2
    }
}

//global scope
function foo3(){
    //local scope 3
}

//global scope


// functional scope

function foo(){
    var fruit ='apple';
    console.log('inside function: ',fruit);
}

foo();                    //inside function: apple
console.log(fruit);  //error: fruit is not defined 

// Block Scope

function blockScope() {
    if(1 === true){
        var two = "orange" // functional scope
        const one = "apple" //blockScope
        let three = "mangao" //block scope
    }
    console.log(one)
    console.log(two)
    console.log(three)
}
// Lexical Scope Management
function foo1(){
    var fruit1 = 'apple';        
    const fruit2 = 'banana';     
    let fruit3 = 'strawberry';
    function foo2(){
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
    foo2();
}

foo1();

//result:
//apple
//banana
//strawberry
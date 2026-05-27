// testing


// three ways to define a variable
const x = 1         // const does not define a variable but a constant. value can no longer be changed
let y = 5       // let defines a normal variable
var z = 10      //

console.log(x, y)

y += 10
console.log(x, y)

y = 'sometext'
console.log(x, y)

x = 4



// VAR vs LET vs CONST

//      VAR
for(var i = 0; i < 10; i++) {
    console.log(i)      // prints values 0-9
}
console.log(i) // prints out 10

// i is still valid outside the for loop - scope of i not bound by curly braces

function add () {
    for(var i = 0; i < 10; i++)
    {
        console.log(i)
    }
    console.log(i)
}
add()
// this function works the same way 
// var and variables in es5 have scopes in functions -> variables are valid within the function and not outside.


function printing () {
    for(var i = 0; i < 10; i++) {
        console.log(i)
    }
}
printing()
console.log(i)
// prints 0-9, however an error occurs because i is undefined -> outside the scope of the function


// immediately invoked function expression
(function () {
    for(var i = 0; i < 10; i++) {
        console.log(i)
    }
})()


//      LET
// scoped in the braces {}
for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log(i)      // error -> i not defined


//      CONST
var i 
i = 34
for(let i = 0; i < 4; i++) {
    console.log(i)
}
console.log(i)


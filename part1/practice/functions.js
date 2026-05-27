// arrow functions

const sum = (x, y) => {
    console.log(x)
    console.log(y)
    return x + y
}

//const result = sum(1, 5)
//console.log(result)


// if there is a single parameter, we can exclude the parentheses 

const square = p => {
    //console.log(p)
    return p * p
}

// const result = square(6)
// console.log(result)

// if the function contains a single expression then the braces are not needed

const square2 = p => p * p
const t = [1, 2, 3]
const tSquared = t.map(p => p * p)



// can also use the keyword function

function product(a, b) {
    return a * b
}

//const result = product(2, 6)
//console.log(result)


// also function expression

const average = function(a, b) {
    return (a + b) / 2
}

const result = average(2, 5)
console.log(result)
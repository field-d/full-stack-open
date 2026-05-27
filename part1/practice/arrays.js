/*
const t = [1, -1, 3]

t.push(5) // append
console.log(t)

console.log(t.length)
console.log(t[1])

t.forEach(value => {            // forEach calls the function for each of the itme sin the array
    console.log(value)
})
*/ 


// in React, Functional Programming Paradigms are used. 
// ie Immutable Data Structures

// for example, its preferred in this above example to use concat. 

/*
const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)
console.log(t2)


const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)

// map creates a new array, for which the function gives as a param is used to create the items

const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)
console.log(rest)

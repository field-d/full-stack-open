// different ways of defining objects in JS
// object literals

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PHD',
}

const object2 = {
    name: 'Full Stack Web Dev App',
    level: 'Intermediate',
    size: 5,
}

const object3 = {
    name: {
        first: 'David',
        last: 'Field',
    },
    grades: [2, 3, 5, 3],
    department: 'UCC',
}

// values of the properties can be of any type
// properties of an object are referenced ysing the DOT NOTATION, or by using brackets

// console.log(object1.name)

const fieldName = 'age'
 // console.log(object1[fieldName])


// possible to add properties on the fly by using dot notation or brackets

object1.address = 'Cork'
object1['secret number'] = 12341
const age = 10
const a = age > 18
const b = age < 20

// AND
console.log(a && b)

// OR
console.log(a || b)

// NOT
console.log(!a)
console.log(!b)

// -----------------------------------------------

const htmlPassed = false
const cssPassed = true
let message = ''

if (htmlPassed && cssPassed) {
    message = "You can start Bootstrap"
} else if (htmlPassed || cssPassed) {
    message = "Please, finish the second course"
} else {
    message = "Please, firstly, you have to finish our two courses"
}

console.log(message)
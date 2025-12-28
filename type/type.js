/* Type conversion */
// Number
const age = "23"
console.log(age)
console.log(Number(age))

console.log(age + 1) //concatenation
console.log(Number(age) + 1)

const name = "Asilbek"
console.log(Number(name)) //NaN

//String
const year = 2021
console.log(year)
console.log(String(year))

/* Type coercion */
// Auto string conversion
console.log("I was born " + 2006)

// Auto number conversion
console.log('30' - '20' + 5)

/* Truthy and falsy */
// Falsy
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(0n))

// Truthy
console.log(Boolean("Asilbek"))
console.log(Boolean(20))
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean('0'))
console.log(Boolean('false'))


// Example
const userName = ''
if (userName) {
    console.log(`Your name ${userName}`)
} else {
    console.log("Please, enter your name")

}







const { createHash } = require('crypto')

// Create a striing hash

function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

let password = 'hi-mom!'
const hash1 = hash(password)
console.log(hash1)


let password1 = 'hi-mom!'
const hash2 = hash(password1)
const match = hash1 === hash2
console.log(hash2)

console.log(match ? 'good password' : 'password does not match');
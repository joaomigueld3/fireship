const { scryptSync, randomBytes } = require('crypto');

function signup(email, password) {
    const salt = randomBytes(16).toString('hex')
    const hashedPassword = scryptSync(password, salt, 64).toString('hex')

    const user = { email, password: `${salt}: ${password}` }

    users.push(user)

    return user
}

function login(email, password) {
    const user = users.find(v => v.email === email);

    const [ salt, key ] = user.password.split(':')
}
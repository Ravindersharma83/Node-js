const register = function(username) {
    console.log(`User ${username} is successfully registered...`);
}

const login = function(username, password) {
    console.log(`User ${username} is successfully logged in...`);
}

// exporting this module file
// module.exports = register;

// exporting multiple module functions
module.exports = {
    register,
    login
}
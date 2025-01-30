// NPM Module
const color = require('cli-color');
// console.log(color.blue('This text is display in blue color'));

// LOCAL Module (Single)
// const registerUser = require("./auth");
// registerUser('Ravinder');

// LOCAL Module (Multiple)
const auth = require("./auth");

// auth.register("Nik");
// auth.login("Ravinder", "secretPassword");



// CORE Modules
const path = require("path");

console.log('path---',path);
console.log('filename---',__filename);

// Directory name
console.log('Folder Name---',path.dirname(__filename));

// File name
console.log('File Name---',path.basename(__filename));

// Extension
console.log('Extension---',path.extname(__filename));

// Parse (returning object that combines the above three keys value)
console.log('Parse object---',path.parse(__filename));

// Join (imp)
console.log('Join---',path.join(__dirname, 'order', 'app.js'));
// join directory name to order folder and getting app.js file from it.




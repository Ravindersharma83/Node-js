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

// console.log('path---',path);
// console.log('filename---',__filename);

// Directory name
// console.log('Folder Name---',path.dirname(__filename));

// File name
// console.log('File Name---',path.basename(__filename));

// Extension
// console.log('Extension---',path.extname(__filename));

// Parse (returning object that combines the above three keys value)
// console.log('Parse object---',path.parse(__filename));

// Join (imp)
// console.log('Join---',path.join(__dirname, 'order', 'app.js'));
// join directory name to order folder and getting app.js file from it.





// FILE System Module
const fs = require('fs');

// Make a directory
// mkdir contains 2 parameters 
// 1- path (where we want to create a new directory)
// 2- a callback function

// fs.mkdir(path.join(__dirname, '/test'), (err) => {
//     if(err) {
//         console.log('Something went wrong while creating a folder...',err);
//         return;
//     }
//     console.log('Folder created...');
    
// })

// Create a file
// writeFile contains 3 parameters
// 1- path (where we want to create a new file)
// 2- file content inside file what we want to show
// 3- a callback function

// fs.writeFile(path.join(__dirname, 'test', 'test.txt'), 'Hello Node Js.', (err)=> {
//     if(err) {
//         console.log('Something went wrong while creating a file...',err);
//         return;
//     }
//     // add or append more data to the file
//     fs.appendFile(path.join(__dirname, 'test', 'test.txt'), ' We are adding more data to the existing one. ', (err)=> {
//         if(err) {
//             console.log('Something went wrong while updating a file...',err);
//             return;
//         }
//         console.log('File updated...');
//     })
//     console.log('File created...');
// })

// Read a file
// fs.readFile(path.join(__dirname, "test", "test.txt"), (err, data) => {
//     if(err) {
//         throw err;
//         return;
//     }
//     // by default data display Buffer data . to encrypt it to Readable UTF fromat we have to parse this data
//     const originalData = Buffer.from(data);
//     console.log('original data---',originalData.toString());
    
// })

// we can use utf-8 parameter to directly parse the buffer data
// fs.readFile(path.join(__dirname, "test", "test.txt"), 'utf-8', (err, data) => {
//     if(err) {
//         throw err;
//         return;
//     }
//     console.log('data---',data);
    
// })


// OS Module
const os = require("os");

// console.log('Os type---',os.type());
// console.log('Os platform---',os.platform());
// console.log('Os CPU Architecture---',os.arch());
// console.log('Os CPU Details---',os.cpus());
console.log('Total Memory---',os.totalmem());
console.log('Free Memory---',os.freemem());
































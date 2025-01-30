// HTTP Module
const http = require("http");
const fs = require("fs");
const path = require("path");

// create a server
const app = http.createServer((req, res) => {
    console.log(req.url);
    
    // res.end("Welcome to Node");
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
            if(err) {
                throw err;
            }
            res.end(content)
        })
    } else if(req.url === '/about') {
        fs.readFile(path.join(__dirname, "public", "about.html"), (err, content) => {
            if(err) {
                throw err;
            }
            res.end(content)
        })
    }
})


// starting a server on a particular port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
    
})


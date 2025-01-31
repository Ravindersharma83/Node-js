const express = require("express");
const path = require("path");

const apiKeyMiddleware = require("./middleware/apiKey");
const expressRouter = require("./router/index");

const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname,'public') + '/index.html');
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.resolve(__dirname,'public') + '/about.html');
// })

// Static routing using static express middleware
// app.use(express.static('public'));



// 3. Global middleware for all routes
app.use(apiKeyMiddleware);
// Express router
app.use(expressRouter);



app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});
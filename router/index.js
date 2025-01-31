const router = require("express").Router();
const path = require("path");

// const apiKeyMiddleware = require("../middleware/apiKey");

// 2. router level middleware
// router.use(apiKeyMiddleware);

router.get('/', (req, res) => {
    res.sendFile(path.resolve('/home/baltech/Ravinder/Learning/Node/NodeJs/public/index.html'));
})

router.get('/about', (req, res) => {
    res.sendFile('/home/baltech/Ravinder/Learning/Node/NodeJs/public/about.html');
})

router.get('/api/products', (req, res) => {
    res.json([
        {id: '123', product: 'Shirts'},
        {id: '321', product: 'T-shirts'},
        {id: '231', product: 'Jackets'}
    ])
})


// 1. route based middleware
// router.get('/api/products', apiKeyMiddleware, (req, res) => {
//     res.json([
//         {id: '123', product: 'Shirts'},
//         {id: '321', product: 'T-shirts'},
//         {id: '231', product: 'Jackets'}
//     ])
// })

module.exports = router;
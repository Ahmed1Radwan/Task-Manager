var express = require('express');
const { route } = require('.');
var router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
})
router.get('/', (req, res) => {
  
    res.send("Birds Home page");
})
router.get('/about', (req, res) =>{
    res.send('About birds');
})

module.exports = router
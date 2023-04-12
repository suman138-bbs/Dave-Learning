const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname,'..','views','index.html'))
})

 router.get('/tset', (req, res) => {
    res.sendFile(path.join(__dirname,'..','views','test.html'))
})


module.exports = router;
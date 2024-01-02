const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res) => {
    res.render('./views/index');
    //res.sendFile(path.join(__dirname, '..', '..', 'client', 'views', 'index.html'));
});




module.exports = router;
// GET home page.
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.redirect('/catalog');
});
module.exports = router;
// express.use(express.router); 
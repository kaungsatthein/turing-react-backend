const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

router.get("/some", function (req, res) {
    res.json({title: 'some'})
})


module.exports = router;

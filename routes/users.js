var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

    let user = {
        name: "Mg Mg",
        age: 20
    }
    res.json(user);
});


module.exports = router;

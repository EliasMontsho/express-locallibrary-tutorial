var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.send("This is a mine safty application");
});

module.exports = router;

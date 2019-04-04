var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      id: 1,
      name: "Alex"
    },
    {
      id: 2,
      name: "Yuseff"
    },
    {
      id: 3,
      name: "Mike"
    }
  ]);
});

module.exports = router;

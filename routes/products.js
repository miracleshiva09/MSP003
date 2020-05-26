var express = require('express');
//const db = require('../db');

var router = express.Router();

// /* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({message: 'I am Users View'});
});

// router.get('/', async(req, res, next) => {
//   try {
//       let results = await db.all();
//       //res.json(results);
//       res.send(results);
//   } catch(e) {
//       console.log(e);
//       res.sendStatus(500);
//   }

// });

module.exports = router;

const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log("cam here")
  res.sendFile(path.join(rootDir,'views', 'contact.html'));
})

// router.post('/', (req, res, next) => {
//   console.log(req.body);
//   // res.send('Hello from post')
//   res.redirect('/success');
// });

module.exports = router;
const express = require('express');
const path = require('path');

const router = express.Router();
const controller = require("../controllers/controller.js");

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/books', controller.getBook);

module.exports = router;

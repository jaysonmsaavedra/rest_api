var express = require('express');
var router = express.Router();

const db = require('../queries')

/* GET home page. */
router.get('/api/personal', db.getAllInfo)
router.get('/api/experience', db.getExperience)

module.exports = router;

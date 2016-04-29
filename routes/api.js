'use strict';

var express = require('express');
var router = express.Router();

router.use('/transacts', require('./transacts'));

module.exports = router;

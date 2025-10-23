const express = require('express');

const Problemrouter= require('./Problem.routes');

const v1router = express.Router();;

v1router.use('/problems', Problemrouter);

module.exports = v1router;

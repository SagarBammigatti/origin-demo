const express = require('express');
const {getTrueClientIp} = require('../controllers/getTrueClientIpController');

const router = express.Router();

router.get('', getTrueClientIp);



module.exports = {
    routes: router
}
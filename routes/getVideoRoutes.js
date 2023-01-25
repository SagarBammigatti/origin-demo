const express = require('express');
const {getVideo} = require('../controllers/getVideoController');

const router = express.Router();

router.get('', getVideo);



module.exports = {
    routes: router
}
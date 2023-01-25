const express = require('express');
const {getImages} = require('../controllers/getImagesController');

const router = express.Router();

router.get('', getImages);



module.exports = {
    routes: router
}
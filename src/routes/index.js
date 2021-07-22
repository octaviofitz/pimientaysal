var express = require('express');
var router = express.Router();

const {index} = require('../controllers/mainController')
const {detail} = require('../controllers/mainController')


/* GET home page. */
router.get('/',index)
router.get('/detail', detail)

module.exports = router;

const express = require("express");
const router = express.Router();
const customeController = require('../controllers/customeController');




router.get('/custom',customeController.cutomeControllerExample);

module.exports = router;
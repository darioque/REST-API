
const express = require("express");

const router = express.Router();

const postsController = require('../controllers/postsController')

router.get('/countries', postsController.countries)

module.exports = router;

const express = require('express');
const appController = require('../controllers/app');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', appController.getIndex);

module.exports = router;

const express = require('express');
const router = express.Router();

const actionController = require('../controllers/actions_controller');

router.get('/', actionController.comments);

module.exports = router;
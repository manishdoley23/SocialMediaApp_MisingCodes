const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts_controller');

router.get('/likes', postsController.likes);

module.exports = router;
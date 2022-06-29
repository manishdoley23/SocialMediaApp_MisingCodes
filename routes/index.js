const express = require('express');

const router = express.Router();

//Controller:- home_controller
const homeController = require('../controllers/home_controller');

console.log("router loaded");


router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/actions', require('./actions'));

/* 
for any further routes, access from here in the following way
router.use('/routerName', require('./routerFile));
*/

module.exports = router;
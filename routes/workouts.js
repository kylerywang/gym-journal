var express = require('express');
var router = express.Router();
var workoutsCtrl = require('../controllers/workouts');
// const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', workoutsCtrl.index);


module.exports = router;

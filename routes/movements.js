const express = require('express');
const router = express.Router();
const movementsCtrl = require('../controllers/movements');
const ensureLoggedIn = require('../config/ensureLoggedIn')

// This router is mounted to a "starts with" path of '/'

// GET /performers/new
router.get('/movements/new', movementsCtrl.new);
// POST /performers
router.post('/movements', movementsCtrl.create);


module.exports = router;
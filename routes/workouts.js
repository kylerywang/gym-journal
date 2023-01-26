var express = require('express');
var router = express.Router();
var workoutsCtrl = require('../controllers/workouts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, workoutsCtrl.index);
router.get('/new', ensureLoggedIn, workoutsCtrl.new)
router.get('/:id', ensureLoggedIn, workoutsCtrl.show)
router.delete('/:id', ensureLoggedIn, workoutsCtrl.delete)
router.delete('/:id/exercises/:exerciseid', ensureLoggedIn, workoutsCtrl.deleteExercise)
router.post('/:id/exercises', ensureLoggedIn, workoutsCtrl.addExercise)
router.post('/:id/note', workoutsCtrl.addNote)
router.post('/', ensureLoggedIn, workoutsCtrl.create)

module.exports = router;

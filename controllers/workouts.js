const Workout = require("../models/workout")
const Movement = require("../models/movement")

module.exports = {
    index,
    show,
    new: newWorkout,
    create,
    delete: deleteWorkout,
    deleteExercise,
    addExercise,
}

async function index(req,res){
    try {
        const workouts = await Workout.find({ user: req.user.id }).lean();
        console.log(workouts)
        res.render("/workouts/index", {title: "All Workouts", workouts})
      } catch (err) {
        console.error("Error: " + err);
        res.render("error");
      } 
}

function show(req,res){
    Workout.findById(req.params.id, function (err, workout){
        res.render("workouts/show", { title: workout.name, workout});
    })
}

async function deleteWorkout(req,res,next){
    Workout.findOneAndDelete({_id: req.params.id}, req.body, function(err,workout){
        res.redirect("/workouts")
    })
}

function newWorkout(req,res){
    res.render("workouts/new",{title:"Add Workout"})
}

function create(req,res){
    const workout = new Workout(req.body);
    workout.user = req.user._id;
    workout.userName = req.user.name;
    workout.userAvatar = req.user.avatar;
    workout.save(function(err){
        if (err) return res.redirect("/workouts/new");
        console.log(workout)
        res.redirect(`/workouts/${workout._id}`) //later, redirect to ID-specific page
    })
}

function addExercise(req, res){
    Workout.findById(req.params.id, function (err, workout){
        workout.exercises.push(req.body)
        workout.save(function(err){
            res.redirect(`/workouts`)
        })
        
    })
    
}

async function deleteExercise(req,res,next){
    try {
        const workout = await Workout.findOne({'_id': req.params.id})
        if (!workout) return res.redirect('/workout')
        workout.exercises.remove(req.params.exerciseid)
        await workout.save()
        res.redirect(`/workouts/${workout._id}`)
    } catch(err) {
        return next(err)
    }
}
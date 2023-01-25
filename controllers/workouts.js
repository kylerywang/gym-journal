const Workout = require("../models/workout")
const Movement = require("../models/movement")

module.exports = {
    index,
    show,
    new: newWorkout,
    create,
}

function index(req,res){
    Workout.find({},function(err, workouts){
        res.render("workouts/index", {title: "All Workouts", workouts})
    })
}

function show(req,res){
    Workout.findById(req.params.id, function (err, workout){
        console.log(workout)
        res.render("workouts/show", { title: workout.name, workout});
    })
    
    

}

function newWorkout(req,res){
    res.render("workouts/new",{title:"Add Workout"})
}

function create(req,res){
    const workout = new Workout(req.body);
    workout.save(function(err){
        if (err) return res.redirect("/workouts/new");
        console.log(workout)
        res.redirect('/workouts') //later, redirect to ID-specific page
    })
}
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

}

function newWorkout(req,res){

}

function create(req,res){

}
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    numSets: {
        type: Number
    },
    numReps:{
        type: Number
    },
    weight:{
        type: Number
        //later, change to weight or time.
    }
},{
    timestamps: true
})


const workoutSchema = new Schema({
    name: {
        type: String,
        //later, make the default "[date] Workout"
    },
    exercises: [exerciseSchema],
    notes:{
        type: String,
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema)
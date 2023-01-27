const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exerciseName: {
        type:String
    },
    numSets: {
        type: Number
    },
    numReps:{
        type: Number
    },
    weight:{
        type: Number
    },
    }, {
        timestamps: true
    })


const workoutSchema = new Schema({
    name: {
        type: String,
        //later, make the default "[date] Workout"
    },
    exercises: [exerciseSchema],
    note:{
        type: String,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    userName: String,
    userAvatar: String,
    createdDate: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema)
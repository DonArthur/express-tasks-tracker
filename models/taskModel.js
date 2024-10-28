const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    taskName: {
        type: String,
        required: [true, 'Title is required'],
        minLength: [3, 'Minimum 3 characters'],
        trim: true,
    },
    frequency: {
        type: String,
        required: [true, 'Select either daily or weekly'],
    },
    completedDates: {
        type: Array,
    },
}, {
    timestamps: true,
})
const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be empty']
    },
    description: {
        type: String,
        required: [true, 'Description cannot be empty']
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: [true, 'Difficulty level is required'],
        default: 'easy'
    },
    testCases: {
        type: [
            {
                input: { type: String, required: true },
                output: { type: String, required: true }
            }
        ],
        validate: {
            validator: function (v) {
                return v.length > 0;
            },
            message: 'At least one testcase is required'
        }
    },
    editorial: {
        type: String
    }
});

module.exports = mongoose.model('Problem', ProblemSchema);

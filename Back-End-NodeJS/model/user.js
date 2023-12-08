const mongoose = require('mongoose');
const { Schema }  = mongoose

const userSchema = new Schema({
    img: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true,
        unique: true
    },
    password : {
        type: String,
        require: true
    },
    analysisCount : {
        type: Number,
        require: false
    },
    savedAnalysis : {
        type: Number,
        require: false
    },
    totalAnalysis : {
        type: Number,
        require: false
    }
}, {
    timestamps: true
})

const User = mongoose.model("User",userSchema)

module.exports = User
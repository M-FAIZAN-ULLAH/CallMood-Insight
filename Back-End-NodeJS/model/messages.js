const mongoose = require('mongoose');
const { Schema }  = mongoose

const messageSchema = new Schema({
    owner: {
        type: String,
        require: true
    },
    message : {
        type: String,
        require: true
    },
    response: {
        type: Boolean,
        default: false
    },
    reply: {
        type: String,
        require: false
    }
}, {
    timestamps: true
})

const Message = mongoose.model("Messages",messageSchema)

module.exports = Message
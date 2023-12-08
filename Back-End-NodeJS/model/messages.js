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
    }
}, {
    timestamps: true
})

const Message = mongoose.model("Messages",messageSchema)

module.exports = Message
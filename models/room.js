const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: { type: String, required: true, lowercase: true },
    topic: { type: String, required: true, lowercase: true },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    messages: [{ type: String }],
    created_at: Date,
    updated_at: { type: Date, default: Date.now }
})

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
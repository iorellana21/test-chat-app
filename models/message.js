const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema ({
    room: [{
        type: Schema.Types.ObjectId,
        ref:'Room',
    }],
    user:[{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    message_body: String,
    message_status:{type: Boolean, default: false},
    created_at: { type: Date, default: Date.now },
})
const Message = new Message = mongoose.model("Message", messageSchema);
module.exports = Message;



const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    userId: { 
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: "User" 
    },
    token: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        required: true, 
        default: Date.now,
        expires: 43200 // this is the duration of the token, in seconds
    }
});
tokenSchema.methods.isExpired = function() {
    const now = new Date();
    // 43200 seconds is 12 hours. Convert it to milliseconds for JavaScript Date object.
    const expirationDate = new Date(this.createdAt.getTime() + 43200 * 1000);
    return now > expirationDate;
};

module.exports = mongoose.model("Token", tokenSchema);
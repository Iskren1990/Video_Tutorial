const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        default: Date.now,
        required: true,
    },
    isPublic: {
        type: Boolean,
        default:false,
    },
    owner: {
        type: "ObjectId",
        ref: "User"
    },
    enrolled: [{
        type: "ObjectId",
        ref: "User"
    }]
});

module.exports = mongoose.model("Courses", coursesSchema);
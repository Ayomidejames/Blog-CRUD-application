const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: 'Anonymous'
    },
    createdAt: {
        type: Date,
        required: Date.now
    }
    }
);

const blog = mongoose.model('Blog', blogSchema)
module.exports = blog
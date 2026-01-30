const express = require('express')
const blogController = require('../controllers/blogController')
const { createBlog, getPost, onePost, updatePost, deletePost } = require('../Controllers/blogController')
const blogRouter = express.Router()
// post request
blogRouter.post('/post', createBlog)

//get request
blogRouter.get('/getpost', getPost)

//get one post
blogRouter.get('/getpost', onePost)

// put request
blogRouter.get('/updatepost', updatePost)

// delete request
blogRouter.get('/deletepost', deletePost)

module.exports = blogRouter
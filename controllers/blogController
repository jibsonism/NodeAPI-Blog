const Blog = require('../blog');
const asyncHandler = require('express-async-handler')

const getBlogs = asyncHandler(async (req, res) => {
    try {
        const blogs = await Blog.find().sort({createdAt: -1})
        res.status(200).json(blogs)
        
    } catch (error) {
        res.status(500)
        throw new Error(error.message);
    }
})

const getBlog = asyncHandler(async (req, res) => {
    
    try {
        const blog = await Blog.findById(req.params.id)
        res.status(200).json(blog)
    } catch (error) {
        res.status(500)
        throw new Error(error.message);
    }
})

const createBlog = asyncHandler(async (req, res) => {
    try {
        const blog = await Blog.create(req.body)
        res.status(200).json(blog);
    } catch (error) {
        res.status(500)
        throw new Error(error.message);
    }

})


const updateBlog = asyncHandler(async (req, res) => {
    try {
        blog = await Blog.findByIdAndUpdate(req.params.id, req.body);
        if (!blog) {
            res.status(404)
            throw new Error(`Blog not found ${req.params.id}`);
        }
        const updatedblog = await Blog.findById(req.params.id);
        res.status(200).json(updatedblog);

    } catch (error) {
        res.status(500)
        throw new Error(error.message);
    }
})

const deleteBlog = asyncHandler(async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id)
        if (!blog) {
            res.status(404)
            throw new Error(`Blog not found ${req.params.id}`);
            // res.status(404).json({ message: 'Blog not found'})
        }
        res.status(200).json(blog)
    } catch (error) {
        res.status(500)
        throw new Error(error.message);
    }
})

module.exports = {
    getBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog,
}
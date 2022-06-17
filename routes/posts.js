const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')

//create new post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body)

  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

//update post
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        )
        res.status(200).json(updatedPost)
      } catch (error) {
        res.status(500).json(error.message)
      }
    } else {
      res.status(401).json('You can only update your post')
    }
  } catch (error) {
    res.status(500).json(error.message)
  }
})

//delete post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    if (post.username === req.body.username) {
      try {
        await post.delete()
        res.status(200).json('Post deleted successfully')
      } catch (error) {
        res.status(500).json(error.message)
      }
    } else {
      res.status(401).json('You can only delete your post')
    }
  } catch (error) {
    res.status(500).json(error.message)
  }
})

//get post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

//get all post
router.get('/', async (req, res) => {
  const username = req.query.user
  const categoryName = req.query.cat
  try {
    let posts
    if (username) {
      posts = await Post.find({ username })
    } else if (categoryName) {
      posts = await Post.find({
        categories: {
          $in: [categoryName],
        },
      })
    } else {
      posts = await Post.find()
    }
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

module.exports = router

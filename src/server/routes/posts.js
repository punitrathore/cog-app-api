var express = require('express')

var router = express.Router()
var posts = require('../../database/posts');

router.get('/posts', function(req, res) {
  console.log('posts::', posts)
  posts.all()
  .then( allPosts => {
    console.log('allPosts::', allPosts)
    res.json(allPosts)
  })
});

router.get('/posts/:id', function(req, res) {
  console.log('req.params::', req.params, req.query, req.body);
  const id = req.params.id
  posts.find(id)
  .then(post => {
    res.json(post)
  })
  .catch(err => {
    res.status(404)
    res.json({error: `Could not find post with id: ${id}`})
  });
})

router.post('/posts', function(req, res, next) {
  //create a new post
  console.log('req.body:', req.body);
  console.log('req.params:', req.params);
  const body = req.body.body
  if(!body) {
    res.json({error: 'Error: Could not create post without a body'})
  } else {
    posts.create(body)
      .then(() => {
        res.json({message: `Created the post successfully`})
      })
      .catch(err => {
        res.json({error: 'Error: Could not create post'})
      })
  }
});

router.get('/api/comments');

module.exports = router

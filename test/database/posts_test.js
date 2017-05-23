var expect = require('chai').expect
var posts = require('../../src/database/posts')


// describe('posts.all', function(){
//   it('should return all the posts in the database', function(done){
//     posts.all()
//     .then(allPosts => {
//       expect(allPosts.length).to.eql(0)
//       done()
//     })
//   });
// })

// let globalPost;

// describe('posts.find', function(){
//   beforeEach() {
//     posts.create('foo').then(newPosts => {
//       var newPost = newPosts[0]
//       globalPost = newPost
//     });
//   }

//   it('should find a post', function() {
//     posts.find(globalPost.id)
//       .then(foundPost => {
//         expect(foundPost).to.deep.eql(globalPost)
//       })
//   });

// });

describe('posts.create', function() {
  it('should insert a post into the DB', function(yay) {
    posts.create('A post created by a test')
    .then(newPosts => {
      console.log('entered 2');
      var newPost = newPosts[0]
      posts.find(newPost.id)
      .then(foundPost => {
        expect(foundPost).to.deep.eql(newPost)
        yay()
      })
    })
    console.log('entered 1');
  })
})

var chai = require('chai')
var chaiHttp = require('chai-http');
var expect = chai.expect

var app = require('../../../src/app');

chai.use(chaiHttp);

// describe('GET /api/posts', function() {
//   it('should return all the posts', function(done){
//     chai.request(app)
//       .get('/api/posts')
//       .then(response => {
//         console.log('posts::', response.body)
//         expect(response.body.length).to.be.eql(8)
//         done();
//       });
//   });
// })

describe('POST /api/posts', function() {
  context('when time is 5am', function() {
    setTime('5am');
  });
  it('should create a post', function(done) {
    chai.request(app)
      .post('/api/posts')
      .send({body: 'a new post created by chai-http'})
      .then(function(response) {
        expect(response.body).to.deep.equal({message:'Created the post successfully'});
        done();
      });
  });
})

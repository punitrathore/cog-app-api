var express = require('express')

var app = express();
var posts = require('./server/routes/posts');
var bodyParser = require('body-parser');


var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', posts)

app.listen(port)

console.log(`starting server at port ${port}`);

module.exports = app

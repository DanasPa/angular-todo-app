var express = require('express')
var app = express()

app.use(express.static('public'))

app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})
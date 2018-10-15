// Bring in our dependencies
const express = require('express')
const routes = require('./routes')
const path = require('path')

const app = express();

const PORT = process.env.PORT || 5000

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname + '/public/index.html'))
  res.status(200).json({ message: 'Connected!' })
})

//  Connect all our routes to our application
app.use('/', routes)

// Turn on that server!
app.listen(PORT, () => console.log('App listening on ${PORT}'))

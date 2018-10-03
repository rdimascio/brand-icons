// Bring in our dependencies
const app = require('express')()
const routes = require('./routes')
const path = require('path')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname + '/public/index.html'))
  res.status(200).json({ message: 'Connected!' })
})

app.get('/data/brands.json', (req, res) => {
  res.sendFile(path.join(__dirname + '/data/brands.json'))
  // res.status(200).json({ message: 'Connected!' })
})

//  Connect all our routes to our application
app.use('/', routes)

// Turn on that server!
app.listen(3001, () => {
  console.log('App listening on port 3001')
})

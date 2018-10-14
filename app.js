// Bring in our dependencies
const express = require('express')()
const routes = require('./routes')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/data/brands.json', (req, res) => {
  res.sendFile(path.join(__dirname + '/data/brands.json'))
})

//  Connect all our routes to our application
app.use('/', routes)

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Turn on that server!
app.listen(PORT, () => console.log('App listening on ${ PORT }'))

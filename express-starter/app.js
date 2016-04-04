const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('tiny'))

var array = ['Banana'];
app.get('/', (req, res) => {
  // Send JSON
  res.send({ array})
})

app.get('/post', (req,res) => {
  const a= 0;
  var word = req.query.a;
  array.push(word);
})



/*app.get()
app.get('/add', (req, res) => {
  // TODO: We need to get 'a' and 'b' from 'req.query' object
  const a = 0 // ?
  const b = 0 // ?
  res.send({
    operation: `${a} + ${b}`,
    result: a + b,
  })
})*/

module.exports = app

const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('tiny'))

const array = [];
app.get('/', (req, res) => {
  // Send JSON
  res.send({ array })
})

app.post('/items', (req,res) => {
//  const item = req.body.item;
  array.push(req.query.a);
  res.send(req.query.a);
})





module.exports = app

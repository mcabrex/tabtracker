console.log('Whats up')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// first require these four that we installed, this will go through the modules and find the main file and include it here as a const

const app = express()
// this is gonna build our express server
app.use(morgan('combined'))
// use morgan and pass it 'combined' to print the logs in a certain way
app.use(bodyParser.json())
// allow our express app to easily parse any json request
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'we out here yuh'
  })
})

app.listen(process.env.PORT || 8081)

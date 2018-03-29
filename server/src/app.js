console.log('Whats up')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// first require these four that we installed, this will go through the modules and find the main file and include it here as a const
const {sequelize} = require('./models')
// require the models that get exported as a sequelize object
const config = require('./config/config')
// will need this to start the app at the proper port
const app = express()
// this is gonna build our express server
app.use(morgan('combined'))
// use morgan and pass it 'combined' to print the logs in a certain way
app.use(bodyParser.json())
// allow our express app to easily parse any json request
app.use(cors())

require('./routes')(app)
// going to return a function that we can pass in our express app to get the appropriate response

sequelize.sync()
// this will connect sequelize to whatever database you have configured and create the tables if they don't exist, if you pass force: true into this sync it will drop the tables DANGEROUS IN PRODUCTION fine locally i guess
  .then(() => {
    // once you're done syncing just start the server
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })

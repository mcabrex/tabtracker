const fs = require('fs')
// how node reads through file systems
const path = require('path')
// deals with paths
const Sequelize = require('sequelize')
// need that to actually create the sequelize obj and connect it to the database
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

fs
  .readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  // read all the files (the models pretty much) in this folder except for this one (index.js)
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    // paths join method is gonna take the directory we're in (__dirname) and every file besides this one (because of the filter) and dynamically combine them (using the forEach) into a singular path per file that we can use to individually turn into models for sequelize
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize
// attaching sequelize to the db so we have access to it in case we need it

module.exports = db

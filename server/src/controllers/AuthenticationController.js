const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
  // use this to validate jwt tokens, pass it into the response of the user login
}

module.exports = {

  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
      res.send(user.toJSON())
      // send back that user object to the client who's requesting this endpoint
      // now if you do a proper registration to this endpoint you should get back a json of this users information
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
      // email already exists
    }
  },

  async login (req, res) {
    try {
      const {email, password} = req.body
      // grab email and password sent as a request
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect1'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect2'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}

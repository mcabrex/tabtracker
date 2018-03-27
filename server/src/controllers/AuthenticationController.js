const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
      // send back that user object to the client who's requesting this endpoint
      // now if you do a proper registration to this endpoint you should get back a json of this users information
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
      // email already exists
    }
  }
}

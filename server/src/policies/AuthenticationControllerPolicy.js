const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
    // this schema will be used to compare the request against
      email: Joi.string().email(),
      // one of Jois built in methods, basically it's making sure it's a string and an email (straightforward enough)
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
        // here we are making sure the password passes a regex requirement of being letters a-zA-Z0-9 and that it should be a minimum of 8 characters and a maximum of 32
      )
    }
    const {error} = Joi.validate(req.body, schema)
    // for Jois validate the first parameter is whatever you're trying to validate and the second parameter is whatever you're trying to validate it against

    if (error) {
    // here we are going to make a switch to send the appropriate response to whatever caused the error
      switch (error.details[0].context.key) {
        case 'email' :
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password' :
          res.status(400).send({
            error: `Password must be between 8 and 32
                    <br>
                    Password must contain only letters and numbers`
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}

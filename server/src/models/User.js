const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
// promisifyAll is going to take any typical function which has a callback structure and its going to wrap it to allow us to use the promise format

function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
    // if the password hasn't changed just return out of this function and it won't do anything
  }

  return bcrypt
  // if it has changed then call bcrypt
    .genSaltAsync(SALT_FACTOR)
    // tell it to generate using the salt
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    // take that salt and bcrypt it using the user's password
    .then(hash => {
      // this will give us a hash which we will use to update the users value with that hash
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
// make sure to return something otherwise it will end up as undefined
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword
      // beforeSave: hashPassword, this was causing the password to always be false when bcrypting it, double hash or something?
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
    // assuming the password is being stored using bcrypt well just compare the password entered with the password in the db
  }

  return User
}

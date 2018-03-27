module.exports = (sequelize, DataTypes) => {
// make sure to return something otherwise it will end up as undefined
  return sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
}

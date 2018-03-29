module.exports = {
  port: process.env.PORT || 8081,
  // exporting this port to be required in the app.js file to get the app started
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      // what kind of db we're going to be connecting to
      host: process.env.HOST || 'localhost',
      // telling sequelize the location of the db we want to connect to
      storage: './tabtracker.sqlite'
      // where to store the sqlite files
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
    // assigning the jwt token with a secret string which only be known by this server, used to determine if the jwt token is valid or not
  }
}

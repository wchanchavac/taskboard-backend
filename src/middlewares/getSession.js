'use strict'

const jwt = require('jwt-simple')
const { AuthenticationError } = require('apollo-server-express')
const env = process.env.NODE_ENV || 'development'
const application = require('./../config/application')[env]

module.exports = async (req) => {
  // Get the user token from the headers.
  const token = req.headers.authorization || ''

  // try to retrieve a user with the token
  if (token) {
    try {
      const decoded = jwt.decode(token, application.secret)
      // const { org: orgId, sub: ownerId } = decoded
      return { ...decoded }
    } catch (err) {
      throw new AuthenticationError('Must authenticate')
    }
  } else {
    throw new AuthenticationError('Must authenticate')
  }
}

const APIError = require('./APIError')

module.exports = class UnauthorizedError extends APIError  {
  constructor (message = 'Sorry, you are not authorized') {
    super(message, 401, 1000, true)
    this.name = this.constructor.name
  }
}

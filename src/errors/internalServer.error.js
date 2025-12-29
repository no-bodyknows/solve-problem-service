const BaseError = require('./base.error.js')

class InternalServerError extends BaseError {
    cosntructor(details) {
        super("InternalServerError", StatusCodes.INETRNAL_SERVER_ERROR, 'something went wrong !!', details);   
    }
    
}

module.exports = InternalServerError; 
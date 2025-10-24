const BaseError = require('./base.error.js')

class NotImplemented extends BaseError {
    constructor(methodName) {
        super("NotImplemented", StatusCodes.NOt_IMPLEMENTED, `${methodName} not Implemented`, {});   
    }
    
}

module.exports = NotImplemented;
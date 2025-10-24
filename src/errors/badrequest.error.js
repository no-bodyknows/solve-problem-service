const BaseError = require('./base.error');
const {  StatusCodes } = require('http-status-codes');


class BadRequest extends BaseError{
    constructor(PropertyName,details) {
        super("bad_Request",StatusCodes.Bad_Request,`invalid structure for ${PropertyName} provided`,details)
        
    }
}

module.exports = BadRequest;
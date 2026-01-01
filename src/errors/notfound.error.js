const BaseError = require('./base.error.js')

const { StatusCodes } = require('http-status-codes');

class NotFoundError extends BaseError {
    constructor(resourceName, resourceValue) {
        console.log("enter in not found error");
        super("NotFoundError", StatusCodes.NOT_FOUND, `$The requested resource ${resourceName} with value ${resourceValue} was not found`, {
            resourceName, resourceValue
        });   
    }   
}
module.exports = NotFoundError;


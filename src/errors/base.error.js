class BaseError extends Error {
    constructor(name, statusCode, discription,details) {
        super(discription);
        this.name = name;
        this.statusCode = statusCode;
        this.discription = discription;
        this.details = details;
        
    }
} 
module.exports = BaseError;
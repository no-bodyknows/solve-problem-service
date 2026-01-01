const BaseError = require("../errors/base.error");
const { StatusCodes } = require('http-status-codes');





function errorHandler(err, req, res, next) {
    console.log(err instanceof BaseError);
    if (err instanceof BaseError) {
        console.log("inside base error handler");
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            err: err.details,
            data:{}  // beacuse this is an exception so no data is going to be  provided
        })
    }
    console.log("inside generic error handler");
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
           
            success: false,
            message: "something went wrong",
            err: err,
            data:{}  // beacuse this is an exception so no data is going to be  provided
     })
    


}
 module.exports = errorHandler;
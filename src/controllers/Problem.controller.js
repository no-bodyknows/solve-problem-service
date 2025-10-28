const {StatusCodes}=require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
function PingProblemcontroller(req, res) {
    return res.json({message: 'pong from problem controller'});
}


function addProblem(req, res) {
    try {
        throw new NotImplemented('addProblem');
    }
    catch (error) {
            next(error);
        }
    
 
}


function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'This route is not yet implemented'
    })
}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'This route is not yet implemented'
    })
}

function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'This route is not yet implemented'
    })
}


function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'This route is not yet implemented'
    })
}




  
module.exports = {
    PingProblemcontroller,  
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem

}   
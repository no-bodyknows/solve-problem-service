const {StatusCodes}=require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
const { ProblemService } = require('../services');
const {ProblemRepository}= require('../repositories')


const problemService = new ProblemService(new ProblemRepository());

function PingProblemcontroller(req, res) {
    return res.status(StatusCodes.OK).json({
        message:"pong from server"
    })
}


async function addProblem(req, res,next) {
    try {
        console.log("incoming req.body", req.body);
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'successfully created a new problem',
            error: {},
            data: newproblem

        });
       
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
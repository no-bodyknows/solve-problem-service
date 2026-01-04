const {StatusCodes}=require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories')
const NotFoundError = require('../errors/notfound.error');
const BaseError = require('../errors/base.error');



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


async  function getProblem(req, res , next) {
    try {
        
        const ProblemId = req.params.id;
        
        const problem = await problemService.getProblemById(ProblemId);
       
        if (!problem) { 
            
            const obj = new NotFoundError('Problem', ProblemId);
            // throw new NotFoundError('Problem', ProblemId);
            
            
            throw obj;
        }
        
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'problem fetched successfully',
            error: {},
            data: problem
        })
    }
    catch (error) {
        
       
        next(error);
    }

}

async function getProblems(req, res) {
    try {
        console.log("fetching all problems from controller layer");
        const problems = await problemService.getAllProblems();
        console.log("problems fetched in controller layer", problems);
        return res.status(StatusCodes.OK).json({ 
            success: true,
            message: 'problems fetched successfully',
            error: {},
            data: problems
        });
    }
    catch (error) { 
        next(error);
    }

   
}

async function deleteProblem(req, res ,next) {
    
    try {
        console.log("deleting problem from controller layer");
        const Problemid = req.params.id;
        // logic to delete the problem
        const problem = await problemService.deleteProblem(Problemid);
        
        return res.status(StatusCodes.OK).json({
            success: true,
            message: `Problem with id ${Problemid} deleted successfully`,
            error: {},
            data:problem
        });
    }
    catch (error) {
        console.log("inside catch block");
        next(error);
    }

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
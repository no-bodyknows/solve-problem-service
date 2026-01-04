const { Problem }  = require('../models');
class ProblemRepository { 
    
    async createProblem(ProblemData) {
        try {
            const problem = await Problem.create({
                title: ProblemData.title,
                description: ProblemData.description,      
                testCases: (ProblemData.testCases) ? ProblemData.testCases : [],
                difficulty: ProblemData.difficulty || "easy",
                 testCases: ProblemData.testCases
            });
            return problem;
        }
        catch (error) {
            console.log("error in creating problem in repo layer", error);
            throw error;
        }
    }
    async getAllProblems() {
        try {
            
            const Problems = await Problem.find({});
            
            return Problems;
        }
        catch (error) {
            
            throw error;
        }
    }
    async getProblemById(ProblemId) {
        try {
            
            const problem = await Problem.findById(ProblemId);
           
            return problem;
        }
        catch (error) {
            
            throw error;
        }
    }
    async deleteProblem(ProblemId) {
        try {
            await Problem.findByIdAndDelete(ProblemId);
        }
        catch (error) {
            throw error;
        }
    }   
    
}
module.exports = ProblemRepository;
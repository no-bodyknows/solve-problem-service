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
}
module.exports = ProblemRepository;
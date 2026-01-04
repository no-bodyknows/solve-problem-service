const  NotFoundError  = require("../errors/notfound.error");
const { markdownsanitizer } = require("../utils");
class ProblemService {
    constructor(ProblemRepository) {
        this.ProblemRepository = ProblemRepository;
        

    }
    async createProblem(ProblemData) {
        try {
             
            // 1. sanitize the markdown content
            ProblemData.description = markdownsanitizer(ProblemData.description);

            console.log("problem data after sanitization", ProblemData);
            // 2. pass the sanitized content to repository layer
            const problem = await this.ProblemRepository.createProblem(ProblemData);
            console.log("problem created in service layer", problem);
            return problem;
        }
        catch (error) {

            console.log("error in creating problem in service layer", error);
            throw error;
        }

    }
    async getAllProblems() {
            console.log("fetching all problems from service layer");
        const problems = await this.ProblemRepository.getAllProblems();
        console.log("problems fetched in service layer", problems);
            return problems;
        
        
    }
    async getProblemById(ProblemId) {
        
        const problem = await this.ProblemRepository.getProblemById(ProblemId);
        
        return problem;
    }

    async deleteProblem(ProblemId) {
        
        const problem = await this.ProblemRepository.getProblemById(ProblemId);
        
        if (!problem) {
           
           throw new NotFoundError('Problem', ProblemId);
        }
        await this.ProblemRepository.deleteProblem(ProblemId);
        return problem;
    }

}
module.exports = ProblemService;

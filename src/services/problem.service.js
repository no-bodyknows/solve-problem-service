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
        console.log("fetching problem by id from service layer");
        const problem = await this.ProblemRepository.getProblemById(ProblemId);
        console.log("problem fetched in service layer", problem);
        return problem;
    }

}
module.exports = ProblemService;
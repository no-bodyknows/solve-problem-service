const { markdownsanitizer } = require("../utils");
class ProblemService {
    constructor(ProblemRepository) {
        this.ProblemRepository = ProblemRepository;
        

    }
    async createProblem(ProblemData) {
        try {
              throw new Error("test error handling");
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
}
module.exports = ProblemService;
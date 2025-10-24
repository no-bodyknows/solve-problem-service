const express = require('express');
const{Problemcontroller} = require("../../controllers");

const Problemrouter = express.Router();


Problemrouter.get('/ping',Problemcontroller.PingProblemcontroller);

Problemrouter.post('/', Problemcontroller.addProblem);
Problemrouter.get('/:id',Problemcontroller.getProblem);
Problemrouter.get('/',Problemcontroller.getProblems);
Problemrouter.delete('/:id', Problemcontroller.deleteProblem);
Problemrouter.put('/:id', Problemcontroller.updateProblem);

module.exports = Problemrouter;


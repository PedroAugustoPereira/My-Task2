const Task = require("../models/Task");


//função que retorna todas as tasks
const getAllTasks = () => 
{
    return Task.findAll();
    //findAll vai pegar tudo da tabela
}



module.exports = {
    getAllTasks
}
const TaskService = require("../services/TaskServices");

//Funções de controller

const getAllTasks = async (req, res) => {
    try{
        const tasks = await TaskService.getAllTasks();
        res.json(tasks);
    }catch(error){
        res.status(500).json({error: "Erro ao obter tasks"});
    }
}

module.exports = {
    getAllTasks
}
const Todo = require("../models/Todo");

async function getAllTodos(req, res, next) {
    const todos = await Todo.find();
    return todos;
}

module.exports = {
    getAllTodos
}
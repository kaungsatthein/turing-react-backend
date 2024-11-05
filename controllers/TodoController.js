// let todos = [
//     {userId: 6, id: 101, title: 'explicabo enim cumque porro aperiam occaecati minima', completed: false},
//     {userId: 6, id: 102, title: 'sed ab consequatur', completed: false},
//     {userId: 6, id: 103, title: 'non sunt delectus illo nulla tenetur enim omnis', completed: false},
//     {userId: 6, id: 104, title: 'excepturi non laudantium quo', completed: false},
//     {userId: 6, id: 105, title: 'totam quia dolorem et illum repellat voluptas optio', completed: true}
// ]

const TodoService = require("../services/TodoService")

async function getAllTodos(req, res, next) {
    const todos = await TodoService.getAllTodos();
    res.json(todos);
}

async function getTodoById(req, res, next) {
    let id = req.params.id;
    try {
        let todo = await TodoService.getTodoById(id);
        res.status(200).json(todo);
    } catch (err) {
        res.status(404).json("Your todo is not available.")
    }
}

async function createTodo(req, res, next) {
    try {
        let newTodo = await TodoService.createTodo(req.body);
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json("Invalid todo data.")
    }
}

async function updateTodo(req, res, next) {
    let id = req.params.id;
    try {
        let updatedTodo = await TodoService.updateTodoById(id, req.body);
        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(400).json("Your todo is not available.")
    }
}

async function deleteTodo(req, res, next) {
    let id = req.params.id;
    try {
        let deletedTodo = await TodoService.deleteTodoById(id)
        res.status(200).json(deletedTodo);
    } catch (err) {
        res.status(400).json("Your todo is not available.")
    }
}

module.exports = {getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo}
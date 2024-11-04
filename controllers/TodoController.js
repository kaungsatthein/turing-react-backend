// let todos = [
//     {userId: 6, id: 101, title: 'explicabo enim cumque porro aperiam occaecati minima', completed: false},
//     {userId: 6, id: 102, title: 'sed ab consequatur', completed: false},
//     {userId: 6, id: 103, title: 'non sunt delectus illo nulla tenetur enim omnis', completed: false},
//     {userId: 6, id: 104, title: 'excepturi non laudantium quo', completed: false},
//     {userId: 6, id: 105, title: 'totam quia dolorem et illum repellat voluptas optio', completed: true}
// ]

const TodoService = require("../services/TodoService")

async function getAllTodos(req, res, next) {
    console.log('getAllTodos')
    const todos = await TodoService.getAllTodos();
    res.json(todos);
}

async function getTodoById(req, res, next) {
    let id = parseInt(req.params.id);
    console.log(id)
    let todo = todos.find(todo => todo.id === id);
    console.log("single Todo", todo);
    res.status(200).json(todo)
}

async function createTodo(req, res, next) {
    console.log("Post Todo", req.body);
    res.status(201).json(req.body)
}

async function updateTodo(req, res, next) {
    console.log("Update Todo", req.params.id);
    res.status(200).json(req.body)
}

async function deleteTodo(req, res, next) {
    console.log("Delete Todo", req.params.id);
    res.status(204).send()
}

module.exports = {getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo}
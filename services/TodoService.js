const Todo = require("../models/Todo");

async function getAllTodos() {
    let todos = await Todo.find();
    return todos;
}

async function getTodoById(id) {
    let todo = await Todo.findById(id);
    return todo;
}

async function createTodo(todo) {
    let newTodo = await new Todo(todo);
    return newTodo.save();
}

async function updateTodoById(id, todo) {
    let existingTodo = await Todo.findById(id);
    if (!existingTodo) {
        throw new Error("Todo not found");
    } else {
        let updatedTodo = await Todo.findByIdAndUpdate(id, todo, {new: true});
        return updatedTodo;
    }
}

async function deleteTodoById(id) {
    let existingTodo = await Todo.findById(id);
    if (!existingTodo) {
        throw new Error("Todo not found");
    } else {
        let deletedTodo = await Todo.findByIdAndDelete(id);
        return deletedTodo;
    }

}

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodoById,
    deleteTodoById
}
const express = require('express');
const todos = require('../controllers/TodoController')
const router = express.Router();

router.get("/", todos.getAllTodos);
router.get("/:id", todos.getTodoById);
router.post("/", todos.createTodo);
router.put("/:id", todos.updateTodo);
router.delete("/:id", todos.deleteTodo);

module.exports = router;




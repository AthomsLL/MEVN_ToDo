const express = require('express');
const router = express.Router();
const TODO = require("../controllers/Todos");


// Get All Todo route
router.get('/', TODO.getAllTodos);

// Create Todo route
router.post('/new', TODO.createTodo);

// Get one Todo by Id
router.get('/get/:id', TODO.getOneTodo);

// Delete a todo by id
router.delete('/delete/:id', TODO.deleteTodo);

// Update a todo by id
router.put('/update/:id', TODO.updateTodo);

module.exports = router;
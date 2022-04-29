const Todo = require('../models/Todos');

module.exports = class TODO {
    //Get all Todos
    static async getAllTodos(req, res) {
        const todos = await Todo.find();
        res.json(todos)
    }

    // Create new Todo
    static async createTodo(req, res) {
        // const todoObject = JSON.parse(req.body.todo);
        const newTodo = new Todo (
            req.body
        );
        const savedTodo = await newTodo.save();
        res.json(savedTodo);
    }

    // Get one Todo by Id
    static async getOneTodo(req, res) {
        const oneTodo = await Todo.findOne({ _id: req.params.id })
        res.json(oneTodo);
    }

    // Delete a todo by id
    static async deleteTodo(req, res) {
        const todoDelete = await Todo.findByIdAndDelete({ _id: req.params.id })
        res.json(todoDelete);
    }

    // Update a todo by id
    static async updateTodo(req, res) {
        const todoUpdate = await Todo.updateOne(
            {_id: req.params.id}, 
            { $set: req.body }
        )
        res.json(todoUpdate);
    }
}
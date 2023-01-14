import Todo from "../models/todoModel.js";

export const getTodo = async (req, res) => {
    const toDo = await Todo.find();
    res.status(200).json(toDo);
};
export const createTodo = async (req, res) => {
    const { text } = req.body;

    Todo.create({ text }).then((data) => {
        res.status(200).json(data);
    });
};
export const updateTodo = async (req, res) => {
    const { _id, text } = req.body;

    Todo.findByIdAndUpdate(_id, { text })
        .then(() => res.send("Update successfully"))
        .catch((err) => console.error(err));
};
export const deleteTodo = async (req, res) => {
    const { _id } = req.body;

    Todo.findByIdAndDelete(_id)
        .then(() => res.send("Delete successfully"))
        .catch((err) => console.error(err));
};

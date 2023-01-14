import express from "express";
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controllers/todoController.js";

const todoRoute = express.Router();
todoRoute.get("/todo", getTodo);
todoRoute.post("/todo/create", createTodo);
todoRoute.put("/todo/update", updateTodo);
todoRoute.post("/todo/delete", deleteTodo);
export default todoRoute;

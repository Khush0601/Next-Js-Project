import Todo, {type  ITodo } from "../models/todo";
import { connectDB } from "../lib/db";

// Get all todos
export async function getTodos() {
  await connectDB(); 
  return await Todo.find();
}

// Add todo
export async function addTodo(data: Partial<ITodo>) {
  await connectDB();
  const todo = new Todo(data);
  return await todo.save();
}

import Todo, { type ITodo }  from "../models/todo";

// Get all todos
export async function getTodos() {
  return await Todo.find();
}

// Add a new todo
export async function addTodo(data: Partial<ITodo>) {
  const todo = new Todo(data);
  return await todo.save();
}

// Update todo
export async function updateTodo(id: string, data: Partial<ITodo>) {
  return await Todo.findByIdAndUpdate(id, data, { new: true });
}

// Delete todo
export async function deleteTodo(id: string) {
  return await Todo.findByIdAndDelete(id);
}

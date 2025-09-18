import Todo, {type  ITodo } from "../models/todo";
import { connectDB } from "../lib/db";
import { NextResponse } from "next/server";

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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { task, taskDesc, date, time } = await request.json();

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { task, taskDesc, date, time },
      { new: true, runValidators: true }
    );

    if (!updatedTodo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update todo" }, { status: 500 });
  }
}

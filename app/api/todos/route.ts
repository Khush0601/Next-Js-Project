import { NextResponse } from "next/server";
import { getTodos, addTodo } from "../../controllers/todoController";


export async function GET() {
  try {
    const todos = await getTodos();
    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch todos" }, { status: 500 });
  }
}


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newTodo = await addTodo(body);
    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add todo" }, { status: 500 });
  }
}

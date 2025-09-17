import mongoose, { Document, Schema, Model } from "mongoose";

// Interface for schema
export interface ITodo extends Document {
  date: string;
  task: string;
  time: string;
  taskDesc: string;
}

// Schema
const TodoSchema: Schema = new Schema({
  date: { type: String, required: true },
  task: { type: String, required: true },
  time: { type: String, required: true },
  taskDesc: { type: String, required: true },
});

// Model
const Todo: Model<ITodo> =
  mongoose.models.Todo || mongoose.model<ITodo>("Todo", TodoSchema);

export default Todo;

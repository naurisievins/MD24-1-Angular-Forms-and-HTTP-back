import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    done: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

export const Todo = mongoose.model("Todo", TodoSchema);

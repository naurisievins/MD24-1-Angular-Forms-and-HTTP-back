import mongoose from "mongoose";
import dateFormat from "./util/dateFormat";

const TodoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    done: { type: Boolean, default: false },
    date: { type: String, default: dateFormat() },
  },
  { versionKey: false }
);

export const Todo = mongoose.model("Todo", TodoSchema);

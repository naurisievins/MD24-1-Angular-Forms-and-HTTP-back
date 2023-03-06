import mongoose from "mongoose";

const AnimalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
  },
  { versionKey: false }
);

export const Animal = mongoose.model("Animal", AnimalSchema);

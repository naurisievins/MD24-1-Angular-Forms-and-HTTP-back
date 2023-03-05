import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoConnect from "./connect";
import { Animal } from "./schema";

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

mongoConnect();

// Get all animals
app.get("/get-animals", (req: Request, res: Response) => {
  Animal.find().then((data) => res.json(data));
});

// Get cats
app.get("/get-cats", (req: Request, res: Response) => {
  Animal.find({ type: "Cat" }).then((data) => res.json(data));
});

// Add new animal
app.post("/post-animal", (req: Request, res: Response) => {
  const { name, type } = req.body;

  if (name && type) {
    const animalObject = new Animal({
      name,
      type,
    });

    animalObject.save().then((data) => res.status(200).json(data));
  }
});

// Delete animal
app.delete("/animals/:id", (req, res) => {
  const id = req.params.id;

  Animal.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json(`Task with ID ${id} deleted successfully`);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json("Error deleting task!");
    });
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});

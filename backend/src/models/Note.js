import mongoose from "mongoose";

//1 create schema
//2 model based off of that schema

// Schema takes 2 parameters:
// First {} = field definitions (data structure: title, content, etc.)
// Second {} = schema options (configuration: timestamps, collection name, etc.)
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps: true } //createdAt, updatedAt
);

//Model based on above schema
// create a "Note model" based on this "schema"

const Note = mongoose.model("Note", noteSchema);

export default Note;

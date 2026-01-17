import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find(); //get all notes
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.satatus(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    //create
    const note = new Note({ title: title, content: content }); //model

    //save to database
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.satatus(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  res.status(200).json({ message: "Note updated successfully!" });
}

export async function deleteNote(req, res) {
  res.status(200).json({ message: "Note deleted successfully!" });
}

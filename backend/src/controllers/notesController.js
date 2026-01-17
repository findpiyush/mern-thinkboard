import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); //get all notes (newest first)
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found!" });
    res.json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal server error" });
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

// Controller function to update an existing note by ID
export async function updateNote(req, res) {
  try {
    // Extract title and content from request body
    const { title, content } = req.body;

    // Find note by ID (from URL params) and update it with new data
    // findByIdAndUpdate takes three parameters:
    // 1. The ID to find (req.params.id)
    // 2. The update object ({ title, content })
    // 3. Options object ({ new: true } returns the updated document instead of the original)
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title: title, content: content },
      {
        new: true, // Return the updated document
      }
    );

    // If note with given ID doesn't exist, return 404 error
    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });

    // Send the updated note as JSON response with 200 status
    res.status(200).json(updatedNote);
  } catch (error) {
    // Log error to console for debugging
    console.error("Error in updateNote controller", error);
    // Send 500 internal server error response
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Note deleted successfully" }); //status by default 200
  } catch (error) {
    console.error("Error in deleteNode controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

import express from "express";

const router = express.Router();

//instead of app.get() we'll use router.get
//Removed /api/notes from the paths (since we mount this router at /api/notes in main server file)

//controllers:
router.get("/", (req, res) => {
  res.status(200).send("you just fetched notes");
}); //contoller 1

//user wants to create note
router.post("/", (req, res) => {
  res.status(201).json({ message: "Note created succesfully" });
}); // controller 2, and so on...

//update note   :id means we are declaring it as dynamic
router.put("/:id", (req, res) => {
  res.status(200).json({ message: "Note updated succesfully" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "Note deleted succesfully" });
});

export default router;

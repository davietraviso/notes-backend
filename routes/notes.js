const express = require("express");
const { getAllNotes, getNoteById, createNote, updateNote, deleteNote } = require("../controller/controllerNotes");
const router = express.Router();

router.get("/", getAllNotes); // GET all notes
router.get("/:id", getNoteById); // GET one note by ID
router.post("/", createNote); // POST create new note
router.put("/:id", updateNote); // PUT update note by ID
router.delete("/:id", deleteNote); // DELETE note by ID

module.exports = router;

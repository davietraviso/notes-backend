const db = require("../config/db");

// Get all notes
const getAllNotes = (req, res) => {
  const query = "SELECT * FROM notes";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Get one note by ID
const getNoteById = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM notes WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(results[0]);
  });
};

// Create new note
const createNote = (req, res) => {
  const { title, datetime, note } = req.body;
  const query = "INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)";
  db.query(query, [title, datetime, note], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Note created", id: result.insertId });
  });
};

// Update note by ID
const updateNote = (req, res) => {
  const { id } = req.params;
  const { title, datetime, note } = req.body;
  const query = "UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?";
  db.query(query, [title, datetime, note, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note updated" });
  });
};

// Delete note by ID
const deleteNote = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM notes WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted" });
  });
};

module.exports = { getAllNotes, getNoteById, createNote, updateNote, deleteNote };

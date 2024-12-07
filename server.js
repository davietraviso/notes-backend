const express = require("express");
const dotenv = require("dotenv");
const notesRoutes = require("./routes/notes");

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
app.use(express.json());

// Routes
app.use("/api/notes", notesRoutes);

// Start server
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

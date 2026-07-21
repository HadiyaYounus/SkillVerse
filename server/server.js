const express = require("express");
const cors = require("cors");

const skillsRoutes = require("./routes/skills");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/skills", skillsRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("SkillVerse Backend is Running 🚀");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
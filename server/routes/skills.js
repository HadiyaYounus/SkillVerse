const express = require("express");
const router = express.Router();

const skills = require("../data/skills.json");

// GET all skills
router.get("/", (req, res) => {
  res.json(skills);
});

// GET skill by id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const skill = skills.find((item) => item.id === id);

  if (!skill) {
    return res.status(404).json({
      message: "Skill not found",
    });
  }

  res.json(skill);
});

module.exports = router;
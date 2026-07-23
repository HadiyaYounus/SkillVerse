const skills = require("../../server/data/skills.json");

module.exports = (req, res) => {
  const { id } = req.query;

  const skill = skills.find((item) => item.id === Number(id));

  if (!skill) {
    return res.status(404).json({
      message: "Skill not found",
    });
  }

  res.status(200).json(skill);
};
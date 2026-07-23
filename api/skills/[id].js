import skills from "../../server/data/skills.json";

export default function handler(req, res) {
  const { id } = req.query;

  const skill = skills.find((item) => item.id === Number(id));

  if (!skill) {
    return res.status(404).json({
      message: "Skill not found",
    });
  }

  return res.status(200).json(skill);
}
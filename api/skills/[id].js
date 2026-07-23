import skills from "../data/skills.json";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  const id = Number(req.query.id);

  const skill = skills.find((item) => item.id === id);

  if (!skill) {
    return res.status(404).json({
      message: "Skill not found",
    });
  }

  res.status(200).json(skill);
}
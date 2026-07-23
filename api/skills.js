import skills from "../server/data/skills.json" with { type: "json" };

export default function handler(req, res) {
  return res.status(200).json(skills);
}
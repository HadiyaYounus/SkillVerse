import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";

function SkillDetails() {

  const { id } = useParams();

  const [skill, setSkill] = useState(null);


  useEffect(() => {

    API.get(`/skills/${id}`)
      .then((response) => {
        setSkill(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);



  if (!skill) {
    return (
      <div className="bg-[#212121] text-white min-h-screen p-10">
        Loading...
      </div>
    );
  }



  return (

    <div className="bg-[#212121] text-white px-6 py-12">

      <div className="max-w-3xl mx-auto bg-[#2f2f2f] border border-[#3f3f3f] rounded-xl p-8">


        <div className="w-16 h-16 rounded-xl bg-[#404040] flex items-center justify-center text-3xl font-bold mb-6">
          {skill.title.charAt(0)}
        </div>


        <h1 className="text-4xl font-bold mb-4">
          {skill.title}
        </h1>


        <p className="text-gray-300 text-lg mb-6">
          {skill.description}
        </p>


        <div className="space-y-3 text-gray-200">

          <p>
            📚 Level: {skill.level}
          </p>


          <p>
            ⏳ Duration: {skill.duration}
          </p>

        </div>


      </div>

    </div>

  );
}


export default SkillDetails;
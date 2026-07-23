useEffect(() => {
  console.log("Component Loaded");

  API.get("/skills")
    .then((response) => {
      console.log("Response:", response);
      console.log("Data:", response.data);
      console.log("Length:", response.data.length);

      setSkills(response.data);
    })
    .catch((error) => {
      console.error("ERROR:", error);
    });
}, []);

console.log("Skills State:", skills);
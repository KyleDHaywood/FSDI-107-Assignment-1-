import { useState } from "react";

const About = () => {
  const [name, setName] = useState("");
  const handleName = () => {
    setName("Kyle");
  };

  return (
    <div className="about-page">
      <h1>{name}</h1>
      <button onClick={handleName}>Click to see My Name</button>
    </div>
  );
};

export default About;

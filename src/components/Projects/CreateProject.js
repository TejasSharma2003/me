import React,{useState} from "react";
import "aos/dist/aos.css";
function CreateProject({ img, time, about, category }) {
    const [showDescription, setShowDescription] = useState(false);
  return (
    <div
      className="single-project"
      data-aos="fade-right"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => {
        setShowDescription(false);
      }}
    >
      <img src={img} alt="Project"></img>
      <div className={`description ${showDescription && "show-description"}`}>
        <p>{time}</p>
        <p>{about}</p>
        <p>{category}</p>
      </div>
    </div>
  );
}

export default CreateProject;


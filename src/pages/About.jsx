import { useState } from "react";
import NavBar from "../components/NavBar";
import "./about.css";
import Data from "./data";
function About() {
  const [skills, setSkills] = useState("web");
  return (
    <div>
      <NavBar />
      <div className="container">
        <img src="/profile.jpg" alt="profie" id="profile" />
        <div className="about">
          <h2>I`m a Developer</h2>
          <p id="data">{Data.about_me}</p>
        </div>
        <div className="profile_data">
          <h2>Profile </h2>
          <p>Birth Year : {Data.birth}</p>
          <p>Maritial Status: {Data.Maritial}</p>
          <p>Military service : {Data.military}</p>
          <p>Location : Mashhad , Iran</p>
        </div>
        <div className="education">
          <h2>Educational background</h2>
          <p>{Data.education}</p>
        </div>
        <div className="courses">
          <h2>Courses </h2>
          <p>{Data.courses}</p>
        </div>
        <div className="languages">
          <h2>Languages </h2>
          {Data.languages.map((lang) => {
            // eslint-disable-next-line react/jsx-key
            return <p>{lang}</p>;
          })}
        </div>
        <div className="skills">
          <button
            className={
              skills == "web" ? "web_b button buttom_set" : "web_b button"
            }
            onClick={() => {
              setSkills("web");
            }}
          >
            Front End
          </button>
          <button
            className={
              skills == "flutter"
                ? "mobile_b button buttom_set"
                : "mobile_b button"
            }
            onClick={() => {
              setSkills("flutter");
            }}
          >
            Flutter
          </button>
          <div className="disply_e">
            <div className={skills == "web" ? "web" : "disply_set"}>
              <h3>JavaScript</h3>
              <p>{Data.skills.JavaScript}</p>
              <h3>HTML & CSS</h3>
              <p>{Data.skills.HTML_CS}</p>
              <h3>React Js</h3>
              <p>{Data.skills.React}</p>
            </div>
            <div className={skills == "flutter" ? "mobile" : "disply_set"}>
              <h3>Dart</h3>
              <p>{Data.skills.Dart}</p>
              <h3>Flutter</h3>
              <p>{Data.skills.Flutter}</p>
            </div>
          </div>
        </div>

        <div className="side_skills">
          <h2>Side Skills </h2>
          <div className="side">
            {Data.side_skills.map((side) => {
              // eslint-disable-next-line react/jsx-key
              return <p>{side} | </p>;
            })}
          </div>
        </div>
        <div className="soft_skills">
          <h2>Soft Skills </h2>
          <div className="soft">
            {Data.soft_skills.map((soft) => {
              // eslint-disable-next-line react/jsx-key
              return <p>{soft} | </p>;
            })}
          </div>
        </div>

        <div className="experience">
          <h2>Experience </h2>
          <p>{Data.experience}</p>
        </div>
      </div>
    </div>
  );
}

export default About;

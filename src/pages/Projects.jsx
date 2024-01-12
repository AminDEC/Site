import NavBar from "../components/NavBar";
import "./projects.css";
function Projects() {
  return (
    <div>
      <NavBar />

      <div className="containner">
        <h3>My personal Website (React js)</h3>
        <a
          href="https://github.com/AminDEC/Site"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          open Github
        </a>
      </div>
    </div>
  );
}

export default Projects;

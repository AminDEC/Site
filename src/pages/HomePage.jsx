import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./homePage.css";

function HomePage() {
  return (
    <div className="page">
      <NavBar />
      <div className="home">
        <img src="/img.png" alt="" className="main_pic" />
        <div className="info_data">
          <div>
            <h1 className="name">Hi I`m Amin</h1>
            <p className="info_text"> I`m a React Developer</p>
            <p className="info_text"> I turn coffe into fuctional code</p>
          </div>
          <NavLink className="go_about" to="/about">
            More About Me
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

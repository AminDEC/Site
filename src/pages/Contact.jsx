import NavBar from "../components/NavBar";
import "./contacts.css";
function Contact() {
  return (
    <div className="contact">
      <NavBar />
      <div className="cantact_info">
        <div className="t_info">
          <h3>Phone / WhatsApp: </h3>
          <p>+98 920 209 1311</p>
        </div>
        <div className="t_info">
          <h3>E-mail: </h3>
          <p>mostaphamohammadiamin@gmail.com</p>
        </div>
        <div className="social_container">
          <div className="social">
            <img src="/telegram.png" alt="" className="icon" />
            <a
              href="https://t.me/mostafa_mohammadi_amin"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              telegram
            </a>
          </div>
          <div className="social">
            <img src="/instagram.png" alt="" className="icon" />
            <a
              href="https://www.instagram.com/aminmostapham/"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </div>
          <div className="social">
            <img src="/skype.png" alt="" className="icon" />
            <a
              href="https://join.skype.com/invite/GEVzGrwcccnj"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              skype
            </a>
          </div>
          <div className="social">
            <img src="/cat.png" alt="" className="icon" />
            <a
              href="https://github.com/AminDEC"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </div>
          <div className="social">
            <img src="/linkedin.png" alt="" className="icon" />
            <a
              href="https://www.linkedin.com/in/mostapha-m-amin/"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              Linkdin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

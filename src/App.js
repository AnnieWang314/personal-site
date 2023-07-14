import './App.css';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import logo from "./reactLogo.png";

export default function App() {
  return (
    <div className="container">
      <div className="main">
        <Router>
          <div className="headers">
            <div className="header-left">
              <LeftHeader />
            </div>
            <div className="header-right">
              <RightHeader />
            </div>
          </div>
          
          {/* SMALL MEDIA STUFF
          <div class = "headers-menu">
            <div class = "header-left">
              <div class = "header-link">
                <img id = "smallheader-logo" src="logo.png" alt="logo" />
              </div>
            </div>
            <div class = "header-right">
              <div class = "menu-toggle">
                <div class = "line"></div>
                <div class = "line"></div>
                <div class = "line"></div>
              </div>
              <nav class = "menu">
                  <ul>
                      <li class="menu-item header-link" id="drop-about">About</li>
                      <li class="menu-item header-link" id="drop-projects">Projects</li>
                      <li class="menu-item header-link" id="drop-socials">Socials</li>
                  </ul>
              </nav>
            </div>
        </div>
        */}
        
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />}  />
            <Route path="/projects" element={<Projects />}  />
          </Routes>
        </Router>
      </div>
      <div className="footer">
        <div class="darkmode">
          <Toggle label="Dark Mode" />
        </div>
        <div id="footer-final">Made with ❤ by Annie Wang</div>
      </div>
    </div>
  );
}

function LeftHeader() {
  return (
    <>
      <div className="header-link">
        <Link to="/">
          <img id="header-logo" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="header-link">
        <Link to="/about" style={{textDecoration:"none", color:"black"}}>About</Link>
      </div>
      <div className="header-link">
        <Link to="/projects" style={{textDecoration:"none", color:"black"}}>Projects</Link>
      </div>
    </>
  );
}

function RightHeader() {
  return (
    <>
      <div className="icon-link">
        <a href = "https://github.com/AnnieWang314" target="_blank">
          <FontAwesomeIcon icon={faGithub} style={{color:"black"}}/>
        </a>
      </div>
      <div className="icon-link">
        <a href = "mailto: awang27@mit.edu">
          <FontAwesomeIcon icon={faEnvelope} style={{color:"black"}}/>
        </a>
      </div>
      <div className="icon-link">
        <a href = "https://www.linkedin.com/in/annie-wang-ma/" target = "_blank">
          <FontAwesomeIcon icon={faLinkedin} style={{color:"black"}}/>
        </a>
      </div>
    </>
  );
}

const Toggle = ({ label }) => {
  return (
    <div className = "toggle-container">
      {label}{" "}
      <div className = "toggle">
        <label className="switch">
            <input id={label} type="checkbox" />
            <div className="slider"></div>
        </label>
      </div>
    </div>
  );
};


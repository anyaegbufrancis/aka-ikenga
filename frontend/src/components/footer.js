import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer className="bg-dark text-center text-light" style={{width: "100%", position: "fixed", bottom: "0"}}>
    <div className="logo" />
    <p>
    <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
      Aka Ikenga Project{" "}
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/anyaegbufrancis/aka-ikenga">
        Projects
      </a>
    </p>
    <FontAwesomeIcon icon={faLinkedinIn} size={"2x"} />
    <FontAwesomeIcon icon={faGithub} size={"2x"} style={{marginRight: "2rem", marginLeft: "2rem" }}/>
    <FontAwesomeIcon icon={faFacebookF} size={"2x"} />
  </footer>
);

export default Footer;

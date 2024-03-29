import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
{/* HashLink not get reloaded as Link tag and also can target a container(target via #id) like <a> tag */}

const Header = () => {
  return (
    <nav>
      <h1>eLEARNING</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
      </main>
    </nav>
  );
};

export default Header;

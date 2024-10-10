import React from "react";
import img2 from "./image/LOGO1.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="site-branding logo-left">
        <img src={img2}></img>
      </div>

<div className="navbar-links">
 <b> <a className="navbar-link" href="/">HOME</a>
  <a className="navbar-link" href="/categories">COLLECTIONS</a>
  <a className="navbar-link" href="/about">ABOUT US</a>
  <a className="navbar-link" href="/contact">CONTACT US</a>
  <a className="navbar-link" href="/login">LOGIN</a>
  <a className="navbar-link" href="/signup">REGISTER</a></b>
</div>

    </nav>
  );
}

export default Navbar;

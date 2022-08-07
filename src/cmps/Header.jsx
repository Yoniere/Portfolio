import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export function Header() {
  return (
    <section className="app-header">
      <div>
        <img
          className="header-img"
          src="https://res.cloudinary.com/ddhuvtrpp/image/upload/v1659369970/Protfolio/me_rahwqe.jpg"
          alt=""
        />
      </div>
      <div className="nav-bar clean-list">
        <Link to="#home" smooth>
          <li href="/src/cmps/Contact.jsx">
            <i className="fa fa-home" />
            <p>HOME</p>
          </li>
        </Link>
        <Link to="#about" smooth>
          <li>
            <i className="fa fa-user"></i>
            <p>ABOUT</p>
          </li>
        </Link>
        <Link to="#projects" smooth>
          <li>
            <i className="fa-solid fa-folder-closed"></i>
            <p>PROJECTS</p>
          </li>
        </Link>
        <Link to="#contact" smooth>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <p>CONTACT</p>
          </li>
        </Link>
      </div>
    </section>
  );
}

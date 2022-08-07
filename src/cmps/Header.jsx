import React from "react";

export function Header() {
  return (
    <section className="app-header">
      <div>
        <img className="header-img"
          src="https://res.cloudinary.com/ddhuvtrpp/image/upload/v1659369970/Protfolio/me_rahwqe.jpg"
          alt=""
        />
      </div>
      <div className="nav-bar clean-list">
        <li href="/src/cmps/Contact.jsx">
        <i className="fa fa-home" />
          <p>
          HOME
          </p>
        </li>
        <li>
          <i className="fa fa-user"></i>
          <p>
          ABOUT
          </p>
        </li>
        <li>
        <i className="fa-solid fa-folder-closed"></i>
          <p>
          PROJECTS
          </p>
        </li>
        <li>
          <i className="fa-solid fa-envelope"></i>
          <p>
          CONTACT
          </p>
        </li>
      </div>
    </section>
  );
}

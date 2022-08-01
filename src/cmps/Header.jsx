import React from "react";

export function Header() {
  return (
    <section className="app-header">
      <div className="nav-bar clean-list">
        <li>
          <i className="fa-solid fa-house"></i>
          Home
        </li>
        <li>
          <i className="fa-solid fa-user"></i>
          About
        </li>
        <li>
          <i className="fa-solid fa-folders"></i>
          Projects
        </li>
        <li>
          <i className="fa-solid fa-envelope"></i>
          Contact
        </li>
      </div>
    </section>
  );
}

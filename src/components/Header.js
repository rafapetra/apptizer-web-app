import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <img
          src={logo}
          alt="Apptize"
          style={{ width: "50px", height: "auto" }}
        />
        <Link to="/">
          {" "}
          <h2
            className="header--title"
            style={{
              fontFamily: "Lobster Two, cursive",
              fontWeight: 500,
              letterSpacing: "0.05em",
              fontSize: "2.3rem",
            }}
          >
            Apptize
          </h2>
        </Link>{" "}
      </div>

      <div className="header--box">
        <div>
          <Link to="/signup">Sign Up</Link>
        </div>{" "}
        |
        <div>
          <Link to="/signin">Sign In</Link>
        </div>
      </div>
    </header>
  );
}

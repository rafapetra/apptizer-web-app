import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import logo from "../images/logo.png";

export default function Header() {
  const [toggleMenu, setToggleMenu] = React.useState(false);

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
          className="logo"
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
        </div>
        |
        <div>
          <Link to="/signin">Sign In</Link>
        </div>
      </div>
      
             <div className="navbar-smallscreen">


      
        <GiHamburgerMenu color="fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (

<div className="navbar-smallscreen_overlay flex__center slide-bottom">

          
          <MdOutlineRestaurantMenu
            fontSize={27}
            className="overlay__close"
            onClick={() => setToggleMenu(false)} 
          />

          <ul className="navbar-smallscreen_link">
           <li> <Link to="/dashboard" onClick={() => setToggleMenu(false)}>Dashboard</Link></li>
           <li> <Link to="/signin" onClick={() => setToggleMenu(false)}>Manage Pantry </Link></li>
          </ul>
        </div>
        )}
        
      </div>

    </header>
  );
}

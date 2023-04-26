import React from "react"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
      <h2 className="header--title" style={{ fontFamily: "Signika, sans-serif", fontWeight: 500, letterSpacing: "-0.04em", fontSize: "2rem"}}>Apptize</h2>
            <div className="header--box">
                <div><Link to="/signup">Sign Up</Link></div> |
                <div><Link to="/signin">Sign In</Link></div>
            </div> 
            

        </header>
        
    )
}
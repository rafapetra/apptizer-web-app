import React from "react"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
   <Link to="/">  <h2 className="header--title" style={{ fontFamily: "Lobster Two, cursive", fontWeight: 500, letterSpacing: "0.05em", fontSize: "1.8rem"}}>Apptize</h2>
   </Link> 
            <div className="header--box">
                <div><Link to="/signup">Sign Up</Link></div> |
                <div><Link to="/signin">Sign In</Link></div>
            </div> 
            

        </header>
        
    )
}
import React from "react"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <h2 className="header--title">Apptize</h2>
            <div className="header--box">
                <Link to="/signup">Sign Up</Link> -  
                <Link to="/signin">Sign In</Link>
            </div> 
            

        </header>
        
    )
}
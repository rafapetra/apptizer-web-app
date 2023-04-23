import React from "react"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <h2 className="header--title">Apptize</h2> 
            <Link to="/">Home</Link>
            <Link to="/content">Sign In</Link>
        </header>
        
    )
}
import React from "react"
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="menu">
           <div><Link to="/dashboard">Dashboard</Link></div>
           <div><Link to="/additems">Manage Pantry</Link></div>
        </div>
    )
}
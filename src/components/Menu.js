import React from "react"
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="menu">
           <div><Link to="/">Dashboard</Link></div>
           <div><Link to="/additems">Add Items</Link></div>
        </div>
    )
}
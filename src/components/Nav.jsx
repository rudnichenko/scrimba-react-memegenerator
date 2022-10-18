import React from "react";
import logo from "../assets/trollface.svg";

export default function Nav() {
    return (
        <nav className="nav--body">
            <div className="nav--body_left">
                <img src={logo} alt="Logo" />
                <h1>Meme Generator</h1>
            </div>
            <p className="nav--body_right">React Course - Project 4</p>
        </nav>
    )
}
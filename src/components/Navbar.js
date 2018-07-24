import React from "react";


const Navbar = (props) => (
    <nav className="navbar navbar-light shadow">
        <span className="col navbar-brand mb-0 h1">Foster's Home for Imaginary Friends Memory Game</span>
        <span className="col text-center navbar-brand mb-0 h1">{props.children}</span>
        <span className="col text-right">Score: {props.score} | Top Score: {props.topScore}</span>
    </nav>
)

export default Navbar;
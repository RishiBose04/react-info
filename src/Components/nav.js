import React from "react";
import logo from "./logo.png";

export default function Navbar(){
    return (
    <nav>
    <img src={logo} alt="summa" width="60px"/>
    <h3>ReactFacts</h3>
    <h4>React Course-Project</h4>
    </nav>)
}
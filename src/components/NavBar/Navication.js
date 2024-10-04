import React from "react";
import { Link } from "react-router-dom";
import '../../css/navication.css';
export default function Navication (){
    return(
        <nav className="mainNav">
            <div className="logoSection">
                <img src='/images/logo.jpg' alt="Michael-UI-Developer-Logo" className="mainLogo" />
            </div>
            <ul className="navList">
                <li className="listItem">
                    <Link to='/'> Home </Link>
                </li>
                <li className="listItem">
                    <Link to='/about'> About </Link>
                </li>
                <li className="listItem">
                    <Link to='/user'> User </Link>
                </li>
                <li className="listItem">
                    <Link to='/contact'> Contact </Link>
                </li>
            </ul>
        </nav>
    )
}
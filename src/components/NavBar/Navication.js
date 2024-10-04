import React from "react";
import { Link } from "react-router-dom";
import '../../css/navication.css';
export default function Navication (){
    return(
        <header className="mainHeader">
            <nav className="mainNav">
                <div className="logoSection">
                    <Link to='/'>
                        <img src='/images/logo.jpg' alt="Michael-UI-Developer-Logo" className="mainLogo" />
                    </Link>
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
        </header>
    )
}
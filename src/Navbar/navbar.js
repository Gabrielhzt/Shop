import React from "react";
import './navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>WattWheels</h1>
            <div>
            <FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#000000",}} />
            <p className="total">1</p>
            </div>
        </div>
    )
}

export default Navbar;
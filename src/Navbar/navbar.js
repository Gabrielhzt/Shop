import React from "react";
import './navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const totalItems = useSelector(state => state.product.totalItems);

    return (
        <div className="navbar">
            <h1>WattWheels</h1>
            <div>
            <FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#000000",}} />
            <p className="total">{totalItems}</p>
            </div>
        </div>
    )
}

export default Navbar;
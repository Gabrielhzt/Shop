import React from "react";
import './cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
    return (
        <div className="cart">
            <h1 className="title">Your WattWheels Cart</h1>
            <div className="all">
                <div className="product">
                    <div className="left">
                        <img src="./img2.jpg" />
                        <div className="name">
                            <h3>WattWheels 1</h3>
                            <p>Remove</p>
                        </div>
                    </div>
                    <div className="right">
                        <button className="arrow">
                            <FontAwesomeIcon icon={faChevronUp} size="xl" />
                        </button>
                        <p>1</p>
                        <button className="arrow">
                            <FontAwesomeIcon icon={faChevronDown} size="xl" />
                        </button>
                    </div>
                </div>
                <div className="product">
                    <div className="left">
                        <img src="./img2.jpg" />
                        <div className="name">
                            <h3>WattWheels 2</h3>
                            <p>Remove</p>
                        </div>
                    </div>
                    <div className="right">
                        <button className="arrow">
                            <FontAwesomeIcon icon={faChevronUp} size="xl" />
                        </button>
                        <p>1</p>
                        <button className="arrow">
                            <FontAwesomeIcon icon={faChevronDown} size="xl" />
                        </button>
                    </div>
                </div>
                <div className="product">
                    <div className="left">
                        <img src="./img2.jpg" />
                        <div className="name">
                            <h3>WattWheels 3</h3>
                            <p>Remove</p>
                        </div>
                    </div>
                    <div className="right">
                        <button className="arrow">
                            <FontAwesomeIcon icon={faChevronUp} size="xl" />
                        </button>
                        <p>1</p>
                        <button className="arrow">
                            <FontAwesomeIcon icon={faChevronDown} size="xl" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="price">
                <h3>Total</h3>
                <h3>3.500$</h3>
            </div>
            <div className="btn-clear">
                <button className="clear-all">Clear Cart</button>
            </div>
        </div>
    )
}

export default Cart;
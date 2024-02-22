// Cart.js
import React from "react";
import './cart.css';
import Products from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, zero, remove, selectCount, selectTotalPrice } from '../features/productSlice';

const CartItem = ({ product, dispatch }) => {
    const count = useSelector(state => selectCount(state, product.id));

    if (count === 0) {
        // Si la quantité est 0, ne pas afficher le produit
        return null;
    }

    return (
        <div className="product">
            <div className="left">
                <img src="./img2.jpg" alt={`Product ${product.id}`} />
                <div className="name">
                    <div>
                        <h3>{product.name}</h3>
                        <p>{product.price}$</p>
                    </div>
                    <p onClick={() => dispatch(remove(product.id))} className="remove-button">Remove</p>
                </div>
            </div>
            <div className="right">
                <button className="arrow" onClick={() => dispatch(increment(product.id))}>
                    <FontAwesomeIcon icon={faChevronUp} size="xl" />
                </button>
                <p>{count}</p>
                <button className="arrow" onClick={() => dispatch(decrement(product.id))}>
                    <FontAwesomeIcon icon={faChevronDown} size="xl" />
                </button>
            </div>
        </div>
    );
};

const Cart = () => {
    const dispatch = useDispatch();
    const totalPrice = useSelector(selectTotalPrice);

    return (
        <div className="cart">
            <h1 className="title">Your WattWheels Cart</h1>
            <div className="all">
                {Products.map((product) => (
                    <CartItem key={product.id} product={product} dispatch={dispatch} />
                ))}
            </div>
            <div className="price">
                <h3>Total</h3>
                <h3>{totalPrice}$</h3>
            </div>
            <div className="btn-clear">
                <button onClick={() => dispatch(zero())} className="clear-all">Clear Cart</button>
            </div>
        </div>
    );
};

export default Cart;

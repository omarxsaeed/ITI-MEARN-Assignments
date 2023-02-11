import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
    let cart = useSelector((state) => state.cartReducer.cart);
    let counter = useSelector((state) => state.counterReducer.counter);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    Navbar
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies">
                                Movies
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link position-relative" to="/counter">
                                Counter
                                <span className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-danger">
                                    {counter}
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link position-relative" to="/cart">
                                Shopping Cart
                                <span className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cart.length}
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;

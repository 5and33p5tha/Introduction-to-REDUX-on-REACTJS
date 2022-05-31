//Name of All Components Should Be Capital
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  //The following use Selector is To Show Number of items in cart
  const no_in_cart = useSelector((store) => store.cart.cart_items);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link position-relative" to="/Cart">
                  Cart
                  <span
                    className="position-absolute top-20 start-99 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "7px" }}
                  >
                    {no_in_cart.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
              <li>
                {/* <h3>No of items in cart is:  {no_in_cart.length}</h3> */}
                {/* Here, As items are as array, so each items has one array index cart.length gives the total array index of no_in_cart which is also the total items in cart  */}
                {/* In short, length gives total cart items (similar to array concept) */}

                {/* Now Doing the same in Badge In Above CART*/}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

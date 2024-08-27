import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import blogContext from "../Context/blogs/BlogContext";
import "./Navbar.css";

const Navbar = (props) => {
  const context = useContext(blogContext);
  const {
    state: { cart },
  } = context;

  return (
    <nav className="navbar navbar-expand-lg custom-bgcolor">
      <div className="container-fluid">
        {/* Title with enhanced styling */}
        <Link className="navbar-brand title" to="/">
          MindRiser School
        </Link>
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
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign">
                SignIn
              </Link>
            </li>
            
          </ul>
          {/* Cart button with badge */}
          <Link to="/cart">
            <button type="button" className="btn btn-primary position-relative">
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              )}
            </button>
          </Link>
          {/* Mode toggle button */}
          <button className="btn btn-primary ms-2" onClick={props.toggleMode}>
            {props.text}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

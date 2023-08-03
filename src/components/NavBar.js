import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isRotated, setIsRotated] = useState(false);
  function handleBurger() {
    setIsRotated(!isRotated)
  }

  function closeBurger() {
    setIsRotated(false)
  }
  // document.querySelector(".navbar"). 
  return (
    <header>
      <div className="title-cont">
        <Link to={"/"}>
          <div className="tt">The</div>
          <div className="th">Siren</div>
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          size="xl"
          className={`burger-icon ${isRotated ? 'burger-tn' : ''}`}
          onClick={handleBurger}
        />
        {/* <div className="get_started">
          Get Started
        </div> */}
      </div>

      <nav className={`navbar ${isRotated ? 'active' : ''}`}>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "grey" : "black",
              })} onClick={closeBurger}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bollywood"
              style={({ isActive }) => ({
                color: isActive ? "grey" : "black",
              })} onClick={closeBurger}
            >
              Bollywood
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              style={({ isActive }) => ({
                color: isActive ? "grey" : "black",
              })} onClick={closeBurger}
            >
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hollywood"
              style={({ isActive }) => ({
                color: isActive ? "grey" : "black",
              })} onClick={closeBurger}
            >
              Hollywood
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fitness"
              style={({ isActive }) => ({
                color: isActive ? "grey" : "black",
              })} onClick={closeBurger}
            >
              Fitness
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/food"
              style={({ isActive }) => ({
                color: isActive ? "grey" : "black",
              })} onClick={closeBurger}
            >
              Food
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

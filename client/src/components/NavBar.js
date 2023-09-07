import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  //state to maintain whether the hamburger icon is open or not
  const [isRotated, setIsRotated] = useState(false);

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
          className={`burger-icon ${isRotated && 'burger-tn'}`}
          onClick={() => setIsRotated(!isRotated)}
        />
      </div>

      <nav className={`navbar ${isRotated && 'active'}`}>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "grey" : "black",
              })} onClick={() => setIsRotated(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bollywood"
              style={({ isActive }) => ({
                color: isActive ? "grey" : "black",
              })} onClick={() => setIsRotated(false)}
            >
              Bollywood
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              style={({ isActive }) => ({
                color: isActive ? "grey" : "black",
              })} onClick={() => setIsRotated(false)}
            >
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hollywood"
              style={({ isActive }) => ({
                color: isActive ? "grey" : "black",
              })} onClick={() => setIsRotated(false)}
            >
              Hollywood
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fitness"
              style={({ isActive }) => ({
                color: isActive ? "grey" : "black",
              })} onClick={() => setIsRotated(false)}
            >
              Fitness
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/food"
              style={({ isActive }) => ({
                color: isActive ? "grey" : "black",
              })} onClick={() => setIsRotated(false)}
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

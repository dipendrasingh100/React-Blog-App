import React from 'react'
import { Link } from 'react-router-dom';
import "../css/navbar.css"

const NavBar2 = () => {
    return (
        <header>
            <div className="title-cont nav2">
                <Link to={"/"}>
                    <div className="tt">The</div>
                    <div className="th">Siren</div>
                </Link>
                <div className="get_started">
                    Get Started
                </div>
            </div>
        </header>
    )
}

export default NavBar2

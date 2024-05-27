import React from 'react';
import './Navbar.css';  // Import the CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">HobbyCue</div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="nav-items">
                <div className="dropdown">
                    <button className="dropbtn">Explore</button>
                    <div className="dropdown-content">
                        <a href="#">Explore 1</a>
                        <a href="#">Explore 2</a>
                        <a href="#">Explore 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Hobbies</button>
                    <div className="dropdown-content">
                        <a href="#">Hobby 1</a>
                        <a href="#">Hobby 2</a>
                        <a href="#">Hobby 3</a>
                    </div>
                </div>
                <a href="#"><i className="fas fa-bookmark"></i></a>
                <a href="#"><i className="fas fa-bell"></i></a>
                <a href="#"><i className="fas fa-shopping-cart"></i></a>
                <a href="#" className="signin">Sign In</a>
            </div>
        </nav>
    );
}

export default Navbar;

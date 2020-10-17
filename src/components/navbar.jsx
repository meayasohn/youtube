import React from 'react';

const Navbar = (props) => {
  return (
    <div className="navbar">
        <img className="navbar-icon" src="favicon.ico" alt=""/>
        <span className="navbar-title">Youtube</span>
        <input className="search-bar" type="text" value="Search.."/>
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
    </div>
  );
}

export default Navbar;
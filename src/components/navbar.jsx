import React from 'react';

const Navbar = (props) => {
  const inputRef = React.createRef();

  const onClickSearchBtn=(event)=>{
    props.onClickSearch(inputRef.current.value);
  }

  return (
    <div className="navbar">
        <img className="navbar-icon" src="../../public/images/logo.png" alt=""/>
        <span className="navbar-title">Youtube</span>
        <input 
          ref = {inputRef}
          className="search-bar" 
          type="text" />
        <button className="search-button" onClick={onClickSearchBtn}>
          <i className="fas fa-search"></i>
        </button>
    </div>
  );
}

export default Navbar;
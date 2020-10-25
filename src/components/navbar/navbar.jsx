import React, { memo } from 'react';
import { useRef } from 'react';
import style from "./navbar.module.css";

const Navbar = memo(({onClickSearch}) => {
    // const inputRef = React.createRef();
      const inputRef = useRef();
  
    const handleSearch=() =>{
      onClickSearch(inputRef.current.value);
    }
  
    const onKeyPress =(event)=>{
      if(event.key !='Enter')
        return;
      handleSearch();
    }
  
    const onClickSearchBtn=(event)=>{
      handleSearch();
    }
  
    return (
      <header className={style.navbar}>
        <div className={style.navbaricon}>
          <img 
          src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo"/>
          <h1 className={style.navbartitle}>Youtube</h1>
        </div>
        <input 
          ref = {inputRef}
          className={style.search}
          type="search"
          placeholder="Search.." 
          onKeyPress={onKeyPress}
        />
        <button className={style.button} type="submit" onClick={onClickSearchBtn}>
          <img
          className={style.buttonImg} 
          src={process.env.PUBLIC_URL + '/images/search.png'} alt=""/>
        </button>
      </header>
    );
});

export default Navbar;
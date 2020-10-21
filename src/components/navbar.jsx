import React from 'react';
import { useRef } from 'react';
import style from "./navbar.module.css";

const Navbar = ({onClickSearch}) => {
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
    <div className={style.navbar}>
        <img className={style.navbaricon} src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo"/>
        <p className={style.navbartitle}>Youtube</p>
        <input 
          ref = {inputRef}
          className={style.searchbar}
          type="search"
          placeholder="Search.." 
          onKeyPress={onKeyPress}/>
        <button className={style.searchbutton} >
          <img src={process.env.PUBLIC_URL + '/images/search.png'} alt=""/>
        </button>
    </div>
  );
}

export default Navbar;
import React from "react";
import Head from '../../Components/Header/Header.png'
import './Header.css'

function Header() {
  return <header className="header">
    <img className="headerP" src={Head}/>
  </header> 
}

export default Header;

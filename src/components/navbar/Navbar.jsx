import React, { useState } from "react";
import "./Navbar.css";
import { BiMenu } from "react-icons/bi";
// import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
// import { TiMessages } from "react-icons/ti";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { IoSearchOutline } from "react-icons/io5";
// import { FaHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";



const Navbar = () => {
  
  const [first, setfirst] = useState(false);
  const Myfun = () => {
    if (first === false) {
      setfirst(true);
    } else {
      setfirst(false);
    }
  };
  const [catalog, setCatalog] = useState(false)
  return (
    
      <div className="Navbar">

        <div className="Navbar-first-page">
          <div className="logo"></div>
          <div className="no-active"></div>
          <div className="catalog" onMouseEnter={()=>setCatalog(false)} onClick={()=>setCatalog(true)} >
            
            <BiMenu className="catalog-menu"/>
            <p>Catalog</p>
            {
              catalog && <div  className="catalog-box-item"onMouseLeave={()=>setCatalog(false)} onClick={()=>setCatalog(true)}>
                <h1>catalog</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
            }
          </div>
          <div className="search-page">
            <IoIosSearch className="search-icon"/>
            <input type="search" />
            
          </div>
          <div className="navbar-item-page">
            <div className="navbar-item-page1">
            <Link to="./login">  <  RiAccountPinCircleFill className="login-icon"   /></Link>
              <p>Account</p>
            </div>
            <div className="navbar-item-page2">
              <FaHeart className="heart"/>
              <p>favourite</p>
            </div>
            <div className="navbar-item-page3">
            <Link to="/cart">
                  <BsCartFill className="card-icon" />
            </Link>
              <p>Card</p>
            </div>
          </div>
        </div>
        <div className="Navbar-enth-page">
        <div className="header-catalog">
          
            <BiMenu className="catalog-menu"/>
        </div>
        <div className="header-search-page">
            <IoIosSearch className="search-icon"/>
            <input type="search" />
          </div>
        </div>
      </div>
    
  );
};

export default Navbar;

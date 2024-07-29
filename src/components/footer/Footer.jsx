import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Footer (){
    return(
        <div className="Footer">
            <div className="footer-page">
            <div className="home-box">
                <Link to ="./" >
                    <FaHome className="home-icon-box
                    "/>
                    
                </Link>
                <p>home</p>

            </div>
            <div className="login-boxt">
                <Link to="./login">
                    <FaUser className="login-icon-box"/>
                    
                </Link>
                <p>login</p>

            </div>
            <div className="heart-box">
                <FaHeart className="heart-icon-box"/>
                <p>heart</p>
            </div>
            <div className="card-box">
                <Link to='./cart'>
                    <FaShoppingCart className="cart-icon-box"/>
                   
                </Link>
                <p>Card</p>
            </div>

            </div>
            

        </div>
    )
}
export default Footer
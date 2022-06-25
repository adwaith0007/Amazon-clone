import React from "react";
import Logo from "./Assets/Amazon-logo.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './NavBar.css'

function NavBar() {
  const items = useSelector(state => state.cart)
  return (
    <div className="navbar">
      <Link to="/">
      
     <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
          </Link>
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>

        </Link>
        

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        
            <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            
            <span className="header__optionLineTwo header__basketCount">
              {items?.length}
            </span>
          </div>
            </Link>
        
      </div>
    </div>
  );
}

export default NavBar;

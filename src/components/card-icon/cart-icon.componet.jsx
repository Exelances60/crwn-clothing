import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIscartOpen, cartCount } = useContext(CartContext);
  const toggleIsCardOpen = () => {
    setIscartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCardOpen}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;

import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.componet";
import CartItem from "../cart-item/cart-item.componet";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO Checkout</Button>
    </div>
  );
};
export default CartDropdown;

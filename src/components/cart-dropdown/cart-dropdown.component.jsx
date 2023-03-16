import React from "react";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      {cartItems.map((cartItem) => {
        return (
          <div key={cartItem.key} className="cart-items">
            <CartItem cartItem={cartItem}></CartItem>
          </div>
        );
      })}
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

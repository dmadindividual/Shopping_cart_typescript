import CartItem from "../CartItem/CartItem";
import { Wrapper } from './Cart.styles';
import { CartItemType } from "../App";
import React from "react";

type Props = {
  cartItems: CartItemType[]; // Changed 'CartItem' to 'cartItems' for clarity
  addToCart: (clicked: CartItemType) => void; // Fixed the return type
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items:CartItemType[]) =>items.reduce((ack: number, item)=> ack + item.amount * item.price, 0 )
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Oh no..... Please go and pick what you want</p> : null}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;

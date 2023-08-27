// Cart.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/slices/cartSlice';
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ id, title, img, quantity, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <input type="number" readOnly value={quantity} />
      <button onClick={() => increment(id)}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const increment = (itemId) => {
    dispatch(addToCart({ id: itemId }));
  };

  const decrement = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  // Calculer les totaux (sous-total, TVA, etc.) en utilisant les articles du panier
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.18;
  const deliveryFee = 200;

  return (
    <section className="cart">
      <main>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            quantity={item.quantity}
            increment={increment}
            decrement={decrement}
          />
        ))}
        <article>
          <div>
            <h4>Sous-total</h4>
            <p>₹{subtotal}</p>
          </div>
          <div>
            <h4>TVA</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Frais de livraison</h4>
            <p>₹{deliveryFee}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{subtotal + tax + deliveryFee}</p>
          </div>
          <div className="payment-links">
            <Link to="/#menu">Revenir au Menu</Link>
            <Link to="/shipping" className={subtotal === 0 ? "disabled" : ""}>Payer</Link>
          </div>

        </article>
      </main>
    </section>
  );
};

export default Cart;


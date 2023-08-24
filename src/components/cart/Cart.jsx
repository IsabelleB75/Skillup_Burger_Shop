import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [values, setValues] = useState({
    1: 0,
    2: 0,
    3: 0
  });

  const increment = (item) => {
    setValues(prevValues => ({
      ...prevValues,
      [item]: prevValues[item] + 1
    }));
  };

  const decrement = (item) => {
    setValues(prevValues => ({
      ...prevValues,
      [item]: Math.max(prevValues[item] - 1, 0)
    }));
  };

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={values[1]}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={values[2]}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Cheese Burger avec Frites"}
          img={burger3}
          value={values[3]}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

       

        <article>
          <div>
            <h4>Sous-total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>TVA</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Frais de livraison</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Payer</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;

// MenuCard.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';  // Ajustez le chemin d'accès si nécessaire

const MenuCard = ({ itemNum, burgerSrc, price, title, delay = 0 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    console.log("Button clicked for item:", itemNum);
    dispatch(addToCart({
        id: itemNum,
        title: title,
        img: burgerSrc,
        price: price
    }));
    setIsModalOpen(true);
    setTimeout(() => setIsModalOpen(false), 2000);  // Ferme le modal après 2 secondes
  };

  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div></div>
      <main>
        <img src={burgerSrc} alt={itemNum} />
        <h5>₹{price}</h5>
        <p>{title}</p>
        <button type="button" onClick={handleButtonClick}>Buy Now</button>
        
        {isModalOpen && (
            <div className="custom-modal">
                Added to cart!
            </div>
        )}
      </main>
    </motion.div>
  );
};

export default MenuCard;

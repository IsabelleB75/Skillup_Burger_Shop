// MyOrders.jsx

import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useSelector } from 'react-redux';  // Importer useSelector

const MyOrders = () => {
  const orders = useSelector(state => state.orders.orders);  // Obtenir les commandes du state Redux

  // Calculer la quantité totale et le montant pour une commande
  const getTotalQuantityAndAmount = (items) => {
    let totalQuantity = 0;
    let totalAmount = 0;

    items.forEach(item => {
      totalQuantity += item.quantity;
      totalAmount += item.price * item.quantity;
    });

    return { totalQuantity, totalAmount };
  };

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Numéro de commande</th>
              <th>État</th>
              <th>Qté</th>
              <th>Montant</th>
              <th>Mode de paiement</th>
              <th>Suivi</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              const { totalQuantity, totalAmount } = getTotalQuantityAndAmount(order.items);
              
              return (
                <tr key={index}>
                  <td>#{order.id}</td>
                  <td>En cours de traitement</td>
                  <td>{totalQuantity}</td>
                  <td>${order.totalAmount}</td> {/* Utiliser le montant total de la commande (incluant TVA + frais de livraison) */}
                  <td>CB</td>
                  <td>
                    <Link to={`/order-details/${order.id}`}>
                      <AiOutlineEye />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;

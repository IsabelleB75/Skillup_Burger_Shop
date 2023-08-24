import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [1, 2, 3, 4]; // Ceci est votre tableau d'origine. Vous pouvez remplacer cela par vos données réelles.

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
            {arr.map((i) => (
              <tr key={i}>
                <td>#sdkfsdfdsf</td>
                <td>En cours de traitement</td>
                <td>23</td>
                <td>${2132}</td>
                <td>CB</td>
                <td>
                  <Link to={`/order-details/${i}`}>  {/* Modification ici */}
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;


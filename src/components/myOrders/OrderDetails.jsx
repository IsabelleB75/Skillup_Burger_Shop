// OrderDetails.jsx

import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom/dist";

const OrderDetails = () => {
    const { id } = useParams();
    const orders = useSelector(state => state.orders.orders);
    const order = orders.find(order => order.id === Number(id));

    if (!order) {
        return <p>Commande non trouvée</p>;
    }

    return (
        <section className="orderDetails">
            <main>
                <h1>Détails de la commande</h1>
                
                <div>
                    <h1>Livraison</h1>
                    <p><b>Adresse</b>: {order.shippingDetails.address}</p>
                    <p><b>Ville</b>: {order.shippingDetails.city}</p>
                    <p><b>Pays</b>: {order.shippingDetails.country}</p>
                    <p><b>État/Région</b>: {order.shippingDetails.state}</p>
                    <p><b>Code postal</b>: {order.shippingDetails.postalCode}</p>
                </div>

                <div>
                    <h1>Contact</h1>
                    <p><b>Nom</b>: {order.shippingDetails.firstName} {order.shippingDetails.lastName}</p>
                    <p><b>N° de téléphone</b>: {order.shippingDetails.phone}</p>
                </div>

                <div>
                    <h1>État</h1>
                    <p><b>Etat de la commande</b>: En cours de traitement</p>
                    <p><b>Déposée le</b>: {new Date(order.date).toLocaleDateString()}</p>
                </div>

                <div>
                    <h1>Paiement</h1>
                    <p><b>Mode de paiement</b>: CB</p>
                    <p><b>Référence du paiement</b>: #{order.id}</p>
                </div>

                <div>
                    <h1>Montant</h1>
                    <p><b>Sous-total</b>: ${order.totalAmount - order.tax - order.shippingFee}</p>
                    <p><b>Frais de livraison</b>: ${order.shippingFee}</p>
                    <p><b>TVA</b>: ${order.tax}</p>
                    <p><b>Montant total</b>: ${order.totalAmount}</p>
                </div>

                <article>
                    {console.log(order.items)} 
                    <h1>Articles commandés</h1>
                    {order.items.map((item, index) => (
                        <div key={index}>
                            <h4>{item.title}</h4>
                            <div><span>{item.quantity}</span> x <span>${item.price}</span> = <span>${item.quantity * item.price}</span></div>
                        </div>
                    ))}
                    <div style={{ fontWeight: 800 }}>
                        <h4>Sous-total</h4>
                        <div>${order.totalAmount - order.shippingFee - order.tax}</div>
                    </div>
                    <div style={{ fontWeight: 800 }}>
                        <h4>Total</h4>
                        <div>${order.totalAmount}</div>
                    </div>
                </article>
                
                <article>
                    <h1>Merci de votre commande!</h1>
                    <Link to="/#burger-shop" className="return-button">Revenir à l'Accueil</Link>
                </article>
            </main>
        </section>
    );
};

export default OrderDetails;


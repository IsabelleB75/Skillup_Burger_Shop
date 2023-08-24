import React from "react";

const OrderDetails = () => {
    return (
        <section className="orderDetails">
            <main>
                <h1>Détails de la commande</h1>
                
                <div>
                    <h1>Livraison</h1>
                    <p><b>Adresse</b>: {"sjda 12-32ss dsad"}</p>
                </div>

                <div>
                    <h1>Contact</h1>
                    <p><b>Nom</b>: {"Stuart"}</p>
                    <p><b>N° de téléphone</b>: {2131232123}</p>
                </div>

                <div>
                    <h1>État</h1>
                    <p><b>Etat de la commande</b>: {"En cours de traitement"}</p>
                    <p><b>Déposée le</b>: {'samedi 23 février 2002'}</p>
                    <p><b>Délivré le</b>: {'dimanche 23 février 2003'}</p>
                </div>

                <div>
                    <h1>Paiement</h1>
                    <p><b>Mode de paiement</b>: {"CB"}</p>
                    <p><b>Référence du paiement</b>: #{"asdasdsadsad"}</p>
                    <p><b>Payé le</b>: {'dimanche 23 février 2003'}</p>
                </div>

                <div>
                    <h1>Montant</h1>
                    <p><b>Sous-total</b>: ${2132}</p>
                    <p><b>Frais de livraison</b>: ${200}</p>
                    <p><b>TVA</b>: ${232}</p>
                    <p><b>Montant total</b>: ${232 + 200 + 2132}</p>
                </div>

                <article>
                    <h1>Articles commandés</h1>
                    
                    <div>
                        <h4>Cheese Burger</h4>
                        <div><span>{12}</span> x <span>{232}</span></div>
                    </div>
                    
                    <div>
                        <h4>Cheese Burger Vegane</h4>
                        <div><span>{10}</span> x <span>{500}</span></div>
                    </div>
                    
                    <div>
                        <h4>Burger avec frites</h4>
                        <div><span>{10}</span> x <span>{1800}</span></div>
                    </div>
                    
                    <div>
                        <h4 style={{ fontWeight: 800 }}>Sous-total</h4>
                        <div style={{ fontWeight: 800 }}>${2132}</div>
                    </div>
                </article>
            </main>
        </section>
    );
};

export default OrderDetails;


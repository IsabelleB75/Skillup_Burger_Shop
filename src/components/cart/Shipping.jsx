import React, { useState } from "react";
import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleConfirmClick = (e) => {
        e.preventDefault(); // Empêche la soumission du formulaire
        setShowPopup(true);
    };

    return (
        <section className="shipping">
            <main>
                <h1>Détails de la livraison</h1>
                <form>
                    <div>
                        <label>Adresse</label>
                        <input type="text" placeholder="Introduisez votre adresse" />
                    </div>
                    <div>
                        <label>Ville</label>
                        <input type="text" placeholder="Introduisez votre ville" />
                    </div>
                    <div>
                        <label>Pays</label>
                        <select>
                            <option value="">Sélectionnez un pays</option>
                            {Country && Country.getAllCountries().map((i) => (
                                <option value={i.isoCode} key={i.isoCode}>
                                    {i.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>État/Région</label>
                        <select>
                            <option value="">Sélectionnez un état/région</option>
                            {State && State.getStatesOfCountry("IN").map((i) => (
                                <option value={i.isoCode} key={i.isoCode}>
                                    {i.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Code postal</label>
                        <input type="number" placeholder="Introduisez votre code postal" />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <label>N° de téléphone</label>
                        <input type="number" placeholder="Introduisez votre n° de téléphone" />
                    </div>
                    <button className="link" onClick={handleConfirmClick}> Confirmer la commande </button>

                    {showPopup && (
                        <div 
                            style={{
                                position: 'fixed',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 1000,
                                backgroundColor: "#fff",
                                padding: "20px",
                                borderRadius: "5px",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                                textAlign: "center"
                            }}
                        >
                            Votre commande est en cours de traitement !
                            <br />
                            <button
                                className="popup-btn"
                                onClick={() => {
                                    setShowPopup(false);
                                    navigate("/myorders");
                                }}
                                style={{
                                    marginTop: "20px",
                                    padding: "10px 20px",
                                    backgroundColor: "rgb(156, 0, 60)",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "15px",
                                    cursor: "pointer",
                                    transition: "background-color 0.3s"
                                }}
                            >
                                OK
                            </button>
                        </div>
                    )}
                </form>
            </main>
        </section>
    );
};

export default Shipping;

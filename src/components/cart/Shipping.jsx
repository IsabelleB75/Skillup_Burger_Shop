import React, { useState } from "react";
import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../redux/slices/ordersSlice';
import { clearCart } from '../../redux/slices/cartSlice';

const Shipping = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);
    const [showPopup, setShowPopup] = useState(false);
    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const navigate = useNavigate();

    const [shippingDetails, setShippingDetails] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        state: '',
        postalCode: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleConfirmClick = (e) => {
        e.preventDefault();
        
        const allFieldsFilled = Object.values(shippingDetails).every(field => field !== '');
        
        if (!allFieldsFilled) {
            setShowErrorDialog(true);
            return;
        }
    
        const subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const tax = 0.18 * subTotal;
    
        const order = {
            id: new Date().getTime(),
            shippingDetails,
            items: cartItems,
            date: new Date().toISOString(),
            tax,
            shippingFee: 200,
            totalAmount: subTotal + tax + 200
        };
    
        dispatch(addOrder(order));
        dispatch(clearCart());
    
        setShowPopup(true);
    };

    return (
        <section className="shipping">
            <main>
                <h1>Détails de la livraison</h1>
                <form>
                    <div>
                        <label>Prénom</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            placeholder="Introduisez votre prénom"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Nom</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            placeholder="Introduisez votre nom" 
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Adresse</label>
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="Introduisez votre adresse" 
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Ville</label>
                        <input 
                            type="text" 
                            name="city" 
                            placeholder="Introduisez votre ville" 
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Pays</label>
                        <select 
                            name="country"
                            onChange={handleInputChange}
                        >
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
                        <select 
                            name="state"
                            onChange={handleInputChange}
                        >
                            <option value="">Sélectionnez un état/région</option>
                            {State && State.getStatesOfCountry(shippingDetails.country).map((i) => (
                                <option value={i.isoCode} key={i.isoCode}>
                                    {i.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Code postal</label>
                        <input 
                            type="number" 
                            name="postalCode" 
                            placeholder="Introduisez votre code postal" 
                            onChange={handleInputChange}
                        />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <label>N° de téléphone</label>
                        <input 
                            type="number" 
                            name="phone" 
                            placeholder="Introduisez votre n° de téléphone" 
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type="button" className="link" onClick={handleConfirmClick}> 
                        Confirmer la commande 
                    </button>
                </form>
                
                {showErrorDialog && (
                    <div 
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1001,
                            backgroundColor: "#fff",
                            padding: "20px",
                            borderRadius: "5px",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                            textAlign: "center"
                        }}
                    >
                        Veuillez remplir tous les champs avant de confirmer la commande.
                        <br />
                        <button 
                            type="button"
                            className="popup-btn"
                            onClick={() => setShowErrorDialog(false)}
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
                            Fermer
                        </button>
                    </div>
                )}

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
                            type="button"
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
            </main>
        </section>
    );
};

export default Shipping;

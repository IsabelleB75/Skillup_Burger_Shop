import React, { useState } from "react";
import { motion } from "framer-motion"; 
import burger from "../../assets/burger2.png"; 
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSendClick = () => {
        const allFieldsFilled = Object.values(formData).every(field => field.trim() !== '');
        
        if (!allFieldsFilled) {
            setShowErrorDialog(true);
            return;
        }
        
        setShowSuccessDialog(true);
    };

    return (
        <section className="contact">
            <motion.form
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}>
                <h2>Nous contacter</h2>
                <input type="text" name="name" placeholder="Nom" onChange={handleInputChange} />
                <input type="text" name="email" placeholder="Mail" onChange={handleInputChange} />
                <textarea 
                    name="message"
                    placeholder="Message..." 
                    cols="30" 
                    rows="10"
                    onChange={handleInputChange}></textarea>
                <button type="button" onClick={handleSendClick}>Envoyer</button>

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
                        Veuillez remplir tous les champs avant d'envoyer.
                        <br />
                        <button 
                            type="button"
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

                {showSuccessDialog && (
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
                        Merci de nous avoir contactés ! Nous vous répondrons dans les plus brefs délais.
                        <br />
                        <button 
                            type="button"
                            onClick={() => {
                                setShowSuccessDialog(false);
                                navigate('/');
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
                            Fermer
                        </button>
                    </div>
                )}

            </motion.form>
            <motion.div className="formBorder" initial={{ x: "100vw", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <motion.div initial={{ y: "-100vh", x: "50%", opacity: 0 }} animate={{ x: "50%", y: "-50%", opacity: 1 }} transition={{ delay: 1 }}>
                    <img src={burger} alt="Burger" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;

import React from "react";
import { motion } from "framer-motion"; 
import Founder from "./Founder"; 
import Menu from "./Menu";

const Home = () => {
    const options = {
        initial: {
            x: "-100%",
            opacity: 0
        },
        whileInView: {
            x: 0,
            opacity: 1
        }
    };

    const scrollToMenu = () => {
        const menuElement = document.getElementById("menu");
        if (menuElement) {
            menuElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <section className="home">
                <div>
                    <motion.h1 id="burger-shop" {...options}>
                        Burger Shop
                    </motion.h1>
                    <motion.p {...options} transition={{ delay: 0.2 }}>
                        Prennez le temps de vous offrir un savoureux burger.
                    </motion.p>
                </div>
                <motion.a
                    onClick={scrollToMenu}
                    initial={{
                        y: "-100%",
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ delay: 0.4 }}
                    className="action-link"
                    style={{ fontSize: "0.9rem", marginTop: "8rem" }}  // J'ai augmenté cette valeur
                >
                    Consulter le Menu
                </motion.a>
            </section>
            <Menu />
            <Founder />
        </>
    );
};

export default Home;

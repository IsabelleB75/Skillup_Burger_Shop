// Write all the code here
import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri"; import me from "../../assets/skj.jpg";
const About = () => {
  return (
<section className="about"> <main>
        <h1>A propos</h1>
        <article>
          <h4>Burger Shop</h4>
          <p>
Nous sommes Burger Shop. L’endroit où l’on trouve les burgers les
            plus savoureux du monde.
          </p>
<p>
Découvrez les différents plats et burgers. Cliquez ci-dessous pour consulter notre carte
</p>
<Link to="/"> <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Fondateur</h2>
          <article>
<div>
<img src={me} alt="Fondateur" /> <h3>Nelson</h3>
</div>
<p>
Je suis Nelson, le fondateur de Burger Shop, Affilié à God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};
export default About;
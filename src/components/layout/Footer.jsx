// Write all the code here
import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Shop</h2>
<p>Nous nous efforçons de vous offrir le meilleur goût possible.</p> <br />
<em>Vos commentaires sont les bienvenus.</em>
<strong>Tous droits réservés @burgershop</strong> </div>
      <aside>
        <h4>Suivez nous sur</h4>
<a href="https://youtube.com/xyz"> <AiFillYoutube />
</a>
<a href="https://instagram.com/xyz">
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
); };
export default Footer;

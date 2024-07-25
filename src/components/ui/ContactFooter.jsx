import HomerWork from "../../assets/icons/HomeWork";
import Phone from "../../assets/icons/Phone";
import Mail from "../../assets/icons/Mail";
import styles from "./styles/contactFooter.module.css";
import SocialLinks from "./SocialLinks";
import { redes } from "../../assets/redes";

export default function ContactFooter() {
  return (
    <article className={styles.contactFooter}>
      <h3>Contacto</h3>

      <p>
        <HomerWork /> Av. La Alborada 1185 Cercado de Lima
      </p>

      <p>
        <Phone /> 933 753 428
      </p>

      <p>
        <Mail /> edecagruas@gmail.com
      </p>

      <SocialLinks redes={redes} />

      <p className={styles.copyright}>
        Copyright © 2024 GruasEdeca - Todos los derechos reservados.
      </p>
    </article>
  );
}
